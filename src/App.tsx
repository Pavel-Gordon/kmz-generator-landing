import { useState } from 'react';
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
  Quote
} from 'lucide-react';

const DOWNLOAD_URL = '/KMZ_Generator_v5.3.exe';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-navy-900 font-[Inter]">
      {/* NAVBAR */}
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* HERO SECTION */}
      <HeroSection />

      {/* SOCIAL PROOF BAR */}
      <SocialProofBar />

      {/* PROBLEM SECTION */}
      <ProblemSection />

      {/* HOW IT WORKS */}
      <HowItWorksSection />

      {/* FEATURES */}
      <FeaturesSection />

      {/* SECURITY SECTION */}
      <SecuritySection />

      {/* PRICING SECTION */}
      <PricingSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CNC / AI SECTION */}
      <CNCSection />

      {/* CTA SECTION */}
      <CTASection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* ===== NAVBAR ===== */
function Navbar({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (v: boolean) => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">К</span>
            </div>
            <span className="text-2xl font-bold text-navy-900 tracking-tight">КЭП</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">Продукт</a>
            <a href="#features" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">Фичи</a>
            <a href="#pricing" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">Тарифы</a>
            <a href="#cnc" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">ЧПУ</a>
            <a href="#contacts" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">Контакты</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={DOWNLOAD_URL}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-orange hover:bg-accent-orange-hover text-white font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              <Download className="w-4 h-4" />
              Скачать программу
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              <a href="#product" className="text-sm font-medium text-navy-600 py-2">Продукт</a>
              <a href="#features" className="text-sm font-medium text-navy-600 py-2">Фичи</a>
              <a href="#pricing" className="text-sm font-medium text-navy-600 py-2">Тарифы</a>
              <a href="#cnc" className="text-sm font-medium text-navy-600 py-2">ЧПУ</a>
              <a href="#contacts" className="text-sm font-medium text-navy-600 py-2">Контакты</a>
              <a
                href={DOWNLOAD_URL}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-orange text-white font-semibold text-sm rounded-lg mt-2"
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
    <section id="product" className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-gradient-to-b from-navy-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-100 rounded-full">
              <Zap className="w-3.5 h-3.5 text-accent-orange" />
              <span className="text-xs font-semibold text-navy-700 uppercase tracking-wide">Автоматизация для технологов</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.1] tracking-tight">
              Генератор карт эскизов{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-navy-700">
                поковок и подката
              </span>{' '}
              КРС
            </h1>

            <p className="text-lg sm:text-xl text-navy-500 leading-relaxed max-w-xl">
              Сокращаем время разработки карты с <strong className="text-navy-800">2 часов до 30 секунд</strong>. 
              Расчет по ГОСТ 8479-70 и 7062-90.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={DOWNLOAD_URL}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent-orange hover:bg-accent-orange-hover text-white font-bold text-base rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Скачать бесплатно (30 дней)
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-navy-50 text-navy-800 font-bold text-base rounded-xl border-2 border-navy-200 hover:border-navy-300 transition-all duration-200"
              >
                <Play className="w-5 h-5" />
                Посмотреть демо
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Без вирусов</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <Wifi className="w-4 h-4 text-green-500" />
                <span>Работает офлайн</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <FileText className="w-4 h-4 text-green-500" />
                <span>По ГОСТ</span>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative">
            <div className="hero-image relative rounded-2xl shadow-2xl shadow-navy-900/20 overflow-hidden border border-gray-200 bg-navy-950">
              <img
                src="https://image.qwenlm.ai/generated-images/dc4b7689-b21d-46b5-84ce-183e38934e65/_result.png"
                alt="Интерфейс программы КЭП — генератор карт эскизов поковок"
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
    <section className="py-10 lg:py-14 bg-navy-50/40 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-navy-400 uppercase tracking-wider mb-8">
          Программа протестирована на реальных чертежах ведущих предприятий
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {/* Factory logos as text badges */}
          <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <Building2 className="w-5 h-5 text-navy-700" />
            <span className="font-bold text-navy-800">УМЗ</span>
            <span className="text-xs text-navy-400">Уральский машиностроительный</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <Building2 className="w-5 h-5 text-navy-700" />
            <span className="font-bold text-navy-800">КМЗ</span>
            <span className="text-xs text-navy-400">Кольцовский машиностроительный</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <Building2 className="w-5 h-5 text-navy-700" />
            <span className="font-bold text-navy-800">ОМК</span>
            <span className="text-xs text-navy-400">Объединённая металлургическая компания</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <Building2 className="w-5 h-5 text-navy-700" />
            <span className="font-bold text-navy-800">ВМЗ</span>
            <span className="text-xs text-navy-400">Выксунский металлургический</span>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-navy-400">
            Более <strong className="text-navy-700">500+ карт эскизов</strong> сгенерировано и проверено технологами
          </p>
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
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Человеческий фактор',
      description: 'Ошибки в припусках и допусках приводят к браку. Одна ошибка — тысячи рублей потерь.',
      color: 'bg-amber-50 text-amber-600'
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Сложность КРС',
      description: 'Расчет подката для кольцепрокатного стана требует сложных формул и глубоких знаний технологии.',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            Почему ручной расчет{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              уходит в прошлое
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Каждый день инженеры-технологи теряют часы на рутинные операции, которые можно автоматизировать
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${problem.color} mb-6`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{problem.title}</h3>
              <p className="text-navy-500 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== HOW IT WORKS ===== */
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
      description: 'Готовый PDF с эскизом, спецификацией и расчетами за 30 секунд',
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            От чертежа до готового PDF за{' '}
            <span className="text-accent-orange">3 шага</span>
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Простой и понятный процесс, который экономит часы работы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-navy-200 to-navy-100"></div>
              )}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white shadow-lg border border-gray-100 mb-6">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent-orange text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                  {step.number}
                </span>
                <div className="text-navy-700">{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
              <p className="text-navy-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
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
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            Инструмент, созданный{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-accent-blue">
              для технологов
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Каждая функция разработана с учетом реальных потребностей инженеров машиностроительных предприятий
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.accent} text-white mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-navy-500 leading-relaxed">{feature.description}</p>
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
      accent: 'border-gray-200'
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
      accent: 'border-gray-200'
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-navy-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            Прозрачные тарифы{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-accent-blue">
              без скрытых платежей
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            30 дней бесплатно на любом тарифе. Без привязки карты. Отмена в любой момент.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl bg-white border-2 ${plan.accent} shadow-sm hover:shadow-xl transition-all duration-300 ${plan.popular ? 'scale-[1.02] lg:scale-105 shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-orange text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-md">
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy-900">{plan.name}</h3>
                <p className="text-sm text-navy-500 mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  {plan.price !== 'По запросу' ? (
                    <>
                      <span className="text-4xl font-extrabold text-navy-900">{plan.price}</span>
                      <span className="text-lg text-navy-400">₽{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-extrabold text-navy-900">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.price === 'По запросу' ? '#contacts' : DOWNLOAD_URL}
                className={`w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'bg-accent-orange hover:bg-accent-orange-hover text-white shadow-lg shadow-orange-500/25'
                    : 'bg-navy-900 hover:bg-navy-800 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-navy-400">
            Все цены указаны без НДС. Для бюджетных организаций — специальные условия.{' '}
            <a href="#contacts" className="text-accent-blue hover:underline">Свяжитесь с нами</a>
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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            Нам доверяют{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-accent-blue">
              ведущие предприятия
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Отзывы технологов, которые уже используют КЭП в ежедневной работе
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-navy-50/50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-navy-200 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-navy-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{testimonial.author}</p>
                  <p className="text-xs text-navy-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-navy-50/50 border border-gray-100">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-navy-900">240×</p>
            <p className="text-sm text-navy-500 mt-1">Ускорение работы</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-navy-900">500+</p>
            <p className="text-sm text-navy-500 mt-1">Карт сгенерировано</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-navy-900">0</p>
            <p className="text-sm text-navy-500 mt-1">Ошибок в расчётах</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-navy-900">6</p>
            <p className="text-sm text-navy-500 mt-1">Форм поковок</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== CNC / AI SECTION ===== */
function CNCSection() {
  return (
    <section id="cnc" className="py-20 lg:py-28 bg-gradient-to-b from-white to-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 rounded-full">
              <Cpu className="w-3.5 h-3.5 text-accent-blue" />
              <span className="text-xs font-semibold text-accent-blue uppercase tracking-wide">Скоро</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight leading-tight">
              Будущее машиностроения:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-600">
                ИИ-автоматизация ЧПУ
              </span>
            </h2>

            <p className="text-lg text-navy-500 leading-relaxed">
              Мы работаем над интеграцией ИИ для генерации стратегий обработки. 
              Автоматизация режимов резания, проверка технологичности и создание траекторий.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-accent-blue" />
                </div>
                <span className="text-navy-600">Автоматический выбор режимов резания по материалу</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-accent-blue" />
                </div>
                <span className="text-navy-600">Проверка технологичности детали перед запуском</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-accent-blue" />
                </div>
                <span className="text-navy-600">Генерация управляющих программ (G-code)</span>
              </div>
            </div>
          </div>

          {/* Right - CNC Image */}
          <div className="relative">
            <div className="cnc-image relative rounded-2xl shadow-2xl shadow-navy-900/20 overflow-hidden border border-gray-200">
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
            className="inline-flex items-center gap-3 px-8 py-5 bg-accent-orange hover:bg-accent-orange-hover text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1"
          >
            <Download className="w-6 h-6" />
            Скачать и протестировать 30 дней
          </a>
        </div>

        <p className="mt-6 text-sm text-navy-400">
          Без привязки карты • Без ограничений функционала • Поддержка по email
        </p>
      </div>
    </section>
  );
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer id="contacts" className="bg-navy-900 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Copyright */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">К</span>
              </div>
              <span className="text-white font-semibold text-lg">КЭП</span>
            </div>
            <p className="text-sm text-navy-400">
              Генератор карт эскизов поковок и подката КРС. Автоматизация для технологов машиностроения.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              <a href="#product" className="text-sm text-navy-400 hover:text-white transition-colors">Продукт</a>
              <a href="#features" className="text-sm text-navy-400 hover:text-white transition-colors">Фичи</a>
              <a href="#pricing" className="text-sm text-navy-400 hover:text-white transition-colors">Тарифы</a>
              <a href="#cnc" className="text-sm text-navy-400 hover:text-white transition-colors">ЧПУ</a>
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange/10 hover:bg-accent-orange/20 text-accent-orange text-sm font-medium rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Скачать KMZ_Generator_v5.3.exe
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-500">
            © 2026 Инженерная группа КЭП. Все права защищены.
          </p>
          <p className="text-xs text-navy-600">
            ГОСТ 8479-70 • ГОСТ 7062-90
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
