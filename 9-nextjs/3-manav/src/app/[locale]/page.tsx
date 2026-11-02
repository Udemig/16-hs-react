import {useTranslations} from 'next-intl';

const Home = () => {
  const t = useTranslations("Header")

  return <div>
    <h1>{t("orders")}</h1>
  </div>;
};

export default Home;
