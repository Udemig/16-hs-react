import { Icon } from '../ui/Icon';

export const LocationSection = ({ storeInfo }) => {
  if (!storeInfo) return null;

  const mapBgImage =
    storeInfo.mapImage ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD3lN9lqm9NIGZ6Q8DvtGduZmv8692SKhELM1xZsBka2v3f3-_mYFkPrGL9-YOfxn39SG3W01E8tHiRKCkAnt52iaYqKBCjSy_IBz1GralU5E4_tBptt7HCaxUpbxhA5ePTB2YJXgtiBDuM31seMpL_45TBwZyN1InBQ5rI8id1aoywa32r1r2DQkU0HNbtTvHbP7dNsPXDyKXHSsWdEoth2ScfPS6RnSSnXi-_MAgEQp_h2AOQKug';

  return (
    <section
      className="w-full py-16 bg-surface-container-low/40 scroll-mt-20 outline-none"
      id="iletisim"
      tabIndex={-1}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-3xl overflow-hidden bg-surface-container-lowest shadow-[0_6px_28px_rgba(50,25,23,0.06)] grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                {storeInfo.subtitle || 'Cremeria & Laboratorio'}
              </span>
              <h3 className="font-headline-lg text-headline-lg font-serif text-primary">
                Moda Dükkanımıza Uğrayın
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Taze pişen tereyağlı külah kokusu eşliğinde, dilediğiniz lezzetleri tatmak için Moda Caddesi üzerindeki mekanımıza bekliyoruz.
              </p>
            </div>

            <div className="space-y-3 font-body-sm text-body-sm text-on-surface">
              <div className="flex items-center gap-3">
                <Icon name="location_on" size={20} className="text-secondary" />
                <span>{storeInfo.address || 'Caferağa Mah. Moda Cad. No: 42/A, Kadıköy / İstanbul'}</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="schedule" size={20} className="text-secondary" />
                <span>{storeInfo.hours || 'Haftanın her günü 11:00 - 00:00'}</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="call" size={20} className="text-secondary" />
                <span>{storeInfo.phone || '+90 (216) 555 43 21'}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-sm"
                href={storeInfo.googleMaps || 'https://maps.google.com'}
                rel="noreferrer"
                target="_blank"
              >
                <span>Yol Tarifi Al</span>
                <Icon name="directions" size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-72 lg:h-auto min-h-[320px] relative">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${mapBgImage}')` }}
            ></div>
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-surface/90 backdrop-blur-md text-primary font-label-md text-label-md shadow-md flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container animate-ping"></span>
                <span>Şu anda açık • Taze üretim devam ediyor</span>
              </span>
              <span className="text-secondary font-bold">Gel-Al %10 İndirimli</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
