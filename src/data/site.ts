/* ============================================================================
   SITE CONTENT — edit everything here to update the website copy.
   ========================================================================== */

export const profile = {
  name: 'Khursandbek Kambaraliyev',
  firstName: 'Khursandbek',
  role: 'Android & KMP Developer',
  tagline:
    'I build production mobile apps for Android and iOS — shipping a single Kotlin Multiplatform codebase to both stores.',
  location: 'Tashkent, Uzbekistan',
  available: true,
  summary: [
    'Mobile developer with 3+ years of hands-on experience building and publishing apps on Google Play and the App Store.',
    'I specialise in Kotlin Multiplatform and Compose Multiplatform — sharing one codebase across Android and iOS — with deep roots in native Android (Kotlin, Jetpack Compose) and native iOS (Swift, SwiftUI).',
    'I care about clean architecture, smooth UX, and shipping. Graduated with Honors (GPA 4.97 / 5.00).',
  ],
  email: 'kambaraliyevk@gmail.com',
  phone: '+998 90 148 52 42',
  phoneHref: 'tel:+998901485242',
  /* TODO: replace with your real profile URLs */
  linkedin: 'https://www.linkedin.com/in/khursandbek-kambaraliyev',
  github: 'https://github.com/khursandbek',
  cv: '/Khursandbek_Kambaraliyev_CV.pdf',
  photo: '/images/portrait.jpg',
};

export const meta = {
  title: 'Khursandbek Kambaraliyev — Android & KMP Developer',
  description:
    'Portfolio of Khursandbek Kambaraliyev — Android & Kotlin Multiplatform developer from Tashkent. Award-winning apps on Google Play and the App Store.',
};

export const stats = [
  { value: '3+', label: 'Years building apps' },
  { value: '7', label: 'Apps shipped to stores' },
  { value: '150K+', label: 'Users reached' },
  { value: '$100K', label: 'President Tech Award' },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
  { href: '#awards', label: 'Awards' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const skillGroups = [
  { title: 'Languages', items: ['Kotlin', 'Swift'] },
  {
    title: 'UI Toolkits',
    items: ['Jetpack Compose', 'Compose Multiplatform', 'SwiftUI', 'UIKit'],
  },
  { title: 'Cross-Platform', items: ['Kotlin Multiplatform', 'KMM'] },
  { title: 'Architecture', items: ['Clean Architecture', 'MVI', 'MVVM'] },
  {
    title: 'Networking',
    items: ['Ktor', 'Retrofit', 'WebSockets', 'kotlinx.serialization'],
  },
  {
    title: 'Data & DI',
    items: ['Koin', 'Room', 'KVault', 'Coroutines', 'Core Data'],
  },
  {
    title: 'Platform & ML',
    items: ['Firebase', 'ML Kit', 'CameraX', 'Play Billing', 'Maps Compose'],
  },
  { title: 'Tooling & CI', items: ['GitHub Actions', 'Fastlane', 'Gradle', 'Git'] },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  featured?: boolean;
  award?: boolean;
  note?: string;
  /* screenshot file(s) in /public/images/projects (optional) */
  shot?: string;
  shots?: string[];
  /* 'mock' = render inside the CSS phone (clean screenshots);
     'image' = show the image directly (pre-composed store graphics) */
  display?: 'mock' | 'image';
  links: { label: string; href: string; type: 'play' | 'apple' | 'web' }[];
};

export const projects: Project[] = [
  {
    id: 'romchi',
    name: 'Romchi',
    tagline: 'The operating system for window & door workshops',
    role: 'KMP Developer',
    period: 'Nov 2025 — Present',
    featured: true,
    award: true,
    description:
      'Romchi turns a window-and-door workshop into a digital operation — visual product templates, custom drawings, instant pricing with full cost breakdowns, and orders managed through a built-in CRM. Built with Kotlin Multiplatform and Compose Multiplatform to ship one codebase to Android and iOS.',
    highlights: [
      'Cuts order quoting from ~3 hours to ~5 minutes',
      '50K+ monthly active users · 4.7★ on Google Play',
      'Visual window & door template & drawing builder',
      'Instant pricing with full material cost breakdown',
      'Built-in CRM for orders, customers & spending',
      'In-app payments & PDF invoice generation',
    ],
    tech: [
      'Kotlin Multiplatform',
      'Compose Multiplatform',
      'Ktor 3',
      'Koin',
      'Room',
      'Firebase',
      'KVault',
    ],
    shots: ['romchi-1.png', 'romchi-2.png', 'romchi-3.png', 'romchi-4.png', 'romchi-5.png'],
    links: [
      { label: 'romchi.uz', href: 'https://romchi.uz/download', type: 'web' },
    ],
  },
  {
    id: 'yalla',
    name: 'Yalla',
    tagline: 'Taxi & delivery super-app',
    role: 'Android Developer',
    period: 'Nov 2024 — Nov 2025',
    featured: true,
    description:
      'Core features for a taxi-hailing super-app that reached 50,000+ active users in its first quarter. Real-time ride tracking, optimized ride-matching, and a combined Taxi + Delivery experience.',
    highlights: [
      '50,000+ active users in the first quarter',
      'Real-time tracking & ride-matching',
      'Super App: Taxi + Delivery launch',
      'CI/CD with GitHub Actions & Fastlane',
    ],
    tech: [
      'Kotlin',
      'Jetpack Compose',
      'Clean Architecture',
      'MVI',
      'Firebase Crashlytics',
    ],
    shots: ['yalla-1.jpg', 'yalla-2.jpg', 'yalla-3.jpg', 'yalla-4.jpg'],
    display: 'image',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=uz.yalla.client',
        type: 'play',
      },
    ],
  },
  {
    id: 'glogistics',
    name: 'G.Logistics',
    tagline: 'Logistics management app',
    role: 'Android Developer',
    period: 'Mar 2024 — Dec 2024',
    description:
      'An end-to-end logistics management app built solo — from first commit to Play Store release. Order tracking, delivery updates, and real-time notifications driven by client specifications.',
    highlights: [
      'Built solo from scratch to release',
      'Order tracking & delivery updates',
      'Real-time push notifications',
      'Managed the full Play Store release',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Koin', 'Ktor'],
    shots: [
      'glogistics-1.jpg',
      'glogistics-2.jpg',
      'glogistics-3.jpg',
      'glogistics-4.jpg',
      'glogistics-5.jpg',
    ],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=uz.khursandbek.glogistics',
        type: 'play',
      },
    ],
  },
  {
    id: 'yestms',
    name: 'YES TMS',
    tagline: 'Real-time driver & logistics app',
    role: 'Android Developer · Upwork',
    period: 'Mar 2024 — Nov 2024',
    description:
      'A real-time logistics app for drivers with live tracking and delivery updates. Delivered for an international client on Upwork and rated 5 stars for timely, high-quality work.',
    highlights: [
      'WebSockets live driver tracking',
      'ML document scanning cut manual errors by 30%',
      'Real-time low-latency sync across the driver fleet',
      '5-star Upwork client rating',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'WebSockets', 'Google Vision API'],
    shots: [
      'yestms-1.jpg',
      'yestms-2.jpg',
      'yestms-3.jpg',
      'yestms-4.jpg',
      'yestms-5.jpg',
    ],
    display: 'image',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.yestms.driver',
        type: 'play',
      },
    ],
  },
  {
    id: 'muallimi-soniy',
    name: 'Muallimi Soniy',
    tagline: 'Native iOS learning app',
    role: 'Mobile App Developer',
    period: 'Nov 2023 — Feb 2024',
    description:
      'A native iOS app with a modern UI/UX, published to the App Store with a 4.0+ star rating. Built with Swift and UIKit, with designer-collaborated animations for engagement.',
    highlights: [
      'Published to the App Store, 4.0+ rating',
      'Swift, UIKit & Core Data',
      'Designer-collaborated animations',
    ],
    tech: ['Swift', 'UIKit', 'Core Data'],
    note: 'App Store listing no longer public',
    shots: [
      'muallimi-1.jpg',
      'muallimi-2.jpg',
      'muallimi-3.jpg',
      'muallimi-4.jpg',
      'muallimi-5.jpg',
    ],
    links: [],
  },
  {
    id: 'oynachi',
    name: 'Oynachi',
    tagline: 'B2B sales & ordering for glass workshops',
    role: 'KMP Developer',
    period: 'Nov 2025 — Present',
    description:
      'A Kotlin Multiplatform sales app for glass workshops — order creation, glass pricing catalogs, warehouse inventory and client management — shipped to Android and iOS from a single codebase.',
    highlights: [
      'Order creation with offline sync',
      'Glass pricing catalogs & worker rates',
      'Warehouse inventory management',
      'ML Kit OCR capture & PDF export',
    ],
    tech: [
      'Kotlin Multiplatform',
      'Compose Multiplatform',
      'Ktor',
      'Koin',
      'Room',
      'Firebase',
    ],
    shots: [
      'oynachi-1.jpg',
      'oynachi-2.jpg',
      'oynachi-3.jpg',
      'oynachi-4.jpg',
      'oynachi-5.jpg',
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/app/oynachi/id6762111876',
        type: 'apple',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.conamobile.oynachi',
        type: 'play',
      },
    ],
  },
  {
    id: 'royal-taxi',
    name: 'Royal Taxi',
    tagline: 'City taxi-hailing app',
    role: 'Android Developer',
    period: 'Nov 2024 — Nov 2025',
    description:
      'A taxi-hailing app for everyday city rides — upfront fare pricing, live driver tracking, multiple tariffs and saved addresses. Built alongside Yalla as a second product on the same platform.',
    highlights: [
      '100K+ downloads on Google Play',
      'Upfront fare pricing & live driver tracking',
      'Multiple tariffs & saved addresses',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Clean Architecture', 'MVI'],
    shots: ['royaltaxi-1.jpg', 'royaltaxi-2.jpg', 'royaltaxi-3.jpg', 'royaltaxi-4.jpg'],
    display: 'image',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=uz.royal.taxi',
        type: 'play',
      },
    ],
  },
];

export const projectGroups = [
  {
    company: 'Romchi',
    role: 'KMP Developer',
    period: 'Nov 2025 — Present',
    note: 'Kotlin Multiplatform products digitising the glass & window industry — shipped to Android and iOS from one codebase.',
    projectIds: ['romchi', 'oynachi'],
  },
  {
    company: 'Royal Taxi',
    role: 'Android Developer',
    period: 'Nov 2024 — Nov 2025',
    note: 'Two taxi-hailing apps for the Uzbek market, built on a shared ride-hailing platform.',
    projectIds: ['yalla', 'royal-taxi'],
  },
  {
    company: 'Freelance & Independent',
    role: 'Android & iOS Developer',
    period: '2023 — 2024',
    note: 'Client and contract apps delivered end-to-end — from first commit to store release.',
    projectIds: ['glogistics', 'yestms', 'muallimi-soniy'],
  },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  blurb: string;
  type?: 'internship';
};

export const experience: Job[] = [
  {
    role: 'KMP Developer',
    company: 'Romchi',
    location: 'Tashkent, Uzbekistan',
    period: 'Nov 2025 — Present',
    blurb:
      'Shipping production Kotlin Multiplatform apps for Android and iOS with Compose Multiplatform, on a shared Ktor / Koin / Room foundation.',
  },
  {
    role: 'Android Developer',
    company: 'Royal Taxi',
    location: 'Fergana, Uzbekistan',
    period: 'Nov 2024 — Nov 2025',
    blurb:
      'Built core features for two taxi-hailing apps — Yalla and Royal Taxi — helping reach 50,000+ active users with real-time tracking and upfront fare pricing.',
  },
  {
    role: 'Android Developer',
    company: 'G.Logistics',
    location: 'Remote',
    period: 'Mar 2024 — Dec 2024',
    blurb:
      'Independently developed a logistics management app from scratch to Play Store submission, owning networking, releases and compliance.',
  },
  {
    role: 'Android Developer',
    company: 'YES TMS · Upwork',
    location: 'Remote',
    period: 'Mar 2024 — Nov 2024',
    blurb:
      'Delivered a real-time logistics app with WebSockets tracking and ML document scanning for an international client — earning a 5-star rating.',
  },
  {
    role: 'Mobile App Developer',
    company: 'Muallimi Soniy',
    location: 'Tashkent, Uzbekistan',
    period: 'Nov 2023 — Feb 2024',
    blurb:
      'Developed and published a native iOS app with Swift and UIKit, achieving a 4.0+ star rating on the App Store.',
  },
  {
    role: 'Mobile App Developer',
    company: 'UZAUTOMOTORS',
    location: 'Andijan, Uzbekistan',
    period: 'Jan 2023 — Jul 2023',
    type: 'internship',
    blurb:
      'Internship: contributed to Android and iOS app development with Kotlin and Swift, working with REST APIs, debugging and deployment.',
  },
];

export const awards = {
  headline: {
    title: 'President Tech Award — 1st Place',
    project: 'Romchi',
    prize: '$100,000',
    category: 'Micro-SaaS & AdTech',
    organizers: 'Digital.uz · IT Park Uzbekistan',
    description:
      'Romchi took 1st place at the President Tech Award Grand Final, recognised for its technological solutions in the Micro-SaaS & AdTech field — and awarded a $100,000 prize.',
  },
  /* photos live in /public/images/awards — add more as you send them */
  gallery: [
    {
      src: '/images/awards/certificate.jpeg',
      alt: 'Romchi — 1st place, $100,000 President Tech Award certificate',
      caption: '1st place — $100,000 prize',
    },
    {
      src: '/images/awards/badge.jpg',
      alt: 'President Tech Award Grand Final participant badge — Romchi Team',
      caption: 'President Tech Award · Grand Final',
    },
  ],
};

export const education = {
  degree: "Bachelor's Degree",
  place: 'Andijan, Uzbekistan',
  honors: 'Graduated with Honors',
  gpa: '4.97 / 5.00',
};
