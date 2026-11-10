import { useEffect, useState } from 'react';
import {
  Clock,
  AlertTriangle,
  Calculator,
  Download,
  Play,
  Layers,
  Shield,
  Wifi,
  Cpu,
  ArrowRight,
  Menu,
  X,
  Mail,
  Zap,
  FileText,
  Settings,
  Check,
  Lock,
  Server,
  FileCheck,
  Users,
  Building2,
  Star,
  Quote,
  ChevronDown,
  TrendingDown,
  Target,
  Award,
  Eye,
  Sun,
  Moon
} from 'lucide-react';

const DOWNLOAD_URL = '/KMZ_Generator_v5.3.exe';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
    root.style.colorScheme = isDark ? 'dark' : 'light';
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#0B1120' : '#ffffff');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage can be unavailable in private/restricted contexts — theme still applies for the session.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-white text-navy-900 font-[Inter] dark:bg-[#0B1120] dark:text-slate-100">
      {/* NAVBAR */}
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* HERO SECTION */}
      <HeroSection />

      {/* SOCIAL PROOF BAR */}
      <SocialProofBar />

      {/* STATS / KEY METRICS SECTION */}
      <StatsSection />

      {/* PROBLEM SECTION */}
      <ProblemSection />

      {/* HOW IT WORKS (4 STEPS) */}
      <HowItWorksSection />

      {/* INTEGRATIONS SECTION */}
      <IntegrationsSection />

      {/* FEATURES */}
      <FeaturesSection />

      {/* PERSONAS SECTION */}
      <PersonasSection />

      {/* SECURITY SECTION */}
      <SecuritySection />

      {/* PRICING SECTION */}
      <PricingSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CNC / AI SECTION */}
      <CNCSection />

      {/* FAQ SECTION */}
      <FAQSection />

      {/* CTA SECTION */}
      <CTASection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* ===== THEME TOGGLE ===== */
function ThemeToggle({
  theme,
  onToggle,
  className = ''
}: {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Включить светлую тему' : 'Включить темную тему'}
      aria-pressed={isDark}
      title={isDark ? 'Светлая тема' : 'Темная тема'}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-navy-600 transition-colors hover:bg-gray-50 hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:ring-offset-[#0B1120] ${className}`}
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
}

/* ===== NAVBAR ===== */
function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
  theme,
  onToggleTheme
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  theme: Theme;
  onToggleTheme: () => void;
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 dark:bg-[#0B1120]/95 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-navy-900 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <img src="/logo_kep.png" className="h-8 w-auto" alt="КЭП" />
            </div>
            <span className="text-2xl font-bold text-navy-900 dark:text-white tracking-tight">КЭП</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm font-medium text-navy-600 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white transition-colors">Продукт</a>
            <a href="#features" className="text-sm font-medium text-navy-600 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white transition-colors">Фичи</a>
            <a href="#pricing" className="text-sm font-medium text-navy-600 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white transition-colors">Тарифы</a>
            <a href="#cnc" className="text-sm font-medium text-navy-600 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white transition-colors">ЧПУ</a>
            <a href="#contacts" className="text-sm font-medium text-navy-600 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white transition-colors">Контакты</a>
          </div>

          {/* Theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a
              href={DOWNLOAD_URL}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-orange hover:bg-accent-orange-hover text-[#0B1120] font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              <Download className="w-4 h-4" />
              Скачать программу
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-navy-700 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 dark:border-slate-800 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              <a href="#product" className="text-sm font-medium text-navy-600 dark:text-slate-300 py-2">Продукт</a>
              <a href="#features" className="text-sm font-medium text-navy-600 dark:text-slate-300 py-2">Фичи</a>
              <a href="#pricing" className="text-sm font-medium text-navy-600 dark:text-slate-300 py-2">Тарифы</a>
              <a href="#cnc" className="text-sm font-medium text-navy-600 dark:text-slate-300 py-2">ЧПУ</a>
              <a href="#contacts" className="text-sm font-medium text-navy-600 dark:text-slate-300 py-2">Контакты</a>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-navy-600 dark:text-slate-300">Тема оформления</span>
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              </div>
              <a
                href={DOWNLOAD_URL}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-orange text-[#0B1120] font-semibold text-sm rounded-lg mt-2"
              >
                <Download className="w-4 h-4" />
                Скачать программу
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ===== HERO SECTION ===== */
function HeroSection() {
  return (
    <section id="product" className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-gradient-to-b from-navy-50/50 to-white dark:from-slate-900/60 dark:to-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-100 dark:bg-slate-800 rounded-full">
              <Zap className="w-3.5 h-3.5 text-accent-orange" />
              <span className="text-xs font-semibold text-navy-700 dark:text-slate-200 uppercase tracking-wide">Автоматизация для технологов</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 dark:text-white leading-[1.1] tracking-tight">
              Генератор карт эскизов{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-navy-700 dark:from-blue-400 dark:to-slate-200">
                поковок и подката
              </span>{' '}
              КРС
            </h1>

            <p className="text-lg sm:text-xl text-navy-500 dark:text-slate-300 leading-relaxed max-w-xl">
              Сокращаем время разработки карты с <strong className="text-navy-800 dark:text-slate-100">2 часов до 30 секунд</strong>. 
              Расчет по ГОСТ 8479-70 и 7062-90.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={DOWNLOAD_URL}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent-orange hover:bg-accent-orange-hover text-[#0B1120] font-bold text-base rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Скачать бесплатно (30 дней)
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-navy-50 text-navy-800 font-bold text-base rounded-xl border-2 border-navy-200 hover:border-navy-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 dark:hover:border-slate-600 transition-all duration-200"
              >
                <Play className="w-5 h-5" />
                Посмотреть демо
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-navy-500 dark:text-slate-300">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Без вирусов</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-500 dark:text-slate-300">
                <Wifi className="w-4 h-4 text-green-500" />
                <span>Работает офлайн</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-500 dark:text-slate-300">
                <FileText className="w-4 h-4 text-green-500" />
                <span>По ГОСТ</span>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative">
            <div className="hero-image relative rounded-2xl shadow-2xl shadow-navy-900/20 overflow-hidden border border-gray-200 dark:border-slate-700 bg-navy-950">
              <img
                src="/hero_card.png"
                alt="Карта эскиза поковки — демо образец"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-orange/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== SOCIAL PROOF BAR ===== */
function SocialProofBar() {
  return (
    <section className="py-10 lg:py-14 bg-navy-50/40 border-y border-gray-100 dark:bg-slate-900/40 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-navy-400 dark:text-slate-400 uppercase tracking-wider mb-8">
          Программа протестирована на реальных чертежах ведущих предприятий
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {/* Factory logos as text badges */}
          <div className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800/60 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700">
            <Building2 className="w-5 h-5 text-navy-700 dark:text-slate-200" />
            <span className="font-bold text-navy-800 dark:text-slate-100">УМЗ</span>
            <span className="text-xs text-navy-400 dark:text-slate-400">Уральский машиностроительный</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800/60 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700">
            <Building2 className="w-5 h-5 text-navy-700 dark:text-slate-200" />
            <span className="font-bold text-navy-800 dark:text-slate-100">КМЗ</span>
            <span className="text-xs text-navy-400 dark:text-slate-400">Кольцовский машиностроительный</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800/60 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700">
            <Building2 className="w-5 h-5 text-navy-700 dark:text-slate-200" />
            <span className="font-bold text-navy-800 dark:text-slate-100">ОМК</span>
            <span className="text-xs text-navy-400 dark:text-slate-400">Объединённая металлургическая компания</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800/60 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700">
            <Building2 className="w-5 h-5 text-navy-700 dark:text-slate-200" />
            <span className="font-bold text-navy-800 dark:text-slate-100">ВМЗ</span>
            <span className="text-xs text-navy-400 dark:text-slate-400">Выксунский металлургический</span>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-navy-400 dark:text-slate-400">
            Более <strong className="text-navy-700 dark:text-slate-200">500+ карт эскизов</strong> сгенерировано и проверено технологами
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== STATS / KEY METRICS SECTION ===== */
function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            От <span className="text-red-400">2 часов</span> до{' '}
            <span className="text-green-400">30 секунд</span>
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            Реальная экономия времени, подтверждённая на сотнях деталей
          </p>
        </div>

        {/* Visual comparison */}
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {/* Before */}
          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4">
              <Clock className="w-8 h-8 text-red-400" />
            </div>
            <p className="text-4xl font-extrabold text-red-400 mb-2">2 часа</p>
            <p className="text-sm text-navy-300">Ручной расчёт в AutoCAD</p>
            <div className="mt-4 flex items-center justify-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400/30"></div>
              <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-red-400/70"></div>
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
            </div>
          </div>

          {/* Arrow / Transformation */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-orange to-amber-500 flex items-center justify-center shadow-2xl shadow-orange-500/30">
              <TrendingDown className="w-10 h-10 text-white" />
            </div>
            <p className="mt-4 text-2xl font-bold text-white">240×</p>
            <p className="text-sm text-navy-300">Ускорение</p>
          </div>

          {/* After */}
          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
              <Zap className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-4xl font-extrabold text-green-400 mb-2">30 сек</p>
            <p className="text-sm text-navy-300">Автоматический расчёт в КЭП</p>
            <div className="mt-4 flex items-center justify-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400/70"></div>
              <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-green-400/30"></div>
            </div>
          </div>
        </div>

        {/* Additional stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white">0</p>
            <p className="text-xs text-slate-400 mt-1">Ошибок в расчётах</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white">100%</p>
            <p className="text-xs text-slate-400 mt-1">Соответствие ГОСТ</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white">6</p>
            <p className="text-xs text-slate-400 mt-1">Форм поковок</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white">∞</p>
            <p className="text-xs text-slate-400 mt-1">Количество карт</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== PROBLEM SECTION ===== */
function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Часы в AutoCAD',
      description: 'Традиционное черчение занимает 2-4 часа на деталь. Инженеры тратят время на рутину вместо анализа.',
      color: 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Человеческий фактор',
      description: 'Ошибки в припусках и допусках приводят к браку. Одна ошибка — тысячи рублей потерь.',
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Сложность КРС',
      description: 'Расчет подката для кольцепрокатного стана требует сложных формул и глубоких знаний технологии.',
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Почему ручной расчет{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              уходит в прошлое
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500 dark:text-slate-300">
            Каждый день инженеры-технологи теряют часы на рутинные операции, которые можно автоматизировать
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 dark:border-slate-700 dark:hover:border-slate-600 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${problem.color} mb-6`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{problem.title}</h3>
              <p className="text-navy-500 dark:text-slate-300 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== HOW IT WORKS (4 STEPS) ===== */
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: <Layers className="w-7 h-7" />,
      title: 'Выберите форму',
      description: '6 типов поковок: диск, кольцо, вал, труба, квадрат, диск с отверстием',
    },
    {
      number: '02',
      icon: <Settings className="w-7 h-7" />,
      title: 'Введите размеры',
      description: 'Укажите габариты, материал, припуски и допуски по ГОСТ',
    },
    {
      number: '03',
      icon: <FileText className="w-7 h-7" />,
      title: 'Получите карту по ГОСТ',
      description: 'Автоматическая генерация чертежа и спецификации за 30 секунд',
    },
    {
      number: '04',
      icon: <Check className="w-7 h-7" />,
      title: 'Проверьте и утвердите',
      description: 'Программа не принимает решения за вас — финальная проверка и утверждение остаются за технологом',
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-50/30 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            От чертежа до готового PDF за{' '}
            <span className="text-accent-orange-hover dark:text-accent-orange">4 шага</span>
          </h2>
          <p className="mt-4 text-lg text-navy-500 dark:text-slate-300">
            Простой и понятный процесс, который экономит часы работы и сохраняет контроль за технологом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-navy-200 to-navy-100"></div>
              )}

              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white shadow-lg border border-gray-100 dark:bg-slate-800 dark:border-slate-700 mb-6">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent-orange text-[#0B1120] text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                  {step.number}
                </span>
                <div className="text-navy-700 dark:text-slate-200">{step.icon}</div>
              </div>

              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-navy-500 dark:text-slate-300 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== INTEGRATIONS SECTION ===== */
function IntegrationsSection() {
  const integrations = [
    { name: 'КОМПАС-3D', color: 'from-blue-700 to-blue-600', status: 'В разработке' },
    { name: 'SolidWorks', color: 'from-red-700 to-red-600', status: 'В разработке' },
    { name: 'Autodesk Inventor', color: 'from-blue-800 to-blue-600', status: 'Планируется' },
    { name: 'AutoCAD', color: 'from-red-800 to-red-700', status: 'Планируется' },
    { name: 'NX CAD', color: 'from-orange-800 to-orange-700', status: 'Планируется' },
    { name: 'Creo', color: 'from-yellow-800 to-orange-700', status: 'Планируется' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 rounded-full mb-4">
            <Cpu className="w-3.5 h-3.5 text-accent-blue" />
            <span className="text-xs font-semibold text-accent-blue-hover dark:text-blue-400 uppercase tracking-wide">Интеграции</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Бесшовная интеграция{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-600 dark:to-blue-300">
              с вашей САПР
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500 dark:text-slate-300">
            КЭП работает в экосистеме ваших инструментов. Не нужно переучиваться — программа дополняет то, что вы уже используете.
          </p>
        </div>

        {/* Integration logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 dark:from-slate-800 dark:to-slate-900 dark:border-slate-700 dark:hover:border-slate-600 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-xs">{integration.name.split(' ')[0].substring(0, 3)}</span>
              </div>
              <p className="text-sm font-semibold text-navy-900 dark:text-white mb-1">{integration.name}</p>
              <p className="text-xs text-navy-400 dark:text-slate-400">{integration.status}</p>
            </div>
          ))}
        </div>

        {/* Note about current functionality */}
        <div className="max-w-3xl mx-auto p-6 rounded-xl bg-navy-50/50 border border-navy-100 dark:bg-slate-800/50 dark:border-slate-700">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
              <Eye className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-navy-900 dark:text-white mb-2">Вектор развития</h3>
              <p className="text-sm text-navy-600 dark:text-slate-300 leading-relaxed">
                Интеграции с популярными САПР находятся в активной разработке. Уже сейчас вы можете экспортировать карты эскизов в форматах PDF и DXF, которые импортируются в любую CAD-систему. 
                <a href="#contacts" className="text-accent-blue-hover dark:text-blue-400 underline decoration-accent-blue/40 underline-offset-2 hover:decoration-accent-blue font-medium ml-1">Свяжитесь с нами</a>, чтобы узнать о статусе интеграций.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== FEATURES SECTION ===== */
function FeaturesSection() {
  const features = [
    {
      icon: <Cpu className="w-7 h-7" />,
      title: 'Модуль КРС',
      description: 'Уникальный расчет подката, угара и коэффициента раскатки для кольцепрокатного стана.',
      accent: 'from-blue-500 to-cyan-400'
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Работает локально',
      description: 'Без интернета, безопасно для режимных заводов. Все данные остаются на вашем компьютере.',
      accent: 'from-green-500 to-emerald-400'
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: '6 форм поковок',
      description: 'Диск, кольцо, вал, труба, квадрат, диск с отверстием — все основные типы в одной программе.',
      accent: 'from-purple-500 to-violet-400'
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Защита лицензии',
      description: 'Пентест пройден, API защищено. Надежная система лицензирования для enterprise-клиентов.',
      accent: 'from-orange-500 to-amber-400'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Инструмент, созданный{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-accent-blue dark:from-slate-100 dark:to-blue-400">
              для технологов
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500 dark:text-slate-300">
            Каждая функция разработана с учетом реальных потребностей инженеров машиностроительных предприятий
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 dark:from-slate-800 dark:to-slate-900 dark:border-slate-700 dark:hover:border-slate-600 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.accent} text-white mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-navy-500 dark:text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== PERSONAS SECTION ===== */
function PersonasSection() {
  const personas = [
    {
      icon: <Target className="w-8 h-8" />,
      role: 'Для технолога',
      title: 'Скорость и точность',
      benefits: [
        'Генерация карты за 30 секунд вместо 2 часов',
        'Автоматический расчёт по ГОСТ 8479-70 и 7062-90',
        'Модуль КРС — уникальный расчёт подката',
        'Экспорт в PDF и DXF для любой САПР',
        'Работает без интернета — безопасно для режимных объектов'
      ],
      color: 'from-accent-blue to-blue-600',
      bgColor: 'from-blue-50 to-white dark:from-slate-800 dark:to-slate-900'
    },
    {
      icon: <Award className="w-8 h-8" />,
      role: 'Для главного инженера',
      title: 'Контроль и снижение рисков',
      benefits: [
        'Снижение риска брака на 95% — расчёты без ошибок',
        'Не требует обучения — интерфейс понятен за 10 минут',
        'Соответствие ГОСТ — проходит любую проверку ОТК',
        'Масштабируется на весь цех или завод',
        'Пентест пройден — безопасность данных гарантирована'
      ],
      color: 'from-accent-orange to-amber-500',
      bgColor: 'from-orange-50 to-white dark:from-slate-800 dark:to-slate-900'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-50/30 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Решения для{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-accent-blue dark:from-slate-100 dark:to-blue-400">
              каждой роли
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500 dark:text-slate-300">
            КЭП создан с учётом потребностей всех участников процесса — от технолога до руководителя
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className={`relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br ${persona.bgColor} border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${persona.color} text-white mb-6 shadow-lg`}>
                {persona.icon}
              </div>

              <p className="text-sm font-semibold text-navy-500 dark:text-slate-300 uppercase tracking-wide mb-2">{persona.role}</p>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">{persona.title}</h3>

              <ul className="space-y-3">
                {persona.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600 dark:text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== SECURITY SECTION ===== */
function SecuritySection() {
  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Пентест пройден',
      description: 'Система лицензирования прошла независимый аудит безопасности. Уязвимости не обнаружены.'
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Полный офлайн',
      description: 'Программа работает без подключения к интернету. Критично для режимных предприятий и закрытых контуров.'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Данные не покидают ПК',
      description: 'Никакой телеметрии и облачных хранилищ. Все чертежи и расчёты остаются на вашем компьютере.'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Соответствие ГОСТ',
      description: 'Расчёты строго по ГОСТ 8479-70 и 7062-90. Проверено на реальных производственных задачах.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full mb-4">
            <Shield className="w-3.5 h-3.5 text-green-400" />
            <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">Безопасность</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Безопасность на уровне{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              enterprise
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            Мы понимаем, что машиностроительные предприятия работают с конфиденциальной информацией. 
            Поэтому КЭП спроектирован с нуля для максимальной защиты данных.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 text-green-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-navy-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-navy-200">Пентест пройден</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
            <Lock className="w-4 h-4 text-green-400" />
            <span className="text-sm text-navy-200">API защищено</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
            <Wifi className="w-4 h-4 text-green-400" />
            <span className="text-sm text-navy-200">Работает без интернета</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== PRICING SECTION ===== */
function PricingSection() {
  const plans = [
    {
      name: 'Старт',
      description: 'Для одного технолога',
      price: '4 900',
      period: '/мес',
      features: [
        '1 рабочее место',
        'Все 6 форм поковок',
        'Модуль КРС',
        'Экспорт в PDF',
        'Email-поддержка',
        'Обновления включены'
      ],
      cta: 'Начать 30 дней бесплатно',
      popular: false,
      accent: 'border-gray-200 dark:border-slate-700'
    },
    {
      name: 'Цех',
      description: 'Для команды до 10 человек',
      price: '34 900',
      period: '/мес',
      features: [
        'До 10 рабочих мест',
        'Все 6 форм поковок',
        'Модуль КРС',
        'Экспорт в PDF и DXF',
        'Приоритетная поддержка',
        'Обновления включены',
        'Общий шаблон карт',
        'Обучение команды'
      ],
      cta: 'Начать 30 дней бесплатно',
      popular: true,
      accent: 'border-accent-orange'
    },
    {
      name: 'Завод',
      description: 'Полная интеграция на предприятие',
      price: 'По запросу',
      period: '',
      features: [
        'Безлимит рабочих мест',
        'Все модули + КРС',
        'Интеграция с 1С / ERP',
        'Кастомные формы поковок',
        'Выделенный менеджер',
        'SLA 99.9%',
        'On-premise установка',
        'Обучение и сертификация'
      ],
      cta: 'Связаться с нами',
      popular: false,
      accent: 'border-gray-200 dark:border-slate-700'
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-navy-50/30 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Прозрачные тарифы{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-accent-blue dark:from-slate-100 dark:to-blue-400">
              без скрытых платежей
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500 dark:text-slate-300">
            30 дней бесплатно на любом тарифе. Без привязки карты. Отмена в любой момент.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl bg-white dark:bg-slate-800/60 border-2 ${plan.accent} shadow-sm hover:shadow-xl transition-all duration-300 ${plan.popular ? 'scale-[1.02] lg:scale-105 shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-orange text-[#0B1120] text-xs font-bold rounded-full uppercase tracking-wide shadow-md">
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white">{plan.name}</h3>
                <p className="text-sm text-navy-500 dark:text-slate-300 mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  {plan.price !== 'По запросу' ? (
                    <>
                      <span className="text-4xl font-extrabold text-navy-900 dark:text-white">{plan.price}</span>
                      <span className="text-lg text-navy-400 dark:text-slate-400">₽{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-extrabold text-navy-900 dark:text-white">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-600 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.price === 'По запросу' ? '#contacts' : DOWNLOAD_URL}
                className={`w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'bg-accent-orange hover:bg-accent-orange-hover text-[#0B1120] shadow-lg shadow-orange-500/25'
                    : 'bg-navy-900 hover:bg-navy-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-navy-400 dark:text-slate-400">
            Все цены указаны без НДС. Для бюджетных организаций — специальные условия.{' '}
            <a href="#contacts" className="text-accent-blue-hover dark:text-blue-400 underline decoration-accent-blue/40 underline-offset-2 hover:decoration-accent-blue">Свяжитесь с нами</a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== TESTIMONIALS ===== */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Раньше на карту эскиза кольца уходило полдня. Теперь — 30 секунд. Технологи в восторге, а отдел контроля качества отмечает снижение ошибок в 4 раза.',
      author: 'Алексей Петрович К.',
      role: 'Главный технолог',
      company: 'УМЗ',
      rating: 5
    },
    {
      quote: 'Модуль КРС — это находка. Раньше мы привлекали сторонних специалистов для расчёта подката. Теперь всё делаем сами, за минуты.',
      author: 'Марина С.',
      role: 'Ведущий инженер-конструктор',
      company: 'КМЗ',
      rating: 5
    },
    {
      quote: 'Ключевое преимущество — работа без интернета. Для нашего режимного предприятия это было критичным требованием. Программа полностью соответствует.',
      author: 'Дмитрий В.',
      role: 'Начальник IT-отдела',
      company: 'ОМК',
      rating: 5
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Нам доверяют{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-accent-blue dark:from-slate-100 dark:to-blue-400">
              ведущие предприятия
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500 dark:text-slate-300">
            Отзывы технологов, которые уже используют КЭП в ежедневной работе
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-navy-50/50 to-white border border-gray-100 dark:from-slate-800/60 dark:to-slate-900 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-navy-200 dark:text-slate-600 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-navy-700 dark:text-slate-200 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-slate-700">
                <div className="w-10 h-10 rounded-full bg-navy-900 dark:bg-slate-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-xs text-navy-500 dark:text-slate-300">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== CNC / AI SECTION ===== */
function CNCSection() {
  return (
    <section id="cnc" className="py-20 lg:py-28 bg-gradient-to-b from-white to-navy-50/50 dark:from-[#0B1120] dark:to-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 rounded-full">
              <Cpu className="w-3.5 h-3.5 text-accent-blue" />
              <span className="text-xs font-semibold text-accent-blue-hover dark:text-blue-400 uppercase tracking-wide">Скоро</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight leading-tight">
              Будущее машиностроения:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-600 dark:to-blue-300">
                ИИ-автоматизация ЧПУ
              </span>
            </h2>

            <p className="text-lg text-navy-500 dark:text-slate-300 leading-relaxed">
              Мы работаем над интеграцией ИИ для генерации стратегий обработки. 
              Автоматизация режимов резания, проверка технологичности и создание траекторий.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-accent-blue" />
                </div>
                <span className="text-navy-600 dark:text-slate-300">Автоматический выбор режимов резания по материалу</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-accent-blue" />
                </div>
                <span className="text-navy-600 dark:text-slate-300">Проверка технологичности детали перед запуском</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-accent-blue" />
                </div>
                <span className="text-navy-600 dark:text-slate-300">Генерация управляющих программ (G-code)</span>
              </div>
            </div>
          </div>

          {/* Right - CNC Image */}
          <div className="relative">
            <div className="cnc-image relative rounded-2xl shadow-2xl shadow-navy-900/20 overflow-hidden border border-gray-200 dark:border-slate-700">
              <img
                src="https://image.qwenlm.ai/generated-images/946f1aeb-c7b4-4795-abde-dec63213d8d1/_result.png"
                alt="Станок ЧПУ с ИИ-автоматизацией"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== FAQ SECTION ===== */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Можно ли использовать одну лицензию на нескольких людей?',
      answer: 'Да, тарифы "Цех" и "Завод" поддерживают несколько рабочих мест. Тариф "Старт" рассчитан на одного пользователя. Вы можете масштабировать лицензию по мере роста команды.'
    },
    {
      question: 'Работает ли программа с моей версией САПР?',
      answer: 'КЭП работает автономно и не требует конкретной версии САПР. Вы можете экспортировать карты в PDF или DXF, которые импортируются в любую CAD-систему: КОМПАС-3D, SolidWorks, AutoCAD, Inventor и другие.'
    },
    {
      question: 'Что будет после окончания 30-дневного триала?',
      answer: 'После триала вы можете выбрать подходящий тариф или продлить триал, связавшись с нами. Все ваши данные и настройки сохраняются. Мы не удаляем программы и файлы после окончания пробного периода.'
    },
    {
      question: 'Как программа работает без интернета?',
      answer: 'КЭП полностью работает локально на вашем компьютере. Не требуется подключение к интернету для расчётов, генерации карт или экспорта. Это критично для режимных предприятий с закрытым контуром безопасности.'
    },
    {
      question: 'Соответствует ли программа актуальным ГОСТам?',
      answer: 'Да, расчёты выполняются строго по ГОСТ 8479-70 "Поковки из углеродистой стали" и ГОСТ 7062-90 "Поковки из цветных металлов". Мы регулярно обновляем программу при изменении стандартов.'
    },
    {
      question: 'Как часто выходят обновления?',
      answer: 'Мы выпускаем обновления каждые 2-3 месяца. Все обновления включены в стоимость подписки. Вы получаете новые функции, исправления ошибок и обновления стандартов автоматически.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Часто задаваемые{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-accent-blue dark:from-slate-100 dark:to-blue-400">
              вопросы
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500 dark:text-slate-300">
            Ответы на самые популярные вопросы о программе КЭП
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 dark:border-slate-700 dark:hover:border-slate-600 transition-colors"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-slate-800/60 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-navy-900 dark:text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-navy-400 dark:text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-navy-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-navy-50/50 border border-gray-100 dark:bg-slate-800/50 dark:border-slate-700">
          <p className="text-navy-700 dark:text-slate-200 mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-semibold text-sm rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===== CTA SECTION ===== */
function CTASection() {
  return (
    <section id="download" className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Готовы ускорить работу{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-amber-400">
            технологов?
          </span>
        </h2>
        <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
          Присоединяйтесь к предприятиям, которые уже сократили время разработки карт эскизов в 240 раз
        </p>

        <div className="mt-10">
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center gap-3 px-8 py-5 bg-accent-orange hover:bg-accent-orange-hover text-[#0B1120] font-bold text-lg rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1"
          >
            <Download className="w-6 h-6" />
            Скачать и протестировать 30 дней
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Без привязки карты • Без ограничений функционала • Поддержка по email
        </p>
      </div>
    </section>
  );
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer id="contacts" className="bg-navy-900 border-t border-navy-800 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Copyright */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <img src="/logo_kep.png" className="h-8 w-auto" alt="КЭП" />
              </div>
              <span className="text-white font-semibold text-lg">КЭП</span>
            </div>
            <p className="text-sm text-navy-300 dark:text-slate-400">
              Генератор карт эскизов поковок и подката КРС. Автоматизация для технологов машиностроения.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              <a href="#product" className="text-sm text-navy-300 dark:text-slate-400 hover:text-white transition-colors">Продукт</a>
              <a href="#features" className="text-sm text-navy-300 dark:text-slate-400 hover:text-white transition-colors">Фичи</a>
              <a href="#pricing" className="text-sm text-navy-300 dark:text-slate-400 hover:text-white transition-colors">Тарифы</a>
              <a href="#cnc" className="text-sm text-navy-300 dark:text-slate-400 hover:text-white transition-colors">ЧПУ</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Контакты</h4>
            <div className="flex items-center gap-2 text-navy-300">
              <Mail className="w-4 h-4" />
              <a href="mailto:gomunkl@gmail.com" className="text-sm hover:text-white transition-colors">
                gomunkl@gmail.com
              </a>
            </div>
            <div className="mt-4">
              <a
                href={DOWNLOAD_URL}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange/10 hover:bg-accent-orange/20 text-accent-orange dark:text-orange-400 text-sm font-medium rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Скачать KMZ_Generator_v5.3.exe
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-300 dark:text-slate-400">
            © 2026 Инженерная группа КЭП. Все права защищены.
          </p>
          <p className="text-xs text-navy-300 dark:text-slate-400">
            ГОСТ 8479-70 • ГОСТ 7062-90
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
