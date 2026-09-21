import { Icon } from "../ui/Icon";

export function HeroSection({ heroImage = "/images/mix.png" }) {
  return (
    <section
      id="anasayfa"
      tabIndex={-1}
      className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low/40 to-surface scroll-mt-20 outline-none"
    >
      {/* Ambient sunlit background accents */}
      <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-[32rem] h-[32rem] rounded-full bg-tertiary-fixed/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
              <Icon name="arrow_back_ios_new" size={16} />
              <span>Artigianale İtalyan Gelato</span>
            </div>

            <h1 className="font-display-lg text-display-md lg:text-display-lg text-primary tracking-tight font-serif leading-[1.1]">
              Mutluluk Bir Top Dondurma Uzağında.
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Geleneksel İtalyan tarifiyle, günlük taze sütten ve gerçek meyvelerden hazırlanan
              artizan dondurmalar. Kapınıza erimeden, özel soğutuculu kuryemizle 30 dakikada teslim.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_8px_24px_rgba(50,25,23,0.18)] hover:-translate-y-0.5 active:translate-y-0"
                href="#onerilenler"
              >
                <span>Dondurmaları Keşfet</span>
                <Icon name="expand_more" size={20} />
              </a>
              <a
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-lg text-label-lg transition-all hover:-translate-y-0.5"
                href="#urunler"
              >
                <span>Menüyü İncele</span>
              </a>
            </div>

            {/* Proof mini row */}
            <div className="pt-4 flex items-center gap-6 text-on-surface-variant font-label-md text-label-md">
              <div className="flex items-center gap-1.5">
                <Icon name="verified" size={18} className="text-secondary" />
                <span>%100 Katkısız</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="schedule" size={18} className="text-secondary" />
                <span>30 Dk Teslimat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="ac_unit" size={18} className="text-secondary" />
                <span>-18°C Termo Kutu</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Shadow glow beneath dish */}
              <div className="absolute inset-4 rounded-3xl bg-primary/10 blur-2xl transform translate-y-6"></div>

              {/* Main Bowl Image with scooped styling */}
              <div className="relative rounded-3xl overflow-hidden bg-surface-container-low shadow-[0_16px_40px_-8px_rgba(50,25,23,0.14)] transition-transform duration-500 hover:scale-[1.01]">
                <img
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                  src={heroImage}
                  alt="Artisan gelato scoops served in a speckled rustic ceramic bowl on a marble bistro table"
                />
              </div>

              {/* Floating Pill 1: Natural */}
              <div className="absolute -top-4 sm:top-4 -left-3 sm:-left-6 px-4 py-2.5 rounded-full bg-surface-bright/95 backdrop-blur-md shadow-[0_6px_20px_rgba(50,25,23,0.08)] flex items-center gap-2 font-label-md text-label-md text-primary animate-float-1">
                <span className="text-[18px]">✨</span>
                <span className="font-semibold">%100 Doğal Malzeme</span>
              </div>

              {/* Floating Pill 2: Bronte Pistachio */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 px-4 py-2.5 rounded-full bg-tertiary-fixed/90 text-on-tertiary-fixed backdrop-blur-md shadow-[0_6px_20px_rgba(0,38,17,0.1)] flex items-center gap-2 font-label-md text-label-md animate-float-2">
                <span className="text-[18px]">🌿</span>
                <span className="font-semibold">Bronte Antep Fıstığı</span>
              </div>

              {/* Floating Pill 3: Cold delivery */}
              <div className="absolute -bottom-4 sm:bottom-4 left-6 sm:left-10 px-4 py-2.5 rounded-full bg-surface-bright/95 backdrop-blur-md shadow-[0_6px_20px_rgba(50,25,23,0.08)] flex items-center gap-2 font-label-md text-label-md text-primary animate-float-3">
                <span className="text-[18px]">❄️</span>
                <span className="font-semibold">-18°C Termo Çanta ile Teslimat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
