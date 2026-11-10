import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-slate-900 selection:bg-blue-500 selection:text-white">

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-[#f7f8f8] text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-wider text-slate-900 sm:text-2xl">
              BOXPACK
            </span>
          </div>

          <nav className="hidden items-center space-x-6 text-sm font-medium text-slate-900 md:flex lg:space-x-8">
            <a href="#services" className="transition hover:text-write">
              Услуги
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              Как это работает
            </a>
            <a href="#videofix" className="transition hover:text-white">
              Видеофиксация
            </a>
            <a href="#calculator" className="transition hover:text-white">
              Калькулятор
            </a>
            <a href="#cases" className="transition hover:text-white">
              Кейсы
            </a>
            <a href="#contacts" className="transition hover:text-white">
              Контакты
            </a>
          </nav>
        </div>
      </header>


      <section className="bg-[#0B1E3D] pb-16 pt-12 text-white sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

            <div className="lg:col-span-7">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider text-slate-200">
                Автоматизированный фулфилмент
              </span>
              <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Фулфилмент, который держит сроки и репутацию
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Автоматизированная упаковка, видеоконтроль каждого заказа и
                отправка в день поступления. Мы берем на себя хранение, сборку,
                маркировку и логистику.
              </p>


              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2  px-6 py-3.5 text-sm font-semibold text-white   transition hover:bg-blue-500 active:scale-95"
                >
                  Рассчитать стоимость &rarr;
                </a>
                <a
                  href="#contacts"
                  className="inline-flex items-center rounded-lg border  bg-slate-800/60 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-slate-700 active:scale-95"
                >
                  Получить консультацию
                </a>
              </div>


              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="mt-1 text-xs text-slate-300">заказов в день</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">99.8%</div>
                  <div className="mt-1 text-xs text-slate-300">Точность сборки</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">FBO / FBS</div>
                  <div className="mt-1 text-xs text-slate-300">все маркетплейсы</div>
                </div>
              </div>
            </div>


            <div className="lg:col-span-5">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/80 shadow-2xl backdrop-blur">
                <div className="flex h-full w-full items-center justify-center p-6 text-center text-xs font-medium text-slate-400 sm:text-sm">
                  Видео автоматической упаковки заказа
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="how-it-works" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Как начать работать с нами
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.
            </p>
          </div>


          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-200/40 p-6 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  ШАГ 1
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  Оставляете заявку
                </h3>
              </div>
              <p className="mt-4 text-xs text-slate-500">Через сайт или Telegram</p>
            </div>


            <div className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-200/40 p-6 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  ШАГ 2
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  Получаете расчет
                </h3>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Под ваш объем и формат работы
              </p>
            </div>


            <div className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-200/40 p-6 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  ШАГ 3
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  Подписываем договор
                </h3>
              </div>
              <p className="mt-4 text-xs text-slate-500">Через ЭДО</p>
            </div>


            <div className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-200/40 p-6 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  ШАГ 4
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  Принимаем товар
                </h3>
              </div>
              <p className="mt-4 text-xs text-slate-500">От поставщика или транспортной компании</p>
            </div></div>


            <div className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-200/40 p-6 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  ШАГ 5
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  Автоматизированная упаковка
                </h3>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                С видеоконтролем каждого этапа
              </p>
            </div>


            <div className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-200/40 p-6 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  ШАГ 6
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  Отправляем
                </h3>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                На маркетплейсы по всей России
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-200/40 p-6 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  ШАГ 7
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  Получаете результат
                </h3>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Отчеты и прозрачную аналитику
              </p>
            </div>
          </div>
      </section>

     
      <section id="services" className="bg-slate-100/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Услуги фулфилмента
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Полный цикл обработки товара от приемки до доставки.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border border-cyan-400/30 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-base font-bold text-slate-900">
                Приемка и сортировка
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Принимаем поставки любого объема и размещаем товар на адресное хранение.
              </p>
            </div>


            <div className="rounded-xl border border-cyan-400/30 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-base font-bold text-slate-900">
                Проверка на брак
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Контроль качества перед отправкой покупателю.
              </p>
              </div>


            <div className="rounded-xl border border-cyan-400/30 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-base font-bold text-slate-900">
                Автоматизированная упаковка
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Автоматические линии и видеоконтроль каждого заказа.
              </p>
            </div>


            <div className="rounded-xl border border-cyan-400/30 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-base font-bold text-slate-900">
                Сборка заказов
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Быстрая комплектация заказов по требованиям маркетплейсов.
              </p>
            </div>


            <div className="rounded-xl border border-cyan-400/30 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-base font-bold text-slate-900">
                Отправка на маркетплейсы
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                FBO и FBS для всех крупных площадок.
              </p>
            </div>


            <div className="rounded-xl border border-cyan-400/30 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-base font-bold text-slate-900">
                Хранение товаров
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Безопасное надежное хранение продукции.
              </p>
            </div>


            <div className="rounded-xl border border-cyan-400/30 bg-white p-6 shadow-sm transition hover:shadow-md lg:col-span-3">
              <h3 className="text-base font-bold text-slate-900">
                Интеграции
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Синхронизация с маркетплейсами и CRM. До 20 000 товаров в день.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#0B1E3D] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Почему выбирают BOXPACK
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl  border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-base font-bold text-white">Скорость</h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                До 20 000 товаров за смену и отправка день в день.
              </p>
            </div>


            <div className="rounded-xl  border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-base font-bold text-white">Точность</h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                99.8% точность сборки благодаря автоматизации.
              </p>
            </div>


            <div className="rounded-xl  border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-base font-bold text-white">Надежность</h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Страхование товара и круглосуточный контроль.
              </p>
            </div>

        
            <div className="rounded-xl  border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-base font-bold text-white">Поддержка</h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Персональный менеджер и оперативная помощь.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}