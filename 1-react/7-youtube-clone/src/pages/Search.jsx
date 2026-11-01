import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import AsyncContent from "../components/async";
import Spinner from "../components/loader/Spinner";
import ShortsListing from "../components/shorts-listing";
import QueryListing from "../components/query-listing";
import Card from "../components/card";
import isVideo from "../utils/isVideo";

// sonuç listesinde özel bileşenle gösterilen öğeler
const listings = { shorts_listing: ShortsListing, query_listing: QueryListing };

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(null);

  // url'den aratılan kelimeye eriş
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  // bileşen ekrana basılınca api'dan aratılan kelimeye uygun videoları al
  useEffect(() => {
    // aranan kelime hızlı değişirse eski isteğin cevabını yok say
    let ignore = false;
    setIsLoading(true);

    api
      .get("/search", { params: { query } })
      .then((res) => {
        if (ignore) return;
        setItems(res.data.data);
        setToken(res.data.continuation);
      })
      .catch((err) => !ignore && setError(err.message))
      .finally(() => !ignore && setIsLoading(false));

    return () => {
      ignore = true;
    };
  }, [query]);

  // videoların devamını almak için api isteği at
  const handleLoadMore = () => {
    setIsMoreLoading(true);

    api
      .get("/search", { params: { query, token } })
      .then((res) => {
        setItems((prev) => [...prev, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsMoreLoading(false));
  };

  // ihtiyacımız olan öğeleri filtrele
  const filtered = items.filter((item) => isVideo(item) || listings[item.type]);

  return (
    <div className="page pb-10">
      <h2 className="text-2xl mb-4">
        <b>{query}</b> için sonuçlar
      </h2>

      <AsyncContent isLoading={isLoading} error={error}>
        <div className="flex flex-col gap-4">
          {filtered.map((item, key) => {
            const Listing = listings[item.type];

            return Listing ? (
              <Listing data={item.data} key={key} />
            ) : (
              <Card video={item} key={key} isRow />
            );
          })}
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
      </AsyncContent>
    </div>
  );
};

export default Search;
