import { useEffect, useRef, useState, type FC } from "react";
import { fetchCars } from "../../utils/service";
import type { ICar } from "../../utils/types";
import Loader from "../loader";
import Error from "../error";
import Container from "../container";
import Card from "../card";
import Button from "../button";
import { useSearchParams } from "react-router-dom";
import Pagination from "rc-pagination";

const List: FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  // urldeki parametrelere eriş
  const make: string = searchParams.get("make") || "";
  const model: string = searchParams.get("model") || "";
  const page: string = searchParams.get("page") || "1";
  const limit: number = 12;

  useEffect(() => {
    setLoading(true);

    fetchCars(page, limit, make, model)
      .then((data) => {
        setCars(data.results);
        setTotalCount(data.total_count);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page, make, model]);

  if (loading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error message={error} />
      </Container>
    );

  return (
    <div ref={containerRef} className="car-list">
      {totalCount > 0 && <p className="text-gray-light mb-4">{totalCount} araç bulundu</p>}

      <div className="home-cars-wrapper">
        {!cars || cars.length === 0 ? (
          <Container>
            <p>Aradığınız araç bulunamadı</p>
            <Button text="Filtreleri Temizle" fn={() => setSearchParams({})} />
          </Container>
        ) : (
          cars.map((car) => <Card key={car.id} car={car} />)
        )}
      </div>

      {totalCount > 0 && (
        <Pagination
          total={totalCount}
          pageSize={limit}
          className="pagination"
          prevIcon={<span>{"<"}</span>}
          nextIcon={<span>{">"}</span>}
          jumpPrevIcon={<span>{"..."}</span>}
          jumpNextIcon={<span>{"..."}</span>}
          onChange={(current) => {
            // yeni sayfayı parametre olarak ekle
            searchParams.set("page", String(current));
            setSearchParams(searchParams);

            // kullanıyı listenin başına kaydır
            containerRef.current?.scrollIntoView();
          }}
          current={Number(page)}
        />
      )}
    </div>
  );
};

export default List;
