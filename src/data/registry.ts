import { siteConfig } from "@/lib/site-config";
import type { CurriculumApp, MediaItem, Project } from "@/types";

const personalProjects: readonly Project[] = [
  {
    slug: "jobtasker",
    title: "JobTasker",
    status: "LIVE",
    origin: "PERSONAL PRODUCT",
    category: "PERSONAL",
    evidence: "FLAGSHIP",
    mission:
      "A productivity app that turns tasks and job applications into deliberate, tracked work, live on Google Play.",
    stack: ["FLUTTER", "DART", "MVVM", "CUBIT", "SQFLITE"],
    facts: [
      { label: "AVAILABLE ON", value: "GOOGLE PLAY" },
      { label: "WORKS", value: "OFFLINE" },
      { label: "UPDATES", value: "OVER THE AIR" },
      { label: "CRASH TRACKING", value: "SENTRY" },
    ],
    media: [
      {
        src: "/images/work/jobtasker/JobTasker_Hero.webp",
        alt: "JobTasker hero composite: task list, focus mode, and dashboard side by side",
        caption: "HOMEPAGE / HERO COMPOSITE",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: true,
      },
      {
        src: "/images/work/jobtasker/tasks.webp",
        alt: "JobTasker task list screen showing tracked tasks and their statuses",
        caption: "TASK VIEW / TRACKED WORK",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
      {
        src: "/images/work/jobtasker/task.webp",
        alt: "JobTasker add and edit task screen",
        caption: "ADD / EDIT TASK",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
      {
        src: "/images/work/jobtasker/focus.webp",
        alt: "JobTasker focus mode session screen",
        caption: "FOCUS MODE / DISTRACTION CONTROL",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
      {
        src: "/images/work/jobtasker/dashboard.webp",
        alt: "JobTasker dashboard summarising completed tasks",
        caption: "DASHBOARD / PROGRESS AT A GLANCE",
        kind: "IMAGE",
        width: 1512,
        height: 884,
        isHero: false,
      },
      {
        src: "/images/work/jobtasker/application.webp",
        alt: "JobTasker job application form and pipeline tracking",
        caption: "APPLICATION / PIPELINE",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
      {
        src: "/images/work/jobtasker/onboarding.webp",
        alt: "JobTasker onboarding screens for first run",
        caption: "ONBOARDING / FIRST RUN",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
      {
        src: "/images/work/jobtasker/profile.webp",
        alt: "JobTasker profile screen",
        caption: "PROFILE",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
      {
        src: "/images/work/jobtasker/settings.webp",
        alt: "JobTasker settings screen in dark theme",
        caption: "SETTINGS / DARK THEME",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
    ],
    constraints: [
      { label: "PLATFORM", value: "ANDROID, ON GOOGLE PLAY" },
      { label: "STRUCTURE", value: "MVVM + CUBIT" },
      { label: "INTERNET", value: "WORKS FULLY OFFLINE" },
      { label: "CRASH REPORTING", value: "SENTRY" },
      { label: "UPDATES", value: "OVER THE AIR" },
    ],
    decisions: [
      {
        title: "Works without internet",
        body: "Everything the app does runs on the phone's own storage. Internet is a bonus, never a requirement.",
        because:
          "A productivity app that stops working when the connection drops fails exactly when you need it most.",
      },
      {
        title: "Reliable after launch",
        body: "Crashes are reported automatically, fixes ship straight to users without waiting for store review, and reminders are built in, all set up before launch, not after the first problem.",
        because:
          "Publishing on Google Play means owning the app after release. Catching problems early turns crashes into quick fixes instead of silent uninstalls.",
      },
      {
        title: "Tasks and job hunting in one place",
        body: "Tasks and job applications share one system: statuses, follow-ups, and focus sessions cover both finding work and doing it.",
        because:
          "The app was designed around how job seekers actually work, tracking applications with the same discipline as daily tasks instead of two separate tools.",
      },
    ],
    deployment: {
      facts: [
        { label: "CHANNEL", value: "GOOGLE PLAY" },
        { label: "PLATFORM", value: "ANDROID" },
        { label: "CRASH REPORTING", value: "SENTRY" },
        { label: "CODE UPDATES", value: "SHOREBIRD OTA" },
        { label: "PUSH + REMINDERS", value: "ONESIGNAL + LOCAL NOTIFICATIONS" },
      ],
      links: [
        {
          label: "SOURCE ↗",
          href: `${siteConfig.githubUrl}/Taskify-App`,
        },
      ],
    },
    currentState: {
      stampNote: "Live on Google Play with active users.",
      details: [
        { label: "STATUS", value: "PUBLISHED ON GOOGLE PLAY" },
        { label: "CRASH REPORTING", value: "ACTIVE" },
        { label: "UPDATES", value: "OVER THE AIR" },
      ],
      lastReviewed: "2026-08",
    },
    isImportant: true,
    priority: 1,
    links: [
      { label: "GOOGLE PLAY ↗", href: "https://play.google.com/store/apps/details?id=com.karim.jobtasker" },
      { label: "SOURCE ↗", href: `${siteConfig.githubUrl}/Taskify-App` },
    ],
  },
  {
    slug: "marsa",
    title: "Marsa",
    status: "BUILDING",
    origin: "PERSONAL PRODUCT",
    category: "PERSONAL",
    evidence: "FLAGSHIP",
    mission:
      "A vacation-rental booking platform where guests discover units, book them in four guided steps, and pay through local rails.",
    currentPhase: "BOOKING & INSTAPAY RECEIPT FLOW",
    stack: ["FLUTTER", "CLEAN ARCHITECTURE", "CUBIT", "DIO"],
    facts: [
      { label: "BOOKING", value: "4 EASY STEPS" },
      { label: "PAYMENTS", value: "INSTAPAY + WALLET" },
      { label: "THEMES", value: "LIGHT + DARK" },
      { label: "UPDATES", value: "OVER THE AIR" },
    ],
    media: [
      {
        src: "/images/work/marsa/Marsa_Hero.webp",
        alt: "Marsa hero composite: discovery, booking, and payment flow side by side",
        caption: "HOMEPAGE / HERO COMPOSITE",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: true,
      },
      {
        src: "/images/work/marsa/home_light.webp",
        alt: "Marsa home screen in light theme",
        caption: "HOME / LIGHT THEME",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/filter1_light.webp",
        alt: "Marsa smart filtering screen",
        caption: "FILTERS / SMART SEARCH",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/details1_light.webp",
        alt: "Marsa unit detail screen in light theme showing photos and booking entry point",
        caption: "UNIT DETAILS / LIGHT THEME",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/details1_dark.webp",
        alt: "Marsa unit detail screen in dark theme",
        caption: "UNIT DETAILS / DARK THEME",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/date2_step_light.webp",
        alt: "Marsa date selection step of the booking flow",
        caption: "BOOKING STEP 1 / DATES",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/summary_step_light.webp",
        alt: "Marsa booking summary step",
        caption: "BOOKING STEP 2 / SUMMARY",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/payment_step1_light.webp",
        alt: "Marsa payment step of the booking flow with receipt upload",
        caption: "BOOKING STEP 3 / PAYMENT",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/payment_step2_light.webp",
        alt: "Marsa payment receipt confirmation step",
        caption: "BOOKING STEP 3 / RECEIPT",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/login_light.webp",
        alt: "Marsa login screen in light theme",
        caption: "SIGN IN / LIGHT THEME",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/register_light.webp",
        alt: "Marsa registration screen in light theme",
        caption: "REGISTRATION",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/profile_light.webp",
        alt: "Marsa profile screen in light theme",
        caption: "PROFILE",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/theme_light.webp",
        alt: "Marsa theme selection screen",
        caption: "THEME PREFERENCE",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/coupon.webp",
        alt: "Marsa coupon screen",
        caption: "COUPONS",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/marsa/fav_dark.webp",
        alt: "Marsa favorites screen in dark theme",
        caption: "FAVORITES / DARK THEME",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
    ],
    constraints: [
      { label: "STRUCTURE", value: "CLEAN ARCHITECTURE" },
      { label: "PAYMENTS", value: "INSTAPAY + WALLET, WITH RECEIPT UPLOAD" },
      { label: "BOOKING", value: "4 GUIDED STEPS" },
      { label: "SECURITY", value: "SIGN-IN DATA STORED SECURELY" },
      { label: "UPDATES", value: "OVER THE AIR" },
    ],
    decisions: [
      {
        title: "Clean structure from day one",
        body: "The code is split into separate layers, so each booking step can change without breaking the others.",
        because:
          "Booking rules change constantly: payment providers change, requirements get added. Separation keeps those changes contained instead of rippling through the app.",
      },
      {
        title: "One clear way to handle errors",
        body: "Every network or server problem is turned into a clear message the app can show, instead of failing silently or confusing the guest.",
        because:
          "Four booking steps means four places things can go wrong. One shared approach keeps every error message predictable.",
      },
      {
        title: "Payments the way people actually pay",
        body: "Guests pay by InstaPay or wallet transfer and upload the receipt right in the app; the reservation status updates from there.",
        because:
          "Local rental markets run on manual transfers. Meeting users on InstaPay, with proof attached, removes the trust gap a card-only flow would create.",
      },
    ],
    deployment: {
      facts: [
        { label: "STATUS", value: "IN ACTIVE DEVELOPMENT" },
        { label: "UPDATES", value: "SHOREBIRD OTA DURING BUILD-OUT" },
        { label: "THEME COVERAGE", value: "FULL LIGHT / DARK" },
      ],
      links: [],
    },
    currentState: {
      stampNote: "In development: booking and payment flow shipping now.",
      details: [
        { label: "CURRENT PHASE", value: "BOOKING + PAYMENT FLOW" },
        { label: "CODEBASE", value: "STABLE ACROSS FEATURES" },
        { label: "NEXT", value: "POLISHING RESERVATION TRACKING" },
      ],
      lastReviewed: "2026-08",
    },
    isImportant: true,
    priority: 2,
    links: [{ label: "SOURCE ↗", href: `${siteConfig.githubUrl}/marsa-app-readme` }],
  },
  {
    slug: "quran-cuts",
    title: "Quran Cuts",
    status: "BUILDING",
    origin: "PERSONAL PRODUCT",
    category: "PERSONAL",
    evidence: "FLAGSHIP",
    mission:
      "An on-device generator that turns Quran verses into shareable vertical video clips: text, recitation, and template composed entirely on the phone.",
    stack: ["FLUTTER", "FFMPEG", "HIVE", "GETIT"],
    facts: [
      { label: "BUILT WITH", value: "FFMPEG" },
      { label: "WORKS", value: "ON-DEVICE" },
      { label: "OUTPUT", value: "VERTICAL VIDEO (MP4)" },
      { label: "CREATION", value: "7 GUIDED STEPS" },
      { label: "STORAGE", value: "HIVE" },
    ],
    media: [
      {
        src: "/images/work/quran-cuts/QuranCuts_Hero.webp",
        alt: "Quran Cuts hero composite: creation, rendering, and export flow side by side",
        caption: "HOMEPAGE / HERO COMPOSITE",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: true,
      },
      {
        src: "/images/work/quran-cuts/surah_light.webp",
        alt: "Quran Cuts surah selection screen",
        caption: "STEP 1 / SURAH SELECTION",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/quran-cuts/ayah_light.webp",
        alt: "Quran Cuts ayah range selection screen",
        caption: "STEP 2 / AYAH RANGE",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/quran-cuts/reciter_light.webp",
        alt: "Quran Cuts reciter selection screen",
        caption: "STEP 3 / RECITER",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/quran-cuts/template-light.webp",
        alt: "Quran Cuts visual template selection screen",
        caption: "STEP 4 / TEMPLATE",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/quran-cuts/generation1_light.webp",
        alt: "Quran Cuts generation progress screen while FFmpeg renders the clip",
        caption: "GENERATION / ON-DEVICE RENDER",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/quran-cuts/preview_light.webp",
        alt: "Quran Cuts preview screen playing a generated reel before export",
        caption: "PREVIEW / BEFORE EXPORT",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/quran-cuts/done_light.webp",
        alt: "Quran Cuts completion screen after export",
        caption: "EXPORT COMPLETE",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
      {
        src: "/images/work/quran-cuts/home_light.webp",
        alt: "Quran Cuts home screen listing previous generated clips",
        caption: "HOME / CLIP LIBRARY",
        kind: "IMAGE",
        width: 1080,
        height: 2424,
        isHero: false,
      },
    ],
    constraints: [
      { label: "PROCESSING", value: "ENTIRELY ON THE PHONE" },
      { label: "TEXT", value: "ARABIC VERSE LAYOUT" },
      { label: "AUDIO", value: "CHOOSE THE RECITER PER CLIP" },
      { label: "OUTPUT", value: "HD VERTICAL VIDEO" },
      { label: "CREATION FLOW", value: "7 GUIDED STEPS" },
    ],
    decisions: [
      {
        title: "Everything happens on the phone",
        body: "The video is put together entirely on the device: verse text, recitation, and the chosen template. Nothing is uploaded to a server.",
        because:
          "Religious content carries a privacy expectation. Local processing also means creation works offline and costs nothing per video.",
      },
      {
        title: "Arabic text done right",
        body: "Verse wrapping and letter shaping were tuned specifically for Arabic, so every verse reads correctly in the final video.",
        because:
          "Standard text layout breaks Arabic line boundaries, producing clipped or awkwardly joined verses. Correct rendering is the difference between a usable clip and an unreadable one.",
      },
      {
        title: "Guided seven-step creation",
        body: "Surah, verse range, reciter, template, preview, export: a linear guided flow, with each step kept separate and easy to maintain.",
        because:
          "Video creation has many options. A guided step-by-step flow keeps the tool approachable for everyone.",
      },
    ],
    deployment: {
      facts: [
        { label: "COMPLETED", value: "APR 2026" },
        { label: "RENDER ENGINE", value: "MOBILE FFmpeg BUILD" },
        { label: "OUTPUT TARGET", value: "SHARE SHEET / GALLERY" },
      ],
      links: [
        { label: "SOURCE ↗", href: `${siteConfig.githubUrl}/Quran-Cuts-App` },
      ],
    },
    currentState: {
      stampNote: "Feature-complete build delivered April 2026.",
      details: [
        { label: "BUILD", value: "COMPLETE" },
        { label: "PIPELINE", value: "TEXT + AUDIO + TEMPLATE → VERTICAL VIDEO" },
      ],
      lastReviewed: "2026-08",
    },
    isImportant: true,
    priority: 3,
    links: [
      { label: "SOURCE ↗", href: `${siteConfig.githubUrl}/Quran-Cuts-App` },
    ],
  },
  {
    slug: "mothooq",
    title: "Mothooq",
    status: "DELIVERED",
    origin: "PERSONAL PRODUCT",
    category: "PERSONAL",
    evidence: "FLAGSHIP",
    mission:
      "A used-car marketplace where every listing follows a mandatory inspection at a partner service center before it goes live.",
    stack: ["FLUTTER", "FIREBASE AUTH", "REALTIME DATABASE", "BLOC"],
    facts: [
      { label: "TIMELINE", value: "2 WEEKS" },
      { label: "TYPE", value: "CAR MARKETPLACE" },
      { label: "SIGN-IN", value: "GOOGLE / FACEBOOK" },
      { label: "DATABASE", value: "FIREBASE (LIVE SYNC)" },
      { label: "ROLES", value: "USER / SERVICE CENTER" },
    ],
    media: [
      {
        src: "/images/work/mothooq/home_shots.webp",
        alt: "Mothooq marketplace home screens",
        caption: "HOME / MARKETPLACE",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: true,
      },
      {
        src: "/images/work/mothooq/car_details_shots.webp",
        alt: "Mothooq car detail screens with inspection-backed listing information",
        caption: "CAR DETAILS / INSPECTION-BACKED LISTINGS",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: false,
      },
      {
        src: "/images/work/mothooq/apply_order_shots.webp",
        alt: "Mothooq apply-to-order screens",
        caption: "APPLY ORDER / BUYER FLOW",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: false,
      },
      {
        src: "/images/work/mothooq/sell_car-shots.webp",
        alt: "Mothooq sell-a-car submission screens",
        caption: "SELLING / LISTING SUBMISSION",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: false,
      },
      {
        src: "/images/work/mothooq/services_shots.webp",
        alt: "Mothooq service center screens for the partner role",
        caption: "SERVICE CENTER / PARTNER ROLE",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: false,
      },
      {
        src: "/images/work/mothooq/my_cars_shots.webp",
        alt: "Mothooq my-cars screens for vehicle owners",
        caption: "MY CARS / OWNER VIEW",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: false,
      },
      {
        src: "/images/work/mothooq/auth_shots.webp",
        alt: "Mothooq authentication screens with Google and Facebook sign-in",
        caption: "AUTH / GOOGLE + FACEBOOK",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: false,
      },
    ],
    constraints: [
      { label: "TIMELINE", value: "2 WEEKS" },
      { label: "ROLES", value: "BUYERS + PARTNER SERVICE CENTERS" },
      { label: "LISTING RULE", value: "INSPECTION REQUIRED FIRST" },
      { label: "SIGN-IN", value: "GOOGLE + FACEBOOK" },
      { label: "BACKEND", value: "FIREBASE (LIVE SYNC)" },
    ],
    decisions: [
      {
        title: "Role-based access as a core rule",
        body: "Buyers browse and buy; service centers inspect and clear cars. Permissions are enforced by role, not by interface hints.",
        because:
          "The marketplace's whole promise is inspected cars. Making the service center a real role, not an admin afterthought, is what keeps that promise.",
      },
      {
        title: "Live data with Firebase",
        body: "Listings, appointments, and status changes update live through Firebase instead of a custom-built server.",
        because:
          "A two-week timeline leaves no room to build a server. Live sync matched the listing states and let all the time go into the experience.",
      },
      {
        title: "Clean structure under deadline pressure",
        body: "The app's state management was structured properly from the first commit, despite the two-week timeline.",
        because:
          "Deadline pressure is when code structure usually dies. Keeping it clean meant the update phase could build on the app instead of rewriting it.",
      },
    ],
    deployment: {
      facts: [
        { label: "DELIVERED", value: "MARCH 2025" },
        { label: "SCOPE", value: "FULL MARKETPLACE FLOW" },
        { label: "AUTH PROVIDERS", value: "GOOGLE · FACEBOOK" },
      ],
      links: [
        {
          label: "APP FILES ↗",
          href: "https://drive.google.com/drive/folders/1IYZBUvbWJ6e18FKV7sm7NFvf_nKkDbiT?usp=drive_link",
        },
      ],
    },
    currentState: {
      stampNote:
        "Completed March 2025 with a planned update phase.",
      details: [
        { label: "DELIVERY", value: "COMPLETE" },
        { label: "PLATFORM", value: "ANDROID" },
      ],
      lastReviewed: "2026-08",
    },
    isImportant: false,
    priority: 4,
    links: [
      {
        label: "APP FILES ↗",
        href: "https://drive.google.com/drive/folders/1IYZBUvbWJ6e18FKV7sm7NFvf_nKkDbiT?usp=drive_link",
      },
    ],
  },
  {
    slug: "bidmart",
    title: "BidMart",
    status: "DELIVERED",
    origin: "GRADUATION PROJECT",
    category: "PERSONAL",
    evidence: "SELECTED",
    mission:
      "A real-time auction platform with live bidding, dynamic price updates, seller-side product management, and an integrated payment flow.",
    stack: ["FLUTTER", "CLEAN ARCHITECTURE", "REST API", "FCM"],
    facts: [
      { label: "BIDDING", value: "LIVE" },
      { label: "PAYMENTS", value: "BUILT IN" },
      { label: "ALERTS", value: "PUSH" },
      { label: "PERIOD", value: "DEC 2024 - JUL 2025" },
    ],
    media: [
      {
        src: "/images/work/bidmart/BidMart_Hero.webp",
        alt: "BidMart hero composite: browsing, bidding, and payment flow side by side",
        caption: "HOMEPAGE / HERO COMPOSITE",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: true,
      },
      {
        src: "/images/work/bidmart/home.webp",
        alt: "BidMart auction home screen showing live listings",
        caption: "HOME / LIVE AUCTION LISTINGS",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: false,
      },
      {
        src: "/images/work/bidmart/product.webp",
        alt: "BidMart product detail screen with bidding interface",
        caption: "PRODUCT DETAIL / BIDDING",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: false,
      },
      {
        src: "/images/work/bidmart/payment.webp",
        alt: "BidMart payment flow screen",
        caption: "PAYMENT FLOW",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
      {
        src: "/images/work/bidmart/notifications.webp",
        alt: "BidMart notifications screen with bidding alerts",
        caption: "NOTIFICATIONS / BIDDING ALERTS",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
      {
        src: "/images/work/bidmart/add_product.webp",
        alt: "BidMart add product screen for sellers",
        caption: "SELLING / NEW LISTING",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
      {
        src: "/images/work/bidmart/user_product.webp",
        alt: "BidMart seller product management screen",
        caption: "SELLER DASHBOARD / OWNED LISTINGS",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: false,
      },
      {
        src: "/images/work/bidmart/onboarding.webp",
        alt: "BidMart onboarding screens",
        caption: "ONBOARDING",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: false,
      },
      {
        src: "/images/work/bidmart/auth.webp",
        alt: "BidMart authentication screen",
        caption: "AUTHENTICATION",
        kind: "IMAGE",
        width: 1920,
        height: 1440,
        isHero: false,
      },
    ],
    links: [
      { label: "SOURCE ↗", href: "https://drive.google.com/drive/folders/1kbLdD2cy-TKpTsR25eVtWxRx6TMUop2M?usp=drive_link" },
    ],
    isImportant: true,
    priority: 4,
  },
  {
    slug: "chatbot-app",
    title: "Chatbot App",
    origin: "PERSONAL PRODUCT",
    category: "PERSONAL",
    evidence: "SELECTED",
    mission:
      "A bilingual AI chat assistant with Arabic/English support, Firebase sign-in, and persisted user preferences.",
    stack: ["FLUTTER", "GEMINI AI", "FIREBASE AUTH", "BLOC"],
    facts: [
      { label: "LANGUAGES", value: "AR / EN" },
      { label: "AI", value: "GEMINI" },
      { label: "SIGN-IN", value: "FIREBASE" },
    ],
    media: [
      {
        src: "/images/work/chatbot-app/onboarding_shots.webp",
        alt: "Chatbot app onboarding screens collage",
        caption: "ONBOARDING / FIRST RUN",
        kind: "IMAGE",
        width: 3600,
        height: 2700,
        isHero: true,
      },
      {
        src: "/images/work/chatbot-app/auth_shots.webp",
        alt: "Chatbot app authentication screens collage",
        caption: "AUTHENTICATION",
        kind: "IMAGE",
        width: 3600,
        height: 2700,
        isHero: false,
      },
      {
        src: "/images/work/chatbot-app/profile_shots.webp",
        alt: "Chatbot app profile screen",
        caption: "PROFILE / PREFERENCES",
        kind: "IMAGE",
        width: 3600,
        height: 2700,
        isHero: false,
      },
    ],
    links: [{ label: "SOURCE ↗", href: `${siteConfig.githubUrl}/chatbot-app/tree/master` }],
    isImportant: false,
    priority: 6,
  },
  {
    slug: "bookly",
    title: "Bookly",
    origin: "PERSONAL PRODUCT",
    category: "PERSONAL",
    evidence: "LIMITED",
    mission:
      "A book discovery application consuming REST APIs, with custom browsing animations.",
    stack: ["FLUTTER", "REST API"],
    facts: [{ label: "DATA", value: "REST API" }],
    media: [
      {
        src: "/images/work/bookly/shots.webp",
        alt: "Bookly app screen collage showing the book browsing experience",
        caption: "BOOK DISCOVERY / SCREEN COLLAGE",
        kind: "IMAGE",
        width: 3600,
        height: 2700,
        isHero: true,
      },
    ],
    links: [{ label: "SOURCE ↗", href: `${siteConfig.githubUrl}/Bookly-App` }],
    isImportant: false,
    priority: 7,
  },
  {
    slug: "playzone",
    title: "PlayZone",
    origin: "PERSONAL PRODUCT",
    category: "PERSONAL",
    evidence: "LIMITED",
    stack: [],
    facts: [{ label: "DETAILS", value: "COMING SOON" }],
    media: [
      {
        src: "/images/work/playzone/playzone.webp",
        alt: "PlayZone app screenshot",
        caption: "AVAILABLE EVIDENCE / SINGLE CAPTURE",
        kind: "IMAGE",
        width: 1920,
        height: 1280,
        isHero: true,
      },
    ],
    links: [{ label: "SOURCE ↗", href: `${siteConfig.githubUrl}/play_zone` }],
    isImportant: false,
    priority: 8,
  },
] as const;

const curriculumApps: readonly CurriculumApp[] = [
  { slug: "nti-bmi", index: "01", title: "BMI App" },
  { slug: "nti-ecommerce", index: "02", title: "E Commerce App" },
  { slug: "nti-yummy", index: "03", title: "Yummy App" },
  { slug: "nti-news", index: "04", title: "News App" },
  { slug: "nti-localdb", index: "05", title: "Local DB App" },
  { slug: "nti-social", index: "06", title: "Social Media App" },
] as const;

const ntiMedia: Readonly<Record<CurriculumApp["slug"], Project["media"]>> = {
  "nti-bmi": [
    {
      src: "/images/work/nti-bmi/501shots_so.webp",
      alt: "BMI App screen collage",
      caption: "SCREEN COLLAGE",
      kind: "IMAGE",
      width: 1920,
      height: 1920,
      isHero: true,
    },
  ],
  "nti-ecommerce": [
    {
      src: "/images/work/nti-ecommerce/154shots_so.webp",
      alt: "E Commerce App screen collage",
      caption: "SCREEN COLLAGE",
      kind: "IMAGE",
      width: 1920,
      height: 1920,
      isHero: true,
    },
  ],
  "nti-yummy": [
    {
      src: "/images/work/nti-yummy/Screenshot_1774570581.webp",
      alt: "Yummy App content screen",
      caption: "CONTENT SCREEN",
      kind: "IMAGE",
      width: 1080,
      height: 2424,
      isHero: true,
    },
  ],
  "nti-news": [
    {
      src: "/images/work/nti-news/home.webp",
      alt: "News App home screen",
      caption: "HOME / HEADLINES",
      kind: "IMAGE",
      width: 1920,
      height: 1280,
      isHero: true,
    },
  ],
  "nti-localdb": [
    {
      src: "/images/work/nti-localdb/114shots_so.webp",
      alt: "Local DB App screen showing persisted records",
      caption: "PERSISTED RECORDS",
      kind: "IMAGE",
      width: 1920,
      height: 1440,
      isHero: true,
    },
  ],
  "nti-social": [
    {
      src: "/images/work/nti-social/Screenshot_1779534630.webp",
      alt: "Social Media App feed screen",
      caption: "FEED SCREEN",
      kind: "IMAGE",
      width: 1080,
      height: 2424,
      isHero: true,
    },
  ],
};

/** The six NTI curriculum projects, in teaching order. */
const ntiLinks: Record<string, readonly { label: string; href: string }[]> = {
  "nti-bmi": [{ label: "SOURCE ↗", href: `${siteConfig.githubUrl}/r3_bmi_app` }],
  "nti-ecommerce": [{ label: "SOURCE ↗", href: `${siteConfig.githubUrl}/e-commerce-r2` }],
  "nti-yummy": [{ label: "SOURCE ↗", href: `${siteConfig.githubUrl}/yummy_app` }],
};

export const ntiProjects: readonly Project[] = curriculumApps.map(
  (app, i): Project => ({
    slug: app.slug,
    title: app.title,
    status: "CURRICULUM",
    origin: "NTI CURRICULUM",
    category: "NTI",
    evidence: "LIMITED",
    mission:
      "Individual training project completed during the NTI Flutter track at Creativa Mansoura.",
    stack: ["FLUTTER", "DART"],
    facts: [{ label: "PROGRAM", value: "NTI FLUTTER TRACK" }],
    media: ntiMedia[app.slug],
    links: ntiLinks[app.slug] ?? [],
    isImportant: false,
    priority: 9 + i,
  }),
);

/** Every registry entry (personal + NTI) in presentation order. */
export const allProjects: readonly Project[] = [
  ...personalProjects,
  ...ntiProjects,
];

/** The Featured subset: isImportant, ordered by priority ascending. */
export const featuredProjects: readonly Project[] = allProjects
  .filter((project) => project.isImportant)
  .sort((a, b) => a.priority - b.priority);

/** Everything else → MORE PROJECTS, ordered by priority ascending. */
export const moreProjects: readonly Project[] = allProjects
  .filter((project) => !project.isImportant)
  .sort((a, b) => a.priority - b.priority);

/** Derived counts - never hardcode these numbers in components. */
export const projectCounts = {
  total: allProjects.length,
  personal: allProjects.filter((project) => project.category === "PERSONAL")
    .length,
  nti: allProjects.filter((project) => project.category === "NTI").length,
  featured: featuredProjects.length,
  more: moreProjects.length,
} as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return allProjects.map((project) => project.slug);
}

/**
 * Returns the single hero image for a project. This is the ONE source of
 * truth for a project's hero: the first media item where isHero is true.
 * Missing or duplicate hero flags are config errors flagged loudly (and at
 * build time) instead of silently picking an image by array order.
 */
export function getProjectHero(project: Project): MediaItem {
  const hero = project.media.find((image) => image.isHero === true);
  if (!hero) {
    throw new Error(
      `Invalid hero config: project "${project.slug}" declares no isHero: true image. ` +
        `Every project must have exactly one hero image in media.`,
    );
  }
  const heroCount = project.media.filter((image) => image.isHero === true).length;
  if (heroCount > 1) {
    throw new Error(
      `Invalid hero config: project "${project.slug}" declares ${heroCount} ` +
        `isHero: true images (${project.media.filter((image) => image.isHero === true).map((m) => m.src).join(", ")}). ` +
        `Every project must have exactly one hero image in media.`,
    );
  }
  return hero;
}

/** Hero registry entries: the top featured systems shown in the hero rail. */
export function getHeroRegistry() {
  return featuredProjects.slice(0, 2).map((project) => ({
    project,
    anchor: "#work" as const,
  }));
}
