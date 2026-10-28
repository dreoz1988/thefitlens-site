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
  status: "available" as FeatureStatus,
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
    label: "Android phone with Health Connect",
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

// ── Homepage hero image (chosen by Andre 2026-10-27) ────────────────────────
// Confirmed feature: scale readings + Renpho tape (bleScale.ts, renpho-tape.ts).
// The image's baked-in line "More integrations being added." is unverified.

export const heroImage: ProductImage = {
  src: "/images/scale-and-tape.png",
  width: 1672,
  height: 941,
  alt: `A phone showing scale readings and tape measurements side by side, next to a smart scale and a smart tape. ${SAMPLE}`,
};

// ── Homepage features, in page order ────────────────────────────────────────

export const features: Feature[] = [
  {
    id: "progress-goal",
    status: "available",
    source: "ResultsHeroCard (trend and goal projection), ScoreGauge ProgressArc, TodaysPriorityCard",
    heading: "Your trend, your goal, one priority",
    body:
      "The home screen shows your weight trend, how far you are from your goal, and a single priority for today.",
    image: {
      src: "/images/progress-goal.png",
      width: 1672,
      height: 941,
      alt: `A phone showing The Fit Lens home screen with a weight trend, distance to goal, and today's focus. ${SAMPLE}`,
    },
  },
  {
    id: "scale-and-tape",
    status: "available",
    source: "src/services/bleScale.ts, src/ble/tape/renpho-tape.ts",
    heading: "Scale and tape in one place",
    body:
      "Weight, body fat and muscle mass come from your Bluetooth scale. The Renpho smart tape adds circumference at up to 14 sites, from neck to calves.",
  },
  {
    id: "body-avatar",
    status: "available",
    source: "src/components/BodyAvatarView.tsx",
    heading: "A 3D body built from your readings",
    body:
      "The model's shape follows your body fat percentage, muscle mass and visceral fat level, and updates with each weigh-in.",
    image: {
      src: "/screenshots/body-avatar.png",
      width: 390,
      height: 1258,
      alt: `The Fit Lens 3D wireframe body model with muscle, fat and visceral fat labels. ${SAMPLE}`,
    },
  },
  {
    id: "health-connect",
    status: "available",
    source: "src/services/healthConnect.ts; TrainingHomeScreen and ZoneStackChart for zones",
    heading: "Activity from Health Connect",
    body:
      "Steps, sleep, heart rate, workouts and more are read from Health Connect with your permission. Workouts show time in each heart-rate zone. What you see depends on what your watch or phone records.",
    image: {
      src: "/images/health-connect-activity.png",
      width: 1672,
      height: 941,
      alt: `A phone showing today's steps, heart rate, sleep, distance and active energy. ${SAMPLE}`,
    },
  },
  {
    id: "food-logging",
    status: "available",
    source: "WeighAndScanModal, FoodScaleService, food-search function, MealPlanCard, useWeighIns to planSync",
    heading: "Scan, weigh, search, plan",
    body:
      "Log food by barcode, by weight from the Etekcity nutrition scale, or by search. Your protein target is recalculated after each weigh-in, and AI Chef builds a meal plan around your targets.",
    image: {
      src: "/images/food-logging.png",
      width: 1672,
      height: 941,
      alt: `A phone showing AI Chef with barcode scan, food log, food library and a 7-day meal plan. ${SAMPLE}`,
    },
  },
  {
    id: "product-check",
    status: "available",
    source: "src/components/ProductCheckModal.tsx, src/lib/productHealth.ts",
    heading: "Check a product before you buy it",
    body:
      "Scan a packaged food to see its Nutri-Score, NOVA processing group and additives, where Open Food Facts has the data.",
  },
  {
    id: "glp1",
    status: "available",
    source: "src/hooks/useGlp1Coach.ts, GlpOneDashboardSection",
    heading: "Built for GLP-1 users, too",
    body:
      "Track protein and hydration against your targets, and see muscle and fat change since your start date. The Fit Lens does not give medication advice.",
  },
  {
    id: "body-score",
    status: "available",
    source: "src/utils/bodyScoreEngine.ts",
    heading: "Body Score",
    body:
      "One score from body composition (40%), activity including sleep (25%), nutrition (25%) and hydration (10%), so you can see what moved it.",
  },
  {
    id: "ai-coach",
    status: "available",
    source: "src/lib/anthropic.ts, coach and coach-v2 functions",
    heading: "A coach that reads your numbers",
    body: "Daily briefings and a chat coach built on your own readings, not generic advice.",
  },
  {
    id: "health-report",
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
    id: "segmental-avatar",
    status: "unverified",
    heading: "Per-region body composition",
    body: "",
    pendingNote: "The avatar is whole-body today. Confirm whether segmental data is planned before announcing it.",
  },
];

// ── Images supplied 2026-10-27 that are held, not published ────────────────

export const heldImages = [
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
