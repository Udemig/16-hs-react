import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import CategoryLoader from "../components/loader/CategoryLoader";
import Error from "../components/error";
import ShortsListing from "../components/shorts-listing";
import Card from "../components/card";

const Category = () => {
  const { category_name } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // sayfa ilk yüklendiğinde ve kategori her değiştiğinde api isteği at
  useEffect(() => {
    setIsLoading(true);

    // istek atılacak api url'i
    const url = category_name === "trendler" ? `/trending` : `/search?query=${category_name}`;

    // isteğin yanında gönderilecek parametreleri belirle
    const params = {
      geo: "TR",
      lang: "tr",
    };

    // api isteğini at
    api
      .get(url, { params })
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [category_name]);

  // api'dan gelen veriyi kategorize et
  const videos = data.filter((item) => item.type === "video" || item.type === "shorts");
  const shortsListing = data.filter((item) => item.type === "shorts_listing");

  if (isLoading) return <CategoryLoader />;

  if (error) return <Error message={error} />;

  return (
    <div className="page">
      <div className="space-y-8">
        {shortsListing?.[0] && <ShortsListing data={shortsListing[0].data} />}

        <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {videos.map((video, key) => (
            <Card video={video} key={key} />
          ))}
        </div>

        {shortsListing?.[1] && <ShortsListing data={shortsListing[1].data} />}
      </div>
    </div>
  );
};

export default Category;
