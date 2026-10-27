/**
 * Internal "new beta signup" alert. Carries only what's needed to act on a
 * signup. The GLP-1 answer is deliberately excluded: it stays in the
 * database row and never goes to an inbox. The applicant's address is in
 * the body, not the subject line.
 */
export function buildSignupAlert(signup: {
  email: string;
  device_model: string | null;
  has_required_hardware: boolean;
  signedUpAt: Date;
}): { subject: string; text: string } {
  return {
    subject: "New beta signup",
    text: [
      `Email: ${signup.email}`,
      `Has hardware: ${signup.has_required_hardware ? "yes" : "no"}`,
      `Device: ${signup.device_model ?? "not provided"}`,
      `Signed up: ${signup.signedUpAt.toISOString()}`,
    ].join("\n"),
  };
}
