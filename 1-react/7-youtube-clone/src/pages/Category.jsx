import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import AsyncContent from "../components/async";
import CategoryLoader from "../components/loader/CategoryLoader";
import ShortsListing from "../components/shorts-listing";
import Card from "../components/card";
import isVideo from "../utils/isVideo";
import { videoGridClass } from "../utils/constants";

const Category = () => {
  const { category_name } = useParams();

  // "trendler" için trend listesi, diğer kategoriler için arama yapılır
  const isTrending = category_name === "trendler";
  const { isLoading, error, data } = useFetch(
    isTrending ? "/trending" : "/search",
    isTrending ? undefined : { query: category_name },
  );

  // api'dan gelen veriyi kategorize et
  const items = data?.data ?? [];
  const videos = items.filter(isVideo);
  const [firstShorts, secondShorts] = items.filter((item) => item.type === "shorts_listing");

  return (
    <AsyncContent isLoading={isLoading} error={error} fallback={<CategoryLoader />}>
      <div className="page">
        <div className="space-y-8">
          {firstShorts && <ShortsListing data={firstShorts.data} />}

          <div className={videoGridClass}>
            {videos.map((video) => (
              <Card video={video} key={video.videoId} />
            ))}
          </div>

          {secondShorts && <ShortsListing data={secondShorts.data} />}
        </div>
      </div>
    </AsyncContent>
  );
};

export default Category;
