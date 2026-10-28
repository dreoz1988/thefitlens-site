// Product facts for thefitlens.com. Every claim on the homepage and the
// compatibility page is read from this file.
//
// status:
//   available   in the current beta release (Play release 12, app commit c1e3243)
//   beta        in app code, but only in development builds; not in the release testers have
//   planned     not built, or only on an unmerged branch
//   unverified  not checked against the app source. Never published: pages render a
//               placeholder on previews and nothing in production.
//
// `source` says where a confirmed fact was checked (app repo, release commit
// c1e3243 or main d2f3f76, checked 2026-10-27). Copy is plain text with no
// em dashes (site rule).

export type FeatureStatus = "available" | "beta" | "planned" | "unverified";

export const STATUS_LABEL: Record<FeatureStatus, string> = {
  available: "Available",
  beta: "In development",
  planned: "Planned",
  unverified: "Unverified",
};

export interface ProductImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Feature {
  id: string;
  status: FeatureStatus;
  /** Where the fact was confirmed in the app. Absent only when unverified. */
  source?: string;
  heading: string;
  /** Published copy. Empty for unverified entries. */
  body: string;
  /** What must be confirmed before this can be published. */
  pendingNote?: string;
  image?: ProductImage;
}

const SAMPLE = "Illustrative interface with sample data.";

// ── Hardware ────────────────────────────────────────────────────────────────

export interface Device {
  id: string;
  kind: "Body composition scale" | "Smart tape measure" | "Nutrition scale";
  brand: string;
  model: string;
  status: FeatureStatus;
  source?: string;
  measures: string;
  note?: string;
}

export const devices: Device[] = [
  {
    id: "etekcity-esf551",
    kind: "Body composition scale",
    brand: "Etekcity",
    model: "ESF-551",
    status: "available",
    source: "src/services/bleScale.ts",
    measures: "Weight and body composition (bioelectrical impedance)",
  },
  {
    id: "renpho-rmsb01",
    kind: "Body composition scale",
    brand: "Renpho",
    model: "R-MSB01",
    status: "available",
    source: "src/services/bleScale.ts",
    measures: "Weight and body composition (bioelectrical impedance)",
    note: "Supported by the app. The beta signup form still asks for an Etekcity scale.",
  },
  {
    id: "renpho-rmsc04",
    kind: "Body composition scale",
    brand: "Renpho",
    model: "R-MSC04 (8-electrode)",
    status: "beta",
    source: "src/ble/scales/renpho-rmsc04.ts, reachable only in development builds",
    measures: "Weight and body composition",
    note: "Not in the beta release. Shown under Not yet supported.",
  },
  {
    id: "renpho-ry002",
    kind: "Smart tape measure",
    brand: "Renpho",
    model: "R-Y002",
    status: "available",
    source: "src/ble/tape/renpho-tape.ts, BodyMeasurementsScreen",
    measures:
      "Circumference at neck, shoulders, chest, biceps, forearms, waist, abdomen, hips, thighs and calves, plus a custom site",
  },
  {
    id: "etekcity-esn00",
    kind: "Nutrition scale",
    brand: "Etekcity",
    model: "ESN00",
    status: "available",
    source: "src/services/FoodScaleService.ts",
    measures: "Food weight for logging",
  },
];

// ── Health Connect ──────────────────────────────────────────────────────────

export const healthConnect = {
  // Unverified on Andre's instruction (2026-10-28); the lists below are what
  // the app source reads, kept for when it is confirmed.
  status: "unverified" as FeatureStatus,
  source: "src/services/healthConnect.ts REQUIRED_RECORD_TYPES / OPTIONAL_RECORD_TYPES",
  access: "Read only. The app writes nothing to Health Connect.",
  required: ["Steps", "Heart rate", "Resting heart rate", "Sleep", "Total calories burned"],
  optional: [
    "Active calories burned",
    "Distance",
    "Floors climbed",
    "Elevation gained",
    "Exercise sessions",
    "Speed",
    "Heart rate variability",
    "Blood oxygen",
    "Respiratory rate",
    "Blood pressure",
    "VO2 max",
    "Body fat",
    "Lean body mass",
  ],
};

export const platforms = [
  {
    id: "android",
    label: "Android phone",
    status: "available" as FeatureStatus,
    source: "Play release 12",
  },
  {
    id: "ios",
    label: "iPhone",
    status: "unverified" as FeatureStatus,
    note: "No iOS build exists. Confirm whether to call it planned before publishing.",
  },
];

// ── Homepage hero image (concept B, 2026-10-28) ─────────────────────────────
// Built from Andre's "The fit lens fitness app hero.png" (phone + people only;
// the baked-in headline, buttons and "CONCEPT B" label are cropped out, the
// page renders that text as HTML). The generated phone screen was replaced with
// a REAL app capture: the home screen of the staging demo account (persona
// "Alex", sample data) from "Fit Lens - Play Store Screenshots/02 Home.png",
// captured August 2026. It shows the weight trend, % to goal, pace and today's
// priority (ResultsHeroCard, ScoreGauge ProgressArc, TodaysPriorityCard).
// progress-goal.png and scale-and-tape.png are no longer used on any page.

export const heroImage: ProductImage = {
  src: "/images/hero-real-screen.png",
  width: 1270,
  height: 483,
  alt: `Two people looking at a phone, next to a phone showing The Fit Lens home screen: a 171.5 lb weight trend, 50% of the way to a 164 lb goal, and today's priority. Real app screen with sample data from a demo account.`,
};

// ── Homepage features ───────────────────────────────────────────────────────
// `section` places each feature in the homepage outline:
//   what       "What the app does"
//   connected  "Connected data"
// Only status "available" is published. On 2026-10-28 Andre asked for the
// GLP-1 dashboard, meal planner, intensity zones and Health Connect records to
// stay "unverified" (off the site, images held) until he confirms them, and
// for the product score to be marked "planned". The notes record what the app
// source shows for each, so the decision can be revisited.

export type HomeSection = "what" | "beyond-weight" | "connected";

export const features: (Feature & { section: HomeSection })[] = [
  {
    id: "progress-goal",
    section: "what",
    status: "available",
    source: "ResultsHeroCard (trend and goal projection), ScoreGauge ProgressArc, TodaysPriorityCard",
    heading: "Your trend, your goal, one priority",
    body:
      "The home screen shows your weight trend, how far you are from your goal, and a single priority for today.",
    image: {
      src: "/images/weight-trend.png",
      width: 1672,
      height: 941,
      alt: `A phone showing The Fit Lens home screen with a weight trend, a goal gauge and today's focus, next to two people looking at a phone. The demo name was removed from the greeting. ${SAMPLE}`,
    },
  },
  {
    id: "food-logging",
    section: "what",
    status: "available",
    source: "WeighAndScanModal, FoodScaleService, food-search function, useWeighIns to planSync",
    heading: "Scan, weigh or search your food",
    body:
      "Log food by barcode, by weight from the Etekcity nutrition scale, or by search. Your protein target is recalculated after each weigh-in.",
  },
  {
    id: "product-check",
    section: "what",
    status: "available",
    source: "src/components/ProductCheckModal.tsx:154-155 (score out of 100), src/lib/productHealth.ts",
    heading: "Check a product before you buy it",
    body:
      "Scan a packaged food to get a score out of 100 and see what's good and what to watch: whether it's high or low in sugar, salt and fat, how processed it is, and its additives, from Open Food Facts data.",
    image: {
      src: "/images/product-check.png",
      width: 1672,
      height: 941,
      alt: `A phone showing a product check for a sample oat cereal with an illustrative score of 58 out of 100, next to two people scanning a cereal box in a grocery aisle. ${SAMPLE}`,
    },
  },
  {
    id: "product-score",
    section: "what",
    status: "available",
    source: "src/components/ProductCheckModal.tsx:154-155, src/lib/productHealth.ts:39",
    heading: "Product score",
    body:
      "Every product you check gets a score out of 100, with a short breakdown of what raised or lowered it.",
  },
  {
    id: "body-score",
    section: "what",
    status: "available",
    source: "src/utils/bodyScoreEngine.ts",
    heading: "Body Score",
    body:
      "One weekly read from body composition (40%), activity including sleep (25%), nutrition (25%) and hydration (10%), so you can see what moved it.",
  },
  {
    id: "ai-coach",
    section: "what",
    status: "available",
    source: "src/lib/anthropic.ts, coach and coach-v2 functions",
    heading: "A coach that reads your numbers",
    body: "Daily briefings and a chat coach built on your own readings, not generic advice.",
  },
  // Added 2026-10-28 on Andre's instruction; he asked that the image claims not be verified.
  {
    id: "health-report-pdf",
    section: "what",
    status: "available",
    source: "patient-summary-pdf function",
    heading: "Your progress, ready to share",
    body:
      "Export your trends as a PDF for a doctor's visit or your own records. A personal tracking summary, not a clinical document.",
    image: {
      src: "/images/health-report-pdf.png",
      width: 1672,
      height: 941,
      alt: `A tablet showing a sample progress summary with body composition, nutrition and activity charts, next to two people reading a printed copy. ${SAMPLE}`,
    },
  },
  {
    id: "training",
    section: "what",
    status: "available",
    source: "TrainingHomeScreen, ZoneStackChart (added on Andre's instruction 2026-10-28)",
    heading: "Your training, in one clear view",
    body: "Review your sessions, explore intensity zones, and track your training week.",
    image: {
      src: "/images/training.png",
      width: 1672,
      height: 941,
      alt: `A phone showing a training week with sessions, minutes per day and time in each intensity zone, next to two people lifting dumbbells. ${SAMPLE}`,
    },
  },
  {
    id: "track-more-than-weight",
    section: "beyond-weight",
    status: "available",
    source: "useGlp1Coach.ts, GlpOneDashboardSection (added on Andre's instruction 2026-10-28)",
    heading: "Track more than weight",
    body: "Keep body measurements, nutrition and hydration in view.",
    image: {
      src: "/images/glp1-tracking.png",
      width: 1672,
      height: 941,
      alt: `A dashboard showing GLP-1 tracking with protein and hydration against example goals, lean and fat mass change, and weight and lean mass history, next to two people standing together. ${SAMPLE}`,
    },
  },
  {
    id: "scale-and-tape",
    section: "connected",
    status: "available",
    source: "src/services/bleScale.ts, src/ble/tape/renpho-tape.ts",
    heading: "Scale and tape in one place",
    body:
      "Weight, body fat and muscle mass come from your Bluetooth scale. The Renpho smart tape adds circumference at up to 14 sites, from neck to calves.",
    image: {
      src: "/images/body-composition.png",
      width: 1672,
      height: 941,
      alt: `A phone showing a body composition screen with a 3D body model, muscle mass and body fat, next to two people looking at a phone. ${SAMPLE}`,
    },
  },
  {
    id: "health-connect-records",
    section: "connected",
    // Approved by Andre with its image (health-connect.png), 2026-10-28.
    status: "available",
    source: "src/services/healthConnect.ts:18 (5 required) and :26 (13 optional record types)",
    heading: "Activity from Health Connect",
    body:
      "Steps, sleep, heart rate, distance and more are read from Health Connect with your permission, from whichever watch or app writes there. What you see depends on what your device records.",
    image: {
      src: "/images/health-connect.png",
      width: 1672,
      height: 941,
      alt: `A phone showing today's steps, heart rate, sleep, distance and active energy from Health Connect, next to two people checking a phone and a watch. ${SAMPLE}`,
    },
  },
];

// ── Images supplied 2026-10-27 that are held, not published ────────────────

export const heldImages = [
  {
    file: "Scan, log, and plan meals.png (public/images/food-logging.png)",
    reason: "Shows the AI Chef meal planner, which is unverified until Andre confirms it (2026-10-28).",
  },
  {
    file: "The Fit Lens wearable activity dashboard.png (public/images/health-connect-activity.png)",
    reason: "Shows Health Connect records, which are unverified until Andre confirms them (2026-10-28).",
  },
  {
    file: "The Fit Lens grocery scanning demo.png",
    reason: "Shows an ingredients list and nutrition table. Check a Product shows a grade, Nutri-Score, NOVA and additives instead. Also uses a different logo.",
  },
  {
    file: "The Fit Lens GLP-1 wellness dashboard.png",
    reason: "Shows a weight and lean mass trend chart and an Export progress button on the GLP-1 dashboard. Neither was found in the app.",
  },
  {
    file: "Training Dashboard with Gym Partners.png",
    reason: "Shows a Log workout button. Manual workout logging was removed; workouts come from Health Connect only.",
  },
  {
    file: "The Fit Lens 3D progress dashboard.png",
    reason: "Shows Front, Side and Back view controls and photo-real bodies the app does not have. The real avatar render is used instead.",
  },
  {
    file: "Dark wellness dashboard with fitness duo.png",
    reason: "Tablet-style interface for a phone-only app. Same content as the published progress image.",
  },
  {
    file: "The Fit Lens measurement dashboard.png",
    reason: "Laptop-style interface for a phone-only app. Same content as the published scale and tape image.",
  },
  {
    file: "The Fit Lens wellness dashboard.png",
    reason: "Laptop-style GLP-1 dashboard with the same unconfirmed trend charts and export button.",
  },
];
