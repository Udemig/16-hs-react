import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restApi, statsApi } from "../../utils/api";
import Head from "../../components/details/Head";
import Content from "../../components/details/Content";
import ContentLoader from "./../../components/loader/ContentLoader";
import HeadLoader from "../../components/loader/HeadLoader";
import Error from "../../components/error";

const Detail = () => {
  const { country } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);

      // api isteklerini hazırla
      const req1 = restApi.get(`/countries/v5?q=${country}&limit=1`);
      const req2 = statsApi.get(`/reports?q=${country}`);

      // promise.all: birden fazla asenkron süreci parallel olarak başlatmaya yarar
      const [res1, res2] = await Promise.all([req1, req2]);

      // api'dan gelen verilere eriş
      const countryData = res1.data.data.objects[0];
      const covidData = res2.data.data[0];

      // gerekli olan verileri al
      const details = {
        name: countryData?.names?.common,
        continents: countryData?.continents,
        capitals: countryData?.capitals?.[0]?.name,
        flag: {
          alt: countryData?.flag?.description,
          svg: countryData?.flag?.url_svg,
        },
        population: countryData?.population,
        language: countryData?.languages[0]?.name,
        currency: countryData?.currencies[0]?.name,
        fatality_rate: covidData?.fatality_rate,
        confirmed: covidData?.confirmed,
        active: covidData?.active,
        deaths: covidData?.deaths,
      };

      return details;
    };

    fetchDetails()
      .then((details) => setCountryDetails(details))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex-1 min-h-[calc(100vh-76px)] grid place-items-center">
      <div className="bg-white/95 backdrop-blur-md border border-white/30 shadow-lg min-h-[65%] rounded-3xl py-8 px-10 max-w-4xl max-md:w-full md:w-[80%] relative z-10 animate-fade-in">
        {loading ? (
          <>
            <HeadLoader />
            <ContentLoader />
          </>
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <Head details={countryDetails} />
            <Content details={countryDetails} />
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
