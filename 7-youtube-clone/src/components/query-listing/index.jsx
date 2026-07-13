import { Link } from "react-router-dom";

const QueryListing = ({ data }) => {
  return (
    <div className="border-y border-zinc-700 pt-5">
      <h3 className="font-semibold text-lg mb-2">İnsanlar bunları da arattı</h3>

      <div className="flex gap-1 w-full overflow-x-auto py-5">
        {data.map((item, key) => (
          <Link
            key={key}
            to={`/results?search_query=${item?.query}`}
            className="border border-zinc-700 rounded-md hover:bg-zinc-800 transition cursor-pointer overflow-hidden min-w-39"
          >
            <img src={item.thumbnail?.[0]?.url} />

            <div className="p-2">
              <p>{item?.query}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QueryListing;
