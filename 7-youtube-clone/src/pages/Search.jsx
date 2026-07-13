import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import Spinner from "../components/loader/Spinner";
import Error from "../components/error";
import ShortsListing from "../components/shorts-listing";
import QueryListing from "../components/query-listing";
import Card from "../components/card";

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [token, setToken] = useState([]);

  // url'den aratılan kelimeye eriş
  const [seachParams, setSearchParams] = useSearchParams();
  const query = seachParams.get("search_query");

  // bileşen ekrana basılınca api'dan aratılan kelimeye uygun videoları al
  useEffect(() => {
    setIsLoading(true);

    const params = { query, geo: "TR", lang: "tr" };

    api
      .get("/search", { params })
      .then((res) => {
        setData(res.data.data);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [query]);

  // videoların devamını almak için api isteği atan fonksiyon
  const handleLoadMore = () => {
    setIsMoreLoading(true);

    const params = { query, token, geo: "TR", lang: "tr" };

    api
      .get("/search", { params })
      .then((res) => {
        setData([...data, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsMoreLoading(false));
  };

  // data dizisindeki ihtiyacımız olan verileri filtrele
  const filtredArr = data.filter(
    (i) =>
      i.type === "video" ||
      i.type === "shorts" ||
      i.type === "shorts_listing" ||
      i.type === "query_listing",
  );

  return (
    <div className="page pb-10">
      <h2 className="text-2xl mb-4">
        <b>{query}</b> için sonuçlar
      </h2>

      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {filtredArr.map((item, key) =>
              item.type === "shorts_listing" ? (
                <ShortsListing data={item.data} key={key} />
              ) : item.type === "query_listing" ? (
                <QueryListing data={item.data} key={key} />
              ) : (
                <Card video={item} key={key} isRow />
              ),
            )}
          </div>

          {isMoreLoading && <Spinner />}

          {token && !isMoreLoading && (
            <div className="flex justify-center">
              <button
                onClick={handleLoadMore}
                className="my-10 bg-zinc-800 py-2 px-5 rounded-md hover:bg-zinc-700"
              >
                Daha Fazla
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
