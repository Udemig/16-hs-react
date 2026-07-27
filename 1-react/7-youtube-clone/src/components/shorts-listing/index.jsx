import { SiYoutubeshorts } from "react-icons/si";
import { Link } from "react-router-dom";

const ShortsListing = ({ data }) => {
  return (
    <div className="w-full">
      <div className="text-xl flex items-center gap-2 font-bold mb-2">
        <SiYoutubeshorts className="text-red-500" />
        <h1>Shorts</h1>
      </div>

      <div className="flex gap-4 pb-4 overflow-x-auto">
        {data.map((short, key) => (
          <Link key={key} to={`/watch?v=${short.videoId}`} className="group">
            <div className="w-48 h-80 relative rounded-lg overflow-hidden">
              <img
                src={short.thumbnail[0].url}
                className="size-full object-cover rounded-lg group-hover:scale-105 transition"
              />

              <div className="absolute bottom-0 right-0 left-0 p-4 bg-linear-to-t from-black/80">
                <h3 className="line-clamp-2">{short.title}</h3>
                <h3 className="text-gray-200 text-xs">{short.viewCountText}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShortsListing;
