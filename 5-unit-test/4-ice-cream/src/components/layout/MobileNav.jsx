import { Icon } from '../ui/Icon';

const DEFAULT_ITEMS = [
  { label: 'Ana Sayfa', id: 'anasayfa' },
  { label: 'Dondurmalar', id: 'dondurmalar' },
  { label: 'Hakkımızda', id: 'hakkimizda' },
  { label: 'İletişim', id: 'iletisim' },
];

export const MobileNav = ({
  isOpen,
  onClose,
  activeNav,
  onNavClick,
  navItems = DEFAULT_ITEMS,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-primary/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 left-0 z-50 w-[300px] h-full bg-surface-container-lowest shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-label="Mobil Menü"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-surface-container-high/40">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Gelato & Co." className="h-8 w-auto" />
            <span className="text-primary font-bold text-lg leading-tight">Gelato &amp; Co.</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Menüyü kapat"
            type="button"
          >
            <Icon name="close" size={24} />
          </button>
        </div>

        <nav className="p-6 flex flex-col gap-2" aria-label="Mobil Gezinme">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onNavClick(item.id, item.label);
                onClose();
              }}
              className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                activeNav === item.label
                  ? 'bg-surface-container text-primary font-bold shadow-sm'
                  : 'text-on-surface hover:bg-surface-container-low hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};
