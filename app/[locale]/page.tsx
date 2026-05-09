import Image from "next/image";
import Reveal from "../components/Reveal";
import NavProgress from "../components/NavProgress";
import Header from "../components/Header";

const whatsappUrl = "https://wa.me/905550000400";

type Locale = "ar" | "en";

const content = {
  ar: {
    dir: "rtl",
    langSwitch: "EN",
    switchTo: "/en",
    nav: {
      services: "الخدمات", solutions: "نماذج حلول", why: "لماذا NAROVIL",
      process: "طريقة العمل", about: "عني", contact: "تواصل", whatsapp: "واتساب",
    },
    hero: {
      badge: "حلول برمجية فاخرة للمشاريع الرقمية",
      title: "نحوّل فكرتك إلى موقع أو تطبيق احترافي جاهز للنمو",
      description: "أنا Majd Khalousi، مهندس برمجيات ومؤسس NAROVIL. أساعد الأفراد، الشركات، المتاجر، وأصحاب المشاريع الناشئة على بناء مواقع ويب، تطبيقات Flutter، وأنظمة إدارة مخصصة بواجهة راقية، أداء قوي، وتجربة استخدام واضحة.",
      primaryButton: "ناقش مشروعك الآن",
      secondaryButton: "شاهد الخدمات",
      stats: [
        { title: "Web", subtitle: "مواقع احترافية" },
        { title: "App", subtitle: "تطبيقات Flutter" },
        { title: "System", subtitle: "أنظمة مخصصة" },
      ],
    },
    servicesSection: { label: "Services", title: "الخدمات البرمجية", description: "خدمات مناسبة للأفراد، الشركات، والمتاجر التي تريد بناء حضور رقمي احترافي أو تطوير نظام يخدم أعمالها." },
    services: [
      { icon: "💻", title: "تطوير مواقع ويب احترافية", description: "مواقع سريعة ومتجاوبة مع صفحات خدمات، نموذج تواصل، ربط واتساب، وتحسين أساسي لمحركات البحث." },
      { icon: "📱", title: "تطوير تطبيقات Flutter", description: "تطبيقات Android و iOS بواجهة حديثة، تسجيل دخول، قواعد بيانات، وربط مع APIs حسب حاجة المشروع." },
      { icon: "📊", title: "لوحات تحكم وأنظمة إدارة", description: "Dashboards لإدارة الطلبات، المستخدمين، المنتجات، التقارير، والصلاحيات من مكان واحد." },
      { icon: "🔗", title: "تطوير APIs وربط الأنظمة", description: "بناء واجهات برمجية وربط الموقع أو التطبيق مع قواعد البيانات، الدفع، واتساب، أو خدمات خارجية." },
      { icon: "🛒", title: "متاجر إلكترونية وصفحات بيع", description: "متاجر وصفحات بيع لعرض المنتجات، استقبال الطلبات، إدارة العملاء، وتحسين تجربة الشراء." },
      { icon: "⚡", title: "صيانة وتحسين الأداء", description: "تحسين السرعة، إصلاح الأخطاء، ترتيب الكود، حماية أفضل، وإضافة ميزات جديدة عند الحاجة." },
    ],
    solutionsSection: { label: "Solutions", title: "نماذج حلول يمكن تنفيذها", description: "نعمل حاليًا على تجهيز نماذج أعمال مختارة، وهذه أمثلة على حلول رقمية يمكن تنفيذها حسب فكرة العميل وهدف المشروع." },
    solutions: [
      { title: "موقع شركة احترافي", description: "موقع تعريفي أنيق يعرض خدمات الشركة، معلوماتها، وطرق التواصل معها." },
      { title: "متجر إلكتروني", description: "منصة بيع رقمية لعرض المنتجات، استقبال الطلبات، وتحسين تجربة العميل." },
      { title: "تطبيق حجوزات", description: "تطبيق يساعد العملاء على حجز المواعيد أو الخدمات بطريقة سهلة ومنظمة." },
      { title: "لوحة تحكم إدارية", description: "Dashboard لإدارة المستخدمين، الطلبات، المنتجات، والتقارير من مكان واحد." },
      { title: "نظام إدارة طلبات", description: "نظام مخصص لمتابعة الطلبات، حالاتها، بيانات العملاء، وسير العمل." },
      { title: "تطبيق خدمات Flutter", description: "تطبيق موبايل احترافي مناسب للمشاريع الخدمية والمتاجر والأفكار الناشئة." },
    ],
    packagesSection: { label: "Packages", title: "باقات تناسب مراحل مختلفة", description: "كل مشروع له تفاصيله، لذلك هذه الباقات مبدئية لتوضيح نوع الخدمة، ويتم تحديد السعر والمدة بعد فهم المتطلبات." },
    packages: [
      { name: "Landing Page", target: "للأفراد والمشاريع الصغيرة", features: ["صفحة هبوط احترافية", "تصميم متجاوب للجوال والكمبيوتر", "زر واتساب ونموذج تواصل", "تحسين أساسي للسرعة و SEO"], cta: "مناسبة للبداية" },
      { name: "Business Website", target: "للشركات والمتاجر", features: ["موقع متعدد الأقسام", "صفحات خدمات أو منتجات", "تصميم فاخر ومتجاوب", "ربط واتساب أو أدوات خارجية"], cta: "الأكثر طلبًا" },
      { name: "Custom System", target: "للأنظمة والتطبيقات الخاصة", features: ["لوحة تحكم أو تطبيق مخصص", "تسجيل دخول وصلاحيات", "قاعدة بيانات و APIs", "قابلية تطوير لاحقًا"], cta: "حسب المتطلبات" },
    ],
    why: {
      label: "Why NAROVIL", title: "لماذا تختار NAROVIL؟",
      items: [
        { icon: "🎨", title: "تصميم فاخر ومتجاوب", description: "واجهة حديثة تعمل بسلاسة على الجوال والكمبيوتر، وتعطي مشروعك حضورًا احترافيًا من أول زيارة." },
        { icon: "🧱", title: "كود منظم وقابل للتطوير", description: "بناء برمجي مرتب يسهل تطويره لاحقًا، سواء لإضافة صفحات، لوحة تحكم، دفع إلكتروني، أو تطبيق موبايل." },
        { icon: "🎯", title: "تركيز على هدف المشروع", description: "لا نكتفي بالشكل فقط؛ نركز على ما يحتاجه العميل فعليًا: تواصل أوضح، طلبات أكثر، وتجربة استخدام أفضل." },
      ],
    },
    process: {
      label: "Process", title: "طريقة العمل",
      steps: [
        { title: "فهم الفكرة", description: "نبدأ بفهم هدف المشروع، نوع العملاء، الميزات المطلوبة، والمشكلة التي تريد حلها." },
        { title: "تخطيط الحل", description: "نحدد الصفحات، الوظائف، قاعدة البيانات، والتقنيات المناسبة قبل بدء التطوير." },
        { title: "التصميم والتطوير", description: "نبني الواجهة والمنطق البرمجي بطريقة منظمة، متجاوبة، وقابلة للتطوير لاحقًا." },
        { title: "الاختبار والتسليم", description: "نراجع الأداء، التوافق مع الجوال، الروابط، وتجربة الاستخدام قبل إطلاق المشروع." },
      ],
    },
    about: {
      label: "About", title: "عن Majd Khalousi",
      description: "أنا Majd Khalousi، مهندس برمجيات، مالك ومؤسس براند NAROVIL. أعمل على بناء حلول رقمية عملية واحترافية تساعد الأفراد والشركات والمتاجر على تحويل أفكارهم إلى منتجات رقمية حقيقية، من مواقع ويب وتطبيقات Flutter إلى لوحات تحكم وأنظمة مخصصة.",
      points: ["مالك ومؤسس NAROVIL Software Studio", "تطوير واجهات حديثة وسريعة ومتجاوبة", "بناء تطبيقات Flutter لأنظمة Android و iOS", "تصميم أنظمة إدارة ولوحات تحكم حسب الحاجة"],
    },
    contact: { title: "هل لديك فكرة مشروع؟", description: "دعنا نحولها إلى موقع، تطبيق، أو نظام برمجي احترافي يناسب هدفك ويعطي مشروعك حضورًا أقوى.", button: "ناقش مشروعك الآن" },
    footer: { description: "حلول برمجية فاخرة لبناء مواقع، تطبيقات، وأنظمة مخصصة تساعد مشروعك على الظهور والعمل باحترافية.", servicesTitle: "الخدمات", linksTitle: "روابط سريعة", contactTitle: "معلومات التواصل", builtBy: "Built by Majd Khalousi" },
  },
  en: {
    dir: "ltr",
    langSwitch: "AR",
    switchTo: "/ar",
    nav: { services: "Services", solutions: "Solutions", why: "Why NAROVIL", process: "Process", about: "About", contact: "Contact", whatsapp: "WhatsApp" },
    hero: {
      badge: "Premium software solutions for digital projects",
      title: "We turn your idea into a professional website or app ready to grow",
      description: "I'm Majd Khalousi, a software engineer and founder of NAROVIL. I help individuals, businesses, online stores, and startup founders build websites, Flutter apps, and custom management systems with elegant design, strong performance, and clear user experience.",
      primaryButton: "Discuss Your Project",
      secondaryButton: "View Services",
      stats: [
        { title: "Web", subtitle: "Professional websites" },
        { title: "App", subtitle: "Flutter applications" },
        { title: "System", subtitle: "Custom systems" },
      ],
    },
    servicesSection: { label: "Services", title: "Software Services", description: "Practical services for individuals, businesses, and stores that need a professional digital presence or a custom system for their operations." },
    services: [
      { icon: "💻", title: "Professional Web Development", description: "Fast responsive websites with service pages, contact forms, WhatsApp integration, and basic SEO optimization." },
      { icon: "📱", title: "Flutter App Development", description: "Android and iOS apps with modern UI, authentication, databases, and API integration based on project needs." },
      { icon: "📊", title: "Dashboards & Management Systems", description: "Dashboards for managing orders, users, products, reports, permissions, and business operations from one place." },
      { icon: "🔗", title: "APIs & System Integration", description: "Building APIs and connecting websites or apps with databases, payments, WhatsApp, and third-party services." },
      { icon: "🛒", title: "E-commerce & Sales Pages", description: "Online stores and sales pages for displaying products, receiving orders, managing customers, and improving sales flow." },
      { icon: "⚡", title: "Maintenance & Performance", description: "Speed optimization, bug fixing, code cleanup, better stability, and adding new features when needed." },
    ],
    solutionsSection: { label: "Solutions", title: "Solutions We Can Build", description: "Selected work samples are currently being prepared. These are examples of digital solutions that can be built based on your idea and project goals." },
    solutions: [
      { title: "Company Website", description: "An elegant business website that presents services, company information, and contact methods." },
      { title: "Online Store", description: "A digital sales platform for displaying products, receiving orders, and improving customer experience." },
      { title: "Booking App", description: "An app that helps customers book appointments or services in a simple and organized way." },
      { title: "Admin Dashboard", description: "A dashboard to manage users, orders, products, and reports from one place." },
      { title: "Order Management System", description: "A custom system to track orders, statuses, customer data, and workflow." },
      { title: "Flutter Service App", description: "A professional mobile app suitable for service projects, stores, and startup ideas." },
    ],
    packagesSection: { label: "Packages", title: "Packages for Different Project Stages", description: "Every project has its own details, so these packages are only a starting point. Price and timeline are defined after understanding the requirements." },
    packages: [
      { name: "Landing Page", target: "For individuals and small projects", features: ["Professional landing page", "Responsive mobile and desktop design", "WhatsApp button and contact form", "Basic speed and SEO optimization"], cta: "Good starting point" },
      { name: "Business Website", target: "For companies and stores", features: ["Multi-section website", "Service or product pages", "Elegant responsive design", "WhatsApp or external tool integration"], cta: "Most requested" },
      { name: "Custom System", target: "For custom apps and systems", features: ["Custom dashboard or application", "Authentication and permissions", "Database and APIs", "Ready for future growth"], cta: "Based on requirements" },
    ],
    why: {
      label: "Why NAROVIL", title: "Why Choose NAROVIL?",
      items: [
        { icon: "🎨", title: "Elegant responsive design", description: "Modern interfaces that work smoothly on mobile and desktop, giving your project a professional first impression." },
        { icon: "🧱", title: "Clean scalable code", description: "Well-structured development that makes future upgrades easier, from new pages to dashboards, payments, or mobile apps." },
        { icon: "🎯", title: "Focus on project goals", description: "We focus on what the client actually needs: clearer communication, better conversions, and a smoother user experience." },
      ],
    },
    process: {
      label: "Process", title: "How We Work",
      steps: [
        { title: "Discovery", description: "We start by understanding the project goal, target users, required features, and the problem you want to solve." },
        { title: "Planning", description: "We define the pages, core features, database needs, and suitable technologies before development begins." },
        { title: "Design & Development", description: "We build the interface and software logic in a clean, responsive, and scalable way." },
        { title: "Testing & Delivery", description: "We review performance, mobile responsiveness, links, and user experience before launch." },
      ],
    },
    about: {
      label: "About", title: "About Majd Khalousi",
      description: "I'm Majd Khalousi, a software engineer and the owner and founder of the NAROVIL brand. I build practical and professional digital solutions that help individuals, businesses, and stores turn their ideas into real digital products, from websites and Flutter apps to dashboards and custom systems.",
      points: ["Owner and founder of NAROVIL Software Studio", "Modern, fast, and responsive interfaces", "Flutter apps for Android and iOS", "Custom dashboards and management systems"],
    },
    contact: { title: "Do you have a project idea?", description: "Let's turn it into a professional website, app, or software system that fits your goals and strengthens your digital presence.", button: "Discuss Your Project" },
    footer: { description: "Premium software solutions for building websites, apps, and custom systems that help your project look and work professionally.", servicesTitle: "Services", linksTitle: "Quick Links", contactTitle: "Contact Info", builtBy: "Built by Majd Khalousi" },
  },
} as const;

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale: Locale = locale === "en" ? "en" : "ar";
  const t = content[currentLocale];

  return (
    <main lang={currentLocale} dir={t.dir} className="min-h-screen overflow-hidden bg-[#05070f] text-white">
      <NavProgress />

      


<Header
  currentLocale={currentLocale}
  switchTo={t.switchTo}
  langSwitch={t.langSwitch}
  whatsappUrl={whatsappUrl}
  nav={t.nav}
/>


      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-14 pt-32 md:grid-cols-2 md:pb-24 md:pt-40">
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[#4da3ff]/10 blur-3xl glow-pulse" />
        <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-[#4da3ff]/08 blur-3xl glow-pulse" style={{ animationDelay: "2s" }} />

        <div className="relative z-10">
          <Reveal>
            <p className="mb-6 inline-flex rounded-full border border-[#4da3ff]/30 bg-[#4da3ff]/10 px-4 py-2 text-sm text-[#8fc7ff]">
              {t.hero.badge}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="max-w-3xl text-3xl font-black leading-[1.35] tracking-tight sm:text-4xl md:text-5xl md:leading-[1.25] text-gradient">
              {t.hero.title}
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-9 text-white/60 md:text-lg">
              {t.hero.description}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappUrl} target="_blank" className="rounded-full bg-[#4da3ff] px-8 py-4 text-center font-bold text-[#05070f] transition hover:bg-[#7dbdff] hover:scale-105 hover:shadow-lg hover:shadow-[#4da3ff]/30">
                {t.hero.primaryButton}
              </a>
              <a href="#services" className="rounded-full border border-white/15 px-8 py-4 text-center font-bold text-white transition hover:bg-white/10 hover:border-white/30">
                {t.hero.secondaryButton}
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 grid max-w-xs grid-cols-3 gap-3 text-center sm:max-w-sm">
              {t.hero.stats.map((stat) => (
                <div key={stat.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-[#4da3ff]/40 hover:bg-white/[0.06]">
                  <p className="text-xl font-bold text-[#4da3ff]">{stat.title}</p>
                  <p className="mt-1 text-[10px] text-white/40">{stat.subtitle}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" className="relative z-10">
          <div className="absolute inset-0 rounded-full bg-[#4da3ff]/15 blur-3xl" />
          <div className="hero-card-float relative rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur transition hover:border-[#4da3ff]/30">
            <div className="mb-10 flex items-center justify-between">
              <span className="rounded-full bg-[#4da3ff]/10 px-3 py-1 text-xs text-[#8fc7ff]">Premium</span>
              <span className="text-sm text-white/30">NAROVIL</span>
            </div>
            <div className="flex min-h-72 items-center justify-center">
              <div className="text-center">
                <div className="relative mx-auto mb-7 h-40 w-40 overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl">
                  <Image src="/narovil-logo.png" alt="NAROVIL logo" fill sizes="160px" className="object-cover" priority />
                </div>
                <h3 className="text-2xl font-black tracking-[0.35em]">NAROVIL</h3>
                <p className="mt-3 text-sm text-white/40">Premium Software Studio</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <p className="mb-3 text-sm font-bold text-[#4da3ff]">{t.servicesSection.label}</p>
          <h2 className="text-3xl font-black md:text-5xl">{t.servicesSection.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/55 md:text-lg">{t.servicesSection.description}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-2 hover:border-[#4da3ff]/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-[#4da3ff]/10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4da3ff]/15 text-2xl transition group-hover:bg-[#4da3ff]/25 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <p className="mb-3 text-sm font-bold text-[#4da3ff]">{t.solutionsSection.label}</p>
          <h2 className="text-3xl font-black md:text-5xl">{t.solutionsSection.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/55 md:text-lg">{t.solutionsSection.description}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 70}>
              <div className="group h-full rounded-3xl border border-white/10 bg-[#07111f]/70 p-7 transition hover:-translate-y-2 hover:border-[#4da3ff]/40 hover:shadow-xl hover:shadow-[#4da3ff]/10">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4da3ff]/15 text-sm font-black text-[#4da3ff] transition group-hover:bg-[#4da3ff]/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold">{solution.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">{solution.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <p className="mb-3 text-sm font-bold text-[#4da3ff]">{t.packagesSection.label}</p>
          <h2 className="text-3xl font-black md:text-5xl">{t.packagesSection.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/55 md:text-lg">{t.packagesSection.description}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.packages.map((pack, index) => (
            <Reveal key={pack.name} delay={index * 100}>
              <div className={`group h-full rounded-[2rem] border p-7 transition hover:-translate-y-2 ${index === 1 ? "border-[#4da3ff]/50 bg-[#07111f] hover:shadow-xl hover:shadow-[#4da3ff]/20" : "border-white/10 bg-white/[0.035] hover:border-[#4da3ff]/30"}`}>
                {index === 1 && (
                  <div className="mb-4 inline-flex rounded-full bg-[#4da3ff]/20 px-3 py-1 text-xs font-bold text-[#4da3ff]">
                    ★ {pack.cta}
                  </div>
                )}
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-black">{pack.name}</h3>
                  {index !== 1 && <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/50">{pack.cta}</span>}
                </div>
                <p className="mb-6 text-sm text-white/50">{pack.target}</p>
                <ul className="space-y-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-7 text-white/65">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4da3ff]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={whatsappUrl} target="_blank" className={`mt-8 inline-flex w-full justify-center rounded-full px-6 py-3 text-sm font-bold transition hover:scale-105 ${index === 1 ? "bg-[#4da3ff] text-[#05070f] hover:bg-[#7dbdff]" : "border border-white/10 text-white hover:bg-white/10"}`}>
                  {currentLocale === "ar" ? "اطلب تفاصيل الباقة" : "Request Package Details"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-3 md:p-12">
            <div>
              <p className="mb-3 text-sm font-bold text-[#4da3ff]">{t.why.label}</p>
              <h2 className="text-2xl font-black leading-tight md:text-3xl">{t.why.title}</h2>
            </div>
            <div className="grid gap-5 md:col-span-2 md:grid-cols-3">
              {t.why.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="h-full rounded-3xl bg-black/20 p-6 transition hover:bg-black/30">
                    <div className="mb-4 text-2xl">{item.icon}</div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/50">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <p className="mb-3 text-sm font-bold text-[#4da3ff]">{t.process.label}</p>
            <h2 className="text-3xl font-black md:text-5xl">{t.process.title}</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {t.process.steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 100}>
                  <div className="group h-full rounded-3xl bg-black/20 p-6 transition hover:bg-black/30">
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#4da3ff] text-lg font-black text-[#05070f] transition group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#4da3ff]/40">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/50">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="right">
            <p className="mb-3 text-sm font-bold text-[#4da3ff]">{t.about.label}</p>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">{t.about.title}</h2>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#4da3ff]/30">
                <p className="text-xl font-black text-[#4da3ff]">Web</p>
                <p className="mt-2 text-xs text-white/45">{currentLocale === "ar" ? "مواقع احترافية" : "Professional websites"}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#4da3ff]/30">
                <p className="text-xl font-black text-[#4da3ff]">Flutter</p>
                <p className="mt-2 text-xs text-white/45">{currentLocale === "ar" ? "تطبيقات موبايل" : "Mobile apps"}</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
              <p className="text-base leading-10 text-white/65">{t.about.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.about.points.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/55 transition hover:border-[#4da3ff]/30">
                    <span className="mb-3 block h-2 w-2 rounded-full bg-[#4da3ff]" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#4da3ff]/20 bg-[#07111f] p-8 text-center md:p-16">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4da3ff]/20 blur-3xl glow-pulse" />
            <div className="absolute -bottom-20 right-10 h-48 w-48 rounded-full bg-[#4da3ff]/10 blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black leading-tight md:text-6xl">{t.contact.title}</h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-9 text-white/60 md:text-lg">{t.contact.description}</p>
              <a href={whatsappUrl} target="_blank" className="mt-10 inline-flex rounded-full bg-white px-9 py-4 font-bold text-[#05070f] transition hover:bg-white/90 hover:scale-105 hover:shadow-xl hover:shadow-white/20">
                {t.contact.button}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#03050b] px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white transition group-hover:scale-105">
                <Image src="/narovil-logo.png" alt="NAROVIL logo" fill sizes="44px" className="object-cover" />
              </div>
              <div>
                <h2 className="text-base font-bold tracking-[0.28em] text-white">NAROVIL</h2>
                <p className="text-[10px] text-white/40">Software Studio</p>
              </div>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-8 text-white/50">{t.footer.description}</p>
            <a href={whatsappUrl} target="_blank" className="mt-6 inline-flex rounded-full bg-[#4da3ff] px-6 py-3 text-sm font-bold text-[#05070f] transition hover:bg-[#7dbdff] hover:scale-105">
              {t.contact.button}
            </a>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-bold text-white">{t.footer.servicesTitle}</h3>
            <ul className="space-y-3 text-sm text-white/45">
              {t.services.slice(0, 4).map(s => <li key={s.title}>{s.title}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-bold text-white">{t.footer.linksTitle}</h3>
            <ul className="space-y-3 text-sm text-white/45">
              {([["#services", t.nav.services], ["#solutions", t.nav.solutions], ["#process", t.nav.process], ["#about", t.nav.about]] as [string, string][]).map(([href, label]) => (
                <li key={href}><a href={href} className="transition hover:text-white">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-bold text-white">{t.footer.contactTitle}</h3>
            <ul className="space-y-3 text-sm text-white/45">
              <li dir="ltr" className={currentLocale === "ar" ? "text-right" : ""}>+90 555 000 0400</li>
              <li>NAROVIL Software Studio</li>
              <li>Arabic & English</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/35 md:flex-row md:items-center md:justify-between" dir="ltr">
          <p>© 2026 NAROVIL. All rights reserved.</p>
          <p>{t.footer.builtBy}</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        aria-label={currentLocale === "ar" ? "واتساب" : "WhatsApp"}
        className={`whatsapp-float fixed bottom-6 z-50 flex items-center gap-2 rounded-full bg-[#4da3ff] px-5 py-3 text-sm font-bold text-[#05070f] shadow-2xl shadow-[#4da3ff]/30 transition hover:bg-[#7dbdff] hover:shadow-[#4da3ff]/50 ${currentLocale === "ar" ? "left-6" : "right-6"}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        {currentLocale === "ar" ? "واتساب" : "WhatsApp"}
      </a>
    </main>
  );
}
