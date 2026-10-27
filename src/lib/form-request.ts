import { headers } from "next/headers";

/**
 * The visitor's IP as seen by the hosting edge, or null. Forwarded to the
 * database as `x-client-ip` so its per-IP rate limit (migration 095) counts
 * visitors, not the web server. Not a security boundary: any direct API
 * caller can set this header, so the database also limits per email and
 * per table.
 */
export async function clientIp(): Promise<string | null> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || h.get("x-real-ip")?.trim() || "";
  return ip.length > 0 && ip.length <= 64 ? ip : null;
}

/** PostgREST returns 429 when the database rate limit rejects an insert. */
export const RATE_LIMITED_MESSAGE =
  "Too many submissions from you in the last hour. Try again later, or email support@thefitlens.com.";
