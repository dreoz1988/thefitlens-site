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

// ── Homepage hero image (changed by Andre 2026-10-28) ───────────────────────
// Confirmed features: weight trend, goal and today's priority (ResultsHeroCard,
// ScoreGauge ProgressArc, TodaysPriorityCard). The "Andre" greeting and initial
// were painted out of this copy of the image. scale-and-tape.png is no longer
// used on any page.

export const heroImage: ProductImage = {
  src: "/images/progress-goal.png",
  width: 1672,
  height: 941,
  alt: `A phone showing The Fit Lens home screen with a weight trend, distance to goal, and today's focus. ${SAMPLE}`,
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

export type HomeSection = "what" | "connected";

export const features: (Feature & { section: HomeSection })[] = [
  {
    id: "progress-goal",
    section: "what",
    status: "available",
    source: "ResultsHeroCard (trend and goal projection), ScoreGauge ProgressArc, TodaysPriorityCard",
    heading: "Your trend, your goal, one priority",
    body:
      "The home screen shows your weight trend, how far you are from your goal, and a single priority for today.",
    // Image moved to the hero (2026-10-28), so this section is text only.
  },
  {
    id: "body-avatar",
    section: "what",
    status: "available",
    source: "src/components/BodyAvatarView.tsx",
    heading: "A 3D body built from your readings",
    body:
      "The model's shape follows your scale readings, including body fat percentage and muscle mass, and updates with each weigh-in.",
    image: {
      src: "/screenshots/body-avatar.png",
      width: 390,
      height: 1258,
      alt: `The Fit Lens 3D wireframe body model with callout markers. ${SAMPLE}`,
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
    source: "src/components/ProductCheckModal.tsx, src/lib/productHealth.ts",
    heading: "Check a product before you buy it",
    body:
      "Scan a packaged food to see what's good and what to watch: whether it's high or low in sugar, salt and fat, how processed it is, and its additives, from Open Food Facts data.",
  },
  {
    id: "product-score",
    section: "what",
    status: "planned",
    heading: "Product score",
    body: "",
    pendingNote:
      "Marked planned on Andre's instruction (2026-10-28) to keep it off the site. Release 12 already shows a score out of 100 in Check a Product (ProductCheckModal).",
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
  {
    id: "health-report",
    section: "what",
    status: "available",
    source: "patient-summary-pdf function",
    heading: "A summary you can share",
    body:
      "Export a PDF of your body composition, activity, nutrition targets and coaching notes for your own records or a doctor's visit. It is a personal tracking summary, not a medical record.",
    image: {
      src: "/images/report-preview.png",
      width: 1672,
      height: 941,
      alt: `A tablet showing a sample Fit Lens health summary with body composition, nutrition and activity charts. ${SAMPLE}`,
    },
  },
  {
    id: "glp1",
    section: "what",
    status: "unverified",
    heading: "GLP-1 dashboard",
    body: "",
    pendingNote:
      "Held for Andre's confirmation. App source has it (useGlp1Coach.ts, GlpOneDashboardSection): protein and hydration against targets, muscle and fat change since start.",
  },
  {
    id: "meal-planner",
    section: "what",
    status: "unverified",
    heading: "AI Chef meal planner",
    body: "",
    pendingNote:
      "Held for Andre's confirmation, with its image (food-logging.png). App source has it (MealPlanCard via callClaudeJSON).",
  },
  {
    id: "scale-and-tape",
    section: "connected",
    status: "available",
    source: "src/services/bleScale.ts, src/ble/tape/renpho-tape.ts",
    heading: "Scale and tape in one place",
    body:
      "Weight, body fat and muscle mass come from your Bluetooth scale. The Renpho smart tape adds circumference at up to 14 sites, from neck to calves.",
  },
  {
    id: "health-connect-records",
    section: "connected",
    status: "unverified",
    heading: "Activity from Health Connect",
    body: "",
    pendingNote:
      "Held for Andre's confirmation, with its image (health-connect-activity.png). App source reads 5 required and 13 optional record types (healthConnect.ts).",
  },
  {
    id: "intensity-zones",
    section: "connected",
    status: "unverified",
    heading: "Heart-rate intensity zones",
    body: "",
    pendingNote:
      "Held for Andre's confirmation. App source shows weekly time in zone (TrainingHomeScreen, ZoneStackChart).",
  },
  {
    id: "segmental-avatar",
    section: "what",
    status: "unverified",
    heading: "Per-region body composition",
    body: "",
    pendingNote: "The avatar is whole-body today. Confirm whether segmental data is planned before announcing it.",
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
