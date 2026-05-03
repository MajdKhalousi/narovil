import Image from "next/image";


const whatsappUrl = "https://wa.me/905550000400";

type Locale = "ar" | "en";

const content = {
  ar: {
    dir: "rtl",
    langSwitch: "EN",
    switchTo: "/en",

    nav: {
      services: "الخدمات",
      solutions: "نماذج حلول",
      why: "لماذا NAROVIL",
      process: "طريقة العمل",
      about: "عني",
      contact: "تواصل",
      whatsapp: "واتساب",
    },

    hero: {
      badge: "حلول برمجية فاخرة للمشاريع الرقمية",
      title: "نحوّل فكرتك إلى موقع أو تطبيق احترافي جاهز للنمو",
description:
  "أنا Majd Khalousi، مهندس برمجيات ومؤسس NAROVIL. أساعد الأفراد، الشركات، المتاجر، وأصحاب المشاريع الناشئة على بناء مواقع ويب، تطبيقات Flutter، وأنظمة إدارة مخصصة بواجهة راقية، أداء قوي، وتجربة استخدام واضحة.",
primaryButton: "ناقش مشروعك الآن",
secondaryButton: "شاهد الخدمات",
      stats: [
        { title: "Web", subtitle: "مواقع احترافية" },
        { title: "App", subtitle: "تطبيقات Flutter" },
        { title: "System", subtitle: "أنظمة مخصصة" },
      ],
    },

    servicesSection: {
      label: "Services",
      title: "الخدمات البرمجية",
      description:
        "خدمات مناسبة للأفراد، الشركات، والمتاجر التي تريد بناء حضور رقمي احترافي أو تطوير نظام يخدم أعمالها.",
    },

    services: [
  {
    icon: "💻",
    title: "تطوير مواقع ويب احترافية",
    description:
      "مواقع سريعة ومتجاوبة مع صفحات خدمات، نموذج تواصل، ربط واتساب، وتحسين أساسي لمحركات البحث.",
  },
  {
    icon: "📱",
    title: "تطوير تطبيقات Flutter",
    description:
      "تطبيقات Android و iOS بواجهة حديثة، تسجيل دخول، قواعد بيانات، وربط مع APIs حسب حاجة المشروع.",
  },
  {
    icon: "📊",
    title: "لوحات تحكم وأنظمة إدارة",
    description:
      "Dashboards لإدارة الطلبات، المستخدمين، المنتجات، التقارير، والصلاحيات من مكان واحد.",
  },
  {
    icon: "🔗",
    title: "تطوير APIs وربط الأنظمة",
    description:
      "بناء واجهات برمجية وربط الموقع أو التطبيق مع قواعد البيانات، الدفع، واتساب، أو خدمات خارجية.",
  },
  {
    icon: "🛒",
    title: "متاجر إلكترونية وصفحات بيع",
    description:
      "متاجر وصفحات بيع لعرض المنتجات، استقبال الطلبات، إدارة العملاء، وتحسين تجربة الشراء.",
  },
  {
    icon: "⚡",
    title: "صيانة وتحسين الأداء",
    description:
      "تحسين السرعة، إصلاح الأخطاء، ترتيب الكود، حماية أفضل، وإضافة ميزات جديدة عند الحاجة.",
  },
],

    solutionsSection: {
      label: "Solutions",
      title: "نماذج حلول يمكن تنفيذها",
      description:
        "نعمل حاليًا على تجهيز نماذج أعمال مختارة، وهذه أمثلة على حلول رقمية يمكن تنفيذها حسب فكرة العميل وهدف المشروع.",
    },

    solutions: [
      {
        title: "موقع شركة احترافي",
        description:
          "موقع تعريفي أنيق يعرض خدمات الشركة، معلوماتها، وطرق التواصل معها.",
      },
      {
        title: "متجر إلكتروني",
        description:
          "منصة بيع رقمية لعرض المنتجات، استقبال الطلبات، وتحسين تجربة العميل.",
      },
      {
        title: "تطبيق حجوزات",
        description:
          "تطبيق يساعد العملاء على حجز المواعيد أو الخدمات بطريقة سهلة ومنظمة.",
      },
      {
        title: "لوحة تحكم إدارية",
        description:
          "Dashboard لإدارة المستخدمين، الطلبات، المنتجات، والتقارير من مكان واحد.",
      },
      {
        title: "نظام إدارة طلبات",
        description:
          "نظام مخصص لمتابعة الطلبات، حالاتها، بيانات العملاء، وسير العمل.",
      },
      {
        title: "تطبيق خدمات Flutter",
        description:
          "تطبيق موبايل احترافي مناسب للمشاريع الخدمية والمتاجر والأفكار الناشئة.",
      },
    ],

why: {
  label: "Why NAROVIL",
  title: "لماذا تختار NAROVIL؟",
  items: [
    {
      title: "تصميم فاخر ومتجاوب",
      description:
        "واجهة حديثة تعمل بسلاسة على الجوال والكمبيوتر، وتعطي مشروعك حضورًا احترافيًا من أول زيارة.",
    },
    {
      title: "كود منظم وقابل للتطوير",
      description:
        "بناء برمجي مرتب يسهل تطويره لاحقًا، سواء لإضافة صفحات، لوحة تحكم، دفع إلكتروني، أو تطبيق موبايل.",
    },
    {
      title: "تركيز على هدف المشروع",
      description:
        "لا نكتفي بالشكل فقط؛ نركز على ما يحتاجه العميل فعليًا: تواصل أوضح، طلبات أكثر، وتجربة استخدام أفضل.",
    },
  ],
},
process: {
  label: "Process",
  title: "طريقة العمل",
  steps: [
    {
      title: "فهم الفكرة",
      description:
        "نبدأ بفهم هدف المشروع، نوع العملاء، الميزات المطلوبة، والمشكلة التي تريد حلها.",
    },
    {
      title: "تخطيط الحل",
      description:
        "نحدد الصفحات، الوظائف، قاعدة البيانات، والتقنيات المناسبة قبل بدء التطوير.",
    },
    {
      title: "التصميم والتطوير",
      description:
        "نبني الواجهة والمنطق البرمجي بطريقة منظمة، متجاوبة، وقابلة للتطوير لاحقًا.",
    },
    {
      title: "الاختبار والتسليم",
      description:
        "نراجع الأداء، التوافق مع الجوال، الروابط، وتجربة الاستخدام قبل إطلاق المشروع.",
    },
  ],
},

    about: {
      label: "About",
      title: "عن Majd Khalousi",
      description:
        "أعمل على بناء حلول رقمية عملية واحترافية تحت اسم NAROVIL. أركز على تطوير مواقع وتطبيقات وأنظمة تساعد العملاء على تحويل أفكارهم إلى منتجات رقمية حقيقية، مع اهتمام بجودة الكود، سرعة الأداء، وتجربة المستخدم.",
    },

    contact: {
      title: "هل لديك فكرة مشروع؟",
      description:
        "دعنا نحولها إلى موقع، تطبيق، أو نظام برمجي احترافي يناسب هدفك ويعطي مشروعك حضورًا أقوى.",
      button: "ناقش مشروعك الآن",
    },

    footer: {
      description:
        "حلول برمجية فاخرة لبناء مواقع، تطبيقات، وأنظمة مخصصة تساعد مشروعك على الظهور والعمل باحترافية.",
      servicesTitle: "الخدمات",
      linksTitle: "روابط سريعة",
      contactTitle: "معلومات التواصل",
      builtBy: "Built by Majd Khalousi",
    },
  },

  en: {
    dir: "ltr",
    langSwitch: "AR",
    switchTo: "/ar",

    nav: {
      services: "Services",
      solutions: "Solutions",
      why: "Why NAROVIL",
      process: "Process",
      about: "About",
      contact: "Contact",
      whatsapp: "WhatsApp",
    },

    hero: {
      badge: "Premium software solutions for digital projects",
title:
  "We turn your idea into a professional website or app ready to grow",
description:
  "I’m Majd Khalousi, a software engineer and founder of NAROVIL. I help individuals, businesses, online stores, and startup founders build websites, Flutter apps, and custom management systems with elegant design, strong performance, and clear user experience.",
primaryButton: "Discuss Your Project",
secondaryButton: "View Services",
      stats: [
        { title: "Web", subtitle: "Professional websites" },
        { title: "App", subtitle: "Flutter applications" },
        { title: "System", subtitle: "Custom systems" },
      ],
    },

    servicesSection: {
      label: "Services",
      title: "Software Services",
      description:
        "Practical services for individuals, businesses, and stores that need a professional digital presence or a custom system for their operations.",
    },

    services: [
  {
    icon: "💻",
    title: "Professional Web Development",
    description:
      "Fast responsive websites with service pages, contact forms, WhatsApp integration, and basic SEO optimization.",
  },
  {
    icon: "📱",
    title: "Flutter App Development",
    description:
      "Android and iOS apps with modern UI, authentication, databases, and API integration based on project needs.",
  },
  {
    icon: "📊",
    title: "Dashboards & Management Systems",
    description:
      "Dashboards for managing orders, users, products, reports, permissions, and business operations from one place.",
  },
  {
    icon: "🔗",
    title: "APIs & System Integration",
    description:
      "Building APIs and connecting websites or apps with databases, payments, WhatsApp, and third-party services.",
  },
  {
    icon: "🛒",
    title: "E-commerce & Sales Pages",
    description:
      "Online stores and sales pages for displaying products, receiving orders, managing customers, and improving sales flow.",
  },
  {
    icon: "⚡",
    title: "Maintenance & Performance",
    description:
      "Speed optimization, bug fixing, code cleanup, better stability, and adding new features when needed.",
  },
],

    solutionsSection: {
      label: "Solutions",
      title: "Solutions We Can Build",
      description:
        "Selected work samples are currently being prepared. These are examples of digital solutions that can be built based on your idea and project goals.",
    },

    solutions: [
      {
        title: "Company Website",
        description:
          "An elegant business website that presents services, company information, and contact methods.",
      },
      {
        title: "Online Store",
        description:
          "A digital sales platform for displaying products, receiving orders, and improving customer experience.",
      },
      {
        title: "Booking App",
        description:
          "An app that helps customers book appointments or services in a simple and organized way.",
      },
      {
        title: "Admin Dashboard",
        description:
          "A dashboard to manage users, orders, products, and reports from one place.",
      },
      {
        title: "Order Management System",
        description:
          "A custom system to track orders, statuses, customer data, and workflow.",
      },
      {
        title: "Flutter Service App",
        description:
          "A professional mobile app suitable for service projects, stores, and startup ideas.",
      },
    ],

why: {
  label: "Why NAROVIL",
  title: "Why Choose NAROVIL?",
  items: [
    {
      title: "Elegant responsive design",
      description:
        "Modern interfaces that work smoothly on mobile and desktop, giving your project a professional first impression.",
    },
    {
      title: "Clean scalable code",
      description:
        "Well-structured development that makes future upgrades easier, from new pages to dashboards, payments, or mobile apps.",
    },
    {
      title: "Focus on project goals",
      description:
        "We focus on what the client actually needs: clearer communication, better conversions, and a smoother user experience.",
    },
  ],
},
process: {
  label: "Process",
  title: "How We Work",
  steps: [
    {
      title: "Discovery",
      description:
        "We start by understanding the project goal, target users, required features, and the problem you want to solve.",
    },
    {
      title: "Planning",
      description:
        "We define the pages, core features, database needs, and suitable technologies before development begins.",
    },
    {
      title: "Design & Development",
      description:
        "We build the interface and software logic in a clean, responsive, and scalable way.",
    },
    {
      title: "Testing & Delivery",
      description:
        "We review performance, mobile responsiveness, links, and user experience before launch.",
    },
  ],
},

    about: {
      label: "About",
      title: "About Majd Khalousi",
      description:
        "I build practical and professional digital solutions under NAROVIL. I focus on websites, applications, and systems that help clients turn ideas into real digital products, with attention to code quality, performance, and user experience.",
    },

    contact: {
      title: "Do you have a project idea?",
      description:
        "Let’s turn it into a professional website, app, or software system that fits your goals and strengthens your digital presence.",
      button: "Discuss Your Project",
    },

    footer: {
      description:
        "Premium software solutions for building websites, apps, and custom systems that help your project look and work professionally.",
      servicesTitle: "Services",
      linksTitle: "Quick Links",
      contactTitle: "Contact Info",
      builtBy: "Built by Majd Khalousi",
    },
  },
} as const;

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale: Locale = locale === "en" ? "en" : "ar";
  const t = content[currentLocale];

  return (
    <main
      lang={currentLocale}
      dir={t.dir}
      className="min-h-screen overflow-hidden bg-[#05070f] text-white"
    >
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#05070f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white">
              <Image
                src="/narovil-logo.png"
                alt="NAROVIL logo"
                fill
                sizes="176px"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-[0.28em] text-white">
                NAROVIL
              </h1>
              <p className="text-xs text-white/50">Software Studio</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">
              {t.nav.services}
            </a>
            <a href="#solutions" className="transition hover:text-white">
              {t.nav.solutions}
            </a>
            <a href="#why" className="transition hover:text-white">
              {t.nav.why}
            </a>
            <a href="#process" className="transition hover:text-white">
              {t.nav.process}
            </a>
            <a href="#about" className="transition hover:text-white">
              {t.nav.about}
            </a>
            <a href="#contact" className="transition hover:text-white">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
           
  <a
  href={t.switchTo}
  className="inline-flex rounded-full border border-white/10 px-3 py-2 text-xs text-white/70 transition hover:bg-white/10 hover:text-white md:px-4"
>
  {t.langSwitch}
</a>

            <a
              href={whatsappUrl}
              target="_blank"
              className="rounded-full bg-[#4da3ff] px-4 py-2 text-xs font-semibold text-[#05070f] transition hover:bg-[#7dbdff] md:px-5 md:py-2.5 md:text-sm"
            >
              {t.nav.whatsapp}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:min-h-[calc(100vh-89px)] md:grid-cols-2 md:py-20">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#4da3ff]/10 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-[#4da3ff]/10 blur-3xl" />

        <div className="relative z-10">
          <p className="mb-6 inline-flex rounded-full border border-[#4da3ff]/30 bg-[#4da3ff]/10 px-4 py-2 text-sm text-[#8fc7ff]">
            {t.hero.badge}
          </p>

          <h2 className="max-w-3xl text-3xl font-black leading-[1.35] tracking-tight sm:text-4xl md:text-6xl md:leading-[1.25]">
            {t.hero.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/65">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              className="rounded-full bg-[#4da3ff] px-8 py-4 text-center font-bold text-[#05070f] transition hover:bg-[#7dbdff]"
            >
              {t.hero.primaryButton}
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/15 px-8 py-4 text-center font-bold text-white transition hover:bg-white/10"
            >
              {t.hero.secondaryButton}
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-center">
            {t.hero.stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-2xl font-bold text-[#4da3ff]">
                  {stat.title}
                </p>
                <p className="mt-1 text-xs text-white/45">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute inset-0 rounded-full bg-[#4da3ff]/20 blur-3xl" />

          <div className="relative rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur">
            <div className="mb-10 flex items-center justify-between">
              <span className="rounded-full bg-[#4da3ff]/10 px-3 py-1 text-xs text-[#8fc7ff]">
                Premium
              </span>
              <span className="text-sm text-white/40">NAROVIL</span>
            </div>

            <div className="flex min-h-80 items-center justify-center">
              <div className="text-center">
                <div className="relative mx-auto mb-7 h-44 w-44 overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl">
                  <Image
                    src="/narovil-logo.png"
                    alt="NAROVIL logo"
                    fill
                    sizes="176px"
                    className="object-cover"
                    priority
                  />
                </div>

                <h3 className="text-3xl font-black tracking-[0.35em]">
                  NAROVIL
                </h3>
                <p className="mt-4 text-white/50">Premium Software Studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-16 md:py-24"
      >
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold text-[#4da3ff]">
            {t.servicesSection.label}
          </p>
          <h2 className="text-3xl font-black md:text-5xl">
            {t.servicesSection.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            {t.servicesSection.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-[#4da3ff]/40 hover:bg-white/[0.06]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4da3ff]/15 text-2xl transition group-hover:bg-[#4da3ff]/25">
  {service.icon}
</div>
<h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-8 text-white/55">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="mx-auto max-w-7xl px-6 py-16 md:py-24"
      >
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold text-[#4da3ff]">
            {t.solutionsSection.label}
          </p>
          <h2 className="text-3xl font-black md:text-5xl">
            {t.solutionsSection.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            {t.solutionsSection.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="rounded-3xl border border-white/10 bg-[#07111f]/70 p-7 transition hover:-translate-y-1 hover:border-[#4da3ff]/40"
            >
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4da3ff]/15 text-sm font-black text-[#4da3ff]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-bold">{solution.title}</h3>
              <p className="mt-4 leading-8 text-white/55">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-3 md:p-12">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#4da3ff]">
              {t.why.label}
            </p>
            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              {t.why.title}
            </h2>
          </div>
<div className="grid gap-5 md:col-span-2 md:grid-cols-3">
            {t.why.items.map((item) => (
  <div key={item.title} className="rounded-3xl bg-black/20 p-6">
    <div className="mb-5 h-10 w-10 rounded-full bg-[#4da3ff]" />
    <h3 className="font-bold">{item.title}</h3>
    <p className="mt-3 text-sm leading-7 text-white/50">
      {item.description}
    </p>
  </div>
))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="mx-auto max-w-7xl px-6 py-16 md:py-24"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <p className="mb-3 text-sm font-semibold text-[#4da3ff]">
            {t.process.label}
          </p>
          <h2 className="text-3xl font-black md:text-5xl">
            {t.process.title}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
{t.process.steps.map((step, index) => (
  <div key={step.title} className="rounded-3xl bg-black/20 p-6">
    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#4da3ff] text-lg font-black text-[#05070f]">
      {index + 1}
    </span>
    <h3 className="text-lg font-bold">{step.title}</h3>
    <p className="mt-4 leading-7 text-white/55">
      {step.description}
    </p>
  </div>
))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#4da3ff]">
              {t.about.label}
            </p>
            <h2 className="text-3xl font-black md:text-5xl">
              {t.about.title}
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
            <p className="text-lg leading-10 text-white/65">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-16 md:py-24"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-[#4da3ff]/20 bg-[#07111f] p-8 text-center md:p-16">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4da3ff]/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-black leading-tight md:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/65">
              {t.contact.description}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              className="mt-10 inline-flex rounded-full bg-white px-9 py-4 font-bold text-[#05070f] transition hover:bg-white/80"
            >
              {t.contact.button}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#03050b] px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white">
                <Image
                  src="/narovil-logo.png"
                  alt="NAROVIL logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-[0.28em] text-white">
                  NAROVIL
                </h2>
                <p className="text-xs text-white/50">Software Studio</p>
              </div>
            </a>

            <p className="mt-5 max-w-sm leading-8 text-white/55">
              {t.footer.description}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              className="mt-6 inline-flex rounded-full bg-[#4da3ff] px-6 py-3 text-sm font-bold text-[#05070f] transition hover:bg-[#7dbdff]"
            >
              {t.contact.button}
            </a>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li>{t.services[0].title}</li>
              <li>{t.services[1].title}</li>
              <li>{t.services[2].title}</li>
              <li>{t.services[3].title}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">{t.footer.linksTitle}</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href="#services" className="transition hover:text-white">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#solutions" className="transition hover:text-white">
                  {t.nav.solutions}
                </a>
              </li>
              <li>
                <a href="#process" className="transition hover:text-white">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-white">
                  {t.nav.about}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li dir="ltr" className={currentLocale === "ar" ? "text-right" : ""}>
                +90 555 000 0400
              </li>
              <li>NAROVIL Software Studio</li>
              <li>Arabic & English</li>
            </ul>
          </div>
        </div>

        <div
          className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between"
          dir="ltr"
        >
          <p>© 2026 NAROVIL. All rights reserved.</p>
          <p>{t.footer.builtBy}</p>
        </div>
      </footer>
      <a
  href={whatsappUrl}
  target="_blank"
  aria-label={currentLocale === "ar" ? "ناقش مشروعك عبر واتساب" : "Discuss your project on WhatsApp"}
  className={`fixed bottom-5 z-50 rounded-full bg-[#4da3ff] px-5 py-3 text-sm font-bold text-[#05070f] shadow-2xl shadow-[#4da3ff]/20 transition hover:-translate-y-1 hover:bg-[#7dbdff] ${
    currentLocale === "ar" ? "left-5" : "right-5"
  }`}
>
  {currentLocale === "ar" ? "واتساب" : "WhatsApp"}
</a>
    </main>
  );
}