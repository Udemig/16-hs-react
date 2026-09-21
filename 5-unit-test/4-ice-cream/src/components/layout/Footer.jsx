import { Icon } from "../ui/Icon";

export const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface border-t border-surface-container-high/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Gelato & Co. Logo"
                className="h-8 w-auto object-contain"
                src="/images/logo.png"
              />
              <span className="font-headline-md text-headline-md font-serif text-primary">
                Gelato &amp; Co.
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Geleneksel İtalyan tarifleri, günlük taze süt ve gerçek meyveler ile Kadıköy kalbinde
              el yapımı artisanal dondurmalar üretiyoruz.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-highest text-primary flex items-center justify-center transition-colors"
                href="https://instagram.com/furkanevin00"
                rel="noreferrer"
                target="_blank"
              >
                <Icon name="photo_camera" size={20} />
              </a>
              <a
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-highest text-primary flex items-center justify-center transition-colors"
                href="https://wa.me"
                rel="noreferrer"
                target="_blank"
              >
                <Icon name="chat" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-4 font-serif">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#urunler">
                  Dondurmalar &amp; Sorbet
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#hakkimizda">
                  Ustalık &amp; Malzemeler
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#teslimat">
                  Eve Teslimat Bölgeleri
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#iletisim">
                  İletişim &amp; Adres
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-4 font-serif">
              Çalışma Saatleri
            </h4>
            <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Icon name="schedule" size={18} className="text-secondary" />
                <span>Pazartesi - Pazar</span>
              </div>
              <p className="pl-6 font-semibold text-primary">11:00 - 00:00</p>
              <p className="text-label-md font-label-md text-on-surface-variant pt-2">
                Moda ve Kadıköy bölgelerine gece yarısına kadar kapıya kurye servisi.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-4 font-serif">
              Cremeria Moda
            </h4>
            <div className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-2.5">
                <Icon name="location_on" size={20} className="text-secondary shrink-0 mt-0.5" />
                <span>Caferağa Mah. Moda Cad. No: 42/A, Kadıköy, İstanbul</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Icon name="call" size={20} className="text-secondary shrink-0" />
                <span>+90 (216) 555 43 21</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Icon name="mail" size={20} className="text-secondary shrink-0" />
                <span>ciao@gelatoco.com.tr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-label-md text-label-md text-on-surface-variant">
          <p>© 2025 Gelato &amp; Co. Cremeria Artigianale. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-primary transition-colors" href="#">
              Gizlilik Politikası
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Mesafeli Satış Sözleşmesi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
