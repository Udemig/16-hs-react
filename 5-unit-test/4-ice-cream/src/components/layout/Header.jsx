import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { Icon } from "../ui/Icon";
import { MobileNav } from "./MobileNav";

const NAV_ITEMS = [
  { label: "Ana Sayfa", id: "anasayfa" },
  { label: "Dondurmalar", id: "dondurmalar" },
  { label: "Hakkımızda", id: "hakkimizda" },
  { label: "İletişim", id: "iletisim" },
];

export const Header = () => {
  const [activeNav, setActiveNav] = useState("Ana Sayfa");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const { itemCount, dispatch } = useCart();
  const prevCountRef = useRef(itemCount);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (itemCount > prevCountRef.current) {
      setIsBouncing(true);
      const timer = setTimeout(() => setIsBouncing(false), 300);
      return () => clearTimeout(timer);
    }
    prevCountRef.current = itemCount;
  }, [itemCount]);

  // Handle hash scrolling when navigating back to home page with hash
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const targetId = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        if (targetId === "anasayfa") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  // Active navigation item (derived when not on homepage)
  const currentNav =
    location.pathname !== "/"
      ? location.pathname.startsWith("/urun")
        ? "Dondurmalar"
        : ""
      : activeNav;

  // Scroll spy only active on homepage
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveNav(item.label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id, label) => {
    setActiveNav(label);
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    if (id === "anasayfa") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const el = document.getElementById("anasayfa");
      if (el) el.focus({ preventScroll: true });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      element.focus({ preventScroll: true });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(74,46,43,0.05)]">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavClick("anasayfa", "Ana Sayfa")}
            className="flex items-center gap-3 text-left group transition-transform hover:scale-[1.02]"
            aria-label="Ana Sayfaya dön"
          >
            <img src="/images/logo.png" alt="Gelato & Co." className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="text-primary font-bold leading-tight">Gelato &amp; Co.</span>
              <span className="text-on-surface-variant text-xs italic">Artigianale</span>
            </div>
          </button>

          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant text-label-md font-label-md">
            <Icon name="two_wheeler" size={18} />
            <span>Kadıköy &amp; Moda • 25-35 dk</span>
          </div>

          <nav
            className="hidden md:flex items-center gap-1 p-1 rounded-full bg-surface-container-low/70"
            aria-label="Ana Menü"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id, item.label)}
                className={`px-4 py-1.5 text-sm transition-colors rounded-full ${
                  currentNav === item.label
                    ? "bg-surface-container text-primary font-bold shadow-sm"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm active:scale-95"
              aria-label="Sepeti aç"
            >
              <Icon name="shopping_bag" size={20} />
              <span className="hidden sm:inline text-sm font-medium">Sepetim</span>
              {itemCount > 0 && (
                <span
                  className={`flex items-center justify-center bg-secondary text-on-secondary rounded-full w-5 h-5 text-xs font-bold transition-transform duration-300 ${
                    isBouncing ? 'scale-125 ring-2 ring-secondary-fixed shadow-md' : 'scale-100'
                  }`}
                >
                  {itemCount}
                </span>
              )}
            </button>

            <button
              type="button"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-primary text-on-primary hover:bg-primary/90 transition-transform hover:scale-105"
              aria-label="Hesabım"
            >
              <Icon name="person" size={20} />
            </button>

            <button
              type="button"
              className="md:hidden flex items-center justify-center text-primary p-1 rounded-lg hover:bg-surface-container"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Mobil menüyü aç"
            >
              <Icon name="menu" size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeNav={currentNav}
        onNavClick={handleNavClick}
        navItems={NAV_ITEMS}
      />
    </>
  );
};
