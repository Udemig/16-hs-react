"use client";

import { type Locale, useLocale, useTranslations } from "next-intl";
import type { ChangeEvent, FC } from "react";
import { useTransition } from "react";
import { TbWorld } from "react-icons/tb";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LocaleSwitcher: FC = () => {
  const locale = useLocale(); // mevcut dil
  const t = useTranslations("LocaleSwitcher"); // çevirileri yükle
  const pathname = usePathname(); // bulunduğumuz adresi al
  const router = useRouter(); // yönlendirme hooku
  const [isPending, startTransition] = useTransition(); // ağır state güncellemesini yöneten

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // yeni seçilen dili al
    const selectedLang = event.target.value as Locale;

    // aktif yolu koruyarak dil parametresini değiştir
    startTransition(() => {
      router.replace(pathname, { locale: selectedLang });
    });
  };

  return (
    <div className="header-link cursor-pointer">
      <TbWorld className="text-2xl" />

      <select
        value={locale}
        onChange={handleChange}
        disabled={isPending}
        className="bg-transparent outline-none cursor-pointer"
      >
        {routing.locales.map((lang) => (
          <option key={lang} value={lang}>
            {t(lang)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSwitcher;
