import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

// Her dil için ayrı metin tutulur; varsayılan dil (tr) her zaman dolu olmalıdır
export type LocalizedText = { tr: string } & Partial<Record<Locale, string>>;

// Eski kayıtlar tek dilli düz metin olabilir; bu yüzden string de kabul edilir
export const localize = (value: LocalizedText | string | undefined, locale: Locale): string => {
  if (!value) return "";
  if (typeof value === "string") return value;

  return value[locale] || value[routing.defaultLocale] || "";
};

export const resolveLocale = (value: unknown): Locale =>
  hasLocale(routing.locales, value) ? value : routing.defaultLocale;
