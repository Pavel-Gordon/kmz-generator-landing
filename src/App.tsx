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
  Settings
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-navy-900 font-[Inter]">
      {/* NAVBAR */}
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* HERO SECTION */}
      <HeroSection />

      {/* PROBLEM SECTION */}
      <ProblemSection />

      {/* HOW IT WORKS */}
      <HowItWorksSection />

      {/* FEATURES */}
      <FeaturesSection />

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
            <a href="#cnc" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">ЧПУ</a>
            <a href="#contacts" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">Контакты</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#download"
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
              <a href="#cnc" className="text-sm font-medium text-navy-600 py-2">ЧПУ</a>
              <a href="#contacts" className="text-sm font-medium text-navy-600 py-2">Контакты</a>
              <a
                href="#download"
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
                href="#download"
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
            <div className="flex items-center gap-6 pt-4">
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
              {/* СЮДА ВСТАВИТЬ СКРИНШОТ ГЛАВНОГО ЭКРАНА ПРОГРАММЫ */}
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
              {/* Connector line */}
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
              {/* СЮДА ВСТАВИТЬ КАРТИНКУ СТАНКА ЧПУ ИЛИ 3D-МОДЕЛИ */}
            </div>
            {/* Decorative glow */}
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
      {/* Background decoration */}
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
            href="#"
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">К</span>
            </div>
            <div>
              <span className="text-white font-semibold">© 2026 Инженерная группа КЭП</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-navy-300">
            <Mail className="w-4 h-4" />
            <a href="mailto:gomunkl@gmail.com" className="text-sm hover:text-white transition-colors">
              gomunkl@gmail.com
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#product" className="text-sm text-navy-400 hover:text-white transition-colors">Продукт</a>
            <a href="#features" className="text-sm text-navy-400 hover:text-white transition-colors">Фичи</a>
            <a href="#cnc" className="text-sm text-navy-400 hover:text-white transition-colors">ЧПУ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
