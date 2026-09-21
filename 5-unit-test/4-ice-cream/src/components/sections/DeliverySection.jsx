import { useState } from 'react';
import { Icon } from '../ui/Icon';

export const DeliverySection = ({ deliveryZones }) => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const val = inputValue.trim().toLowerCase();
    if (!val) {
      setResult({
        type: 'error',
        message: 'Lütfen bir semt veya mahalle adı yazınız.',
      });
      return;
    }

    const available = deliveryZones?.length
      ? deliveryZones.map((z) => z.name.toLowerCase())
      : [
          'moda',
          'kadıköy',
          'kadikoy',
          'fenerbahçe',
          'fenerbahce',
          'caddebostan',
          'suadiye',
          'bostancı',
          'bostanci',
          'acıbadem',
          'acibadem',
          'göztepe',
          'goztepe',
          'koşuyolu',
          'kosuyolu',
          'erenköy',
          'erenkoy',
        ];

    const isMatch = available.some((zone) => val.includes(zone));

    if (isMatch) {
      setResult({
        type: 'success',
        message: `Harika! "${inputValue.trim()}" bölgesine termo-çanta ile ortalama 25-35 dakikada teslimat yapılmaktadır.`,
      });
    } else {
      setResult({
        type: 'notice',
        message: `Bölgeniz ana kurye rotamızın biraz dışında olabilir. Yine de Gel-Al noktamızdan hemen teslim alabilirsiniz!`,
      });
    }
  };

  return (
    <section className="w-full py-16 bg-surface-container-low/60" id="teslimat">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="p-8 lg:p-12 rounded-3xl bg-surface-container-lowest shadow-[0_6px_28px_rgba(50,25,23,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                <Icon name="ac_unit" size={16} />
                <span>Sıfır Erime Garantisi</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg font-serif text-primary">
                Dondurmanız Erimeden Kapınızda 🛵
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Sıcak yaz günlerinde dondurmanın erimesinden endişe etmeyin. Siparişlerinizi -18°C dereceyi 2 saate kadar koruyan termo-izole strafor kutularda, gıdaya uygun kuru buz kristalleriyle mühürlüyoruz.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 font-label-md text-label-md text-on-surface">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container">
                  <Icon name="timer" size={18} className="text-secondary" />
                  <span>Ortalama Teslimat: <strong>28 Dakika</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container">
                  <Icon name="shopping_bag" size={18} className="text-secondary" />
                  <span>Min. Sipariş: <strong>150 ₺</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container">
                  <Icon name="local_shipping" size={18} className="text-secondary" />
                  <span><strong>300 ₺</strong> Üzeri Ücretsiz</span>
                </div>
              </div>
            </div>

            {/* Interactive District Checker */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-container-low space-y-4">
              <label className="block font-title-md text-title-md font-serif text-primary" htmlFor="district-input">
                Teslimat Bölgenizi Kontrol Edin
              </label>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Kadıköy, Moda, Fenerbahçe, Caddebostan, Suadiye, Bostancı, Acıbadem...
              </p>
              <div className="flex items-center gap-2">
                <input
                  className="flex-1 px-4 py-3 rounded-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-secondary/40 shadow-inner"
                  id="district-input"
                  placeholder="Semt veya Mahalle yazın..."
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                />
                <button
                  className="px-5 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shrink-0 transition-colors shadow-sm"
                  onClick={handleCheck}
                  type="button"
                >
                  Kontrol Et
                </button>
              </div>

              {result && (
                <div
                  className={`p-3 rounded-xl font-label-md text-label-md flex items-center gap-2 ${
                    result.type === 'success'
                      ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                      : result.type === 'error'
                      ? 'bg-error-container text-on-error-container'
                      : 'bg-secondary-fixed text-on-secondary-fixed'
                  }`}
                >
                  {result.type === 'success' && <Icon name="check_circle" size={18} />}
                  <span>{result.message}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
