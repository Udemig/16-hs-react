import { Icon } from '../ui/Icon';

export const AboutSection = ({ aboutImage }) => {
  return (
    <section
      className="w-full py-16 lg:py-24 bg-surface scroll-mt-20 outline-none"
      id="hakkimizda"
      tabIndex={-1}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Visual */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(50,25,23,0.1)] bg-surface-container">
              <img
                alt="Artizan Gelato Ustası İtalyan Pozzetto Tezgahında"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                src={aboutImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuDzcsoBAxbzIKVltegmEgkpcdqGlQRd2qCuQNFQaK_4kf6zw25ADeEQaSyD8jsNxeNzkgG2apVU2-giWcBEJhlI4Q-XobzsZIHr6CukL75dfCJV_JmOaikj3mHHX61hb6QN9ejUSTrrZf0FK4C8ZqsT7VltiZFCMtGMeamsxraSU_mGgv2K43ATP2QLReXe66gJteIcLzfNpvJUWPdtIAavaRb55I5H_oHexNEstmG9QCvxVe0CgHo"}
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 p-5 rounded-2xl bg-surface-bright shadow-[0_8px_24px_rgba(50,25,23,0.1)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
                <Icon name="award_star" size={28} />
              </div>
              <div>
                <p className="font-title-md text-title-md font-bold text-primary">2018'den Beri</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Moda'nın Kalbinde</p>
              </div>
            </div>
          </div>
          {/* Story Text & Stats */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Ustalık &amp; Felsefemiz
            </span>
            <h2 className="font-headline-lg text-headline-lg lg:text-display-md text-primary font-serif">
              Her Topta Biraz Mutluluk, Saf İtalyan Gelato Geleneği.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Moda sokaklarında 2018'de başlayan dondurma tutkumuz, Bologna'daki geleneksel dondurmacılık akademisi eğitimimizle birleşti. Vitrinlerimizde açık hava ile temas etmeyen otantik kapaklı İtalyan <em>pozzetti</em> tezgahları kullanıyoruz.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Hava oranı (%overrun) endüstriyel dondurmalara kıyasla çok daha düşüktür; bu sayede her kaşıkta buz kristalleri değil, saf malzemenin kadifemsi yoğunluğunu tadarsınız.
            </p>
            {/* Counters Bento */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-surface-container-low text-center">
                <p className="font-headline-md text-headline-md font-serif text-primary font-bold">24+</p>
                <p className="font-label-md text-label-md text-on-surface-variant mt-1">Taze Çeşit</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-low text-center">
                <p className="font-headline-md text-headline-md font-serif text-primary font-bold">%100</p>
                <p className="font-label-md text-label-md text-on-surface-variant mt-1">Katkısız</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-low text-center">
                <p className="font-headline-md text-headline-md font-serif text-primary font-bold">15.000+</p>
                <p className="font-label-md text-label-md text-on-surface-variant mt-1">Mutlu Müşteri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
