import { getTranslations } from "next-intl/server";
import type { FC } from "react";

const Footer: FC = async () => {
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-green-900 text-white p-5 text-center">
      {t("rights", { year: new Date().getFullYear() })}
    </footer>
  );
};

export default Footer;
