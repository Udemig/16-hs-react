import type { FC } from "react";
import Searchbar from "./searchbar";
import Year from "./year";

const Filter: FC = () => {
  return (
    <div id="catalog" className="catalog-section">
      <div className="home-text-container">
        <h1 className="text-5xl font-bold text-gradient">Araba Kataloğu</h1>
        <p className="text-xl text-gray-light">Beğenebileceğin araçları keşfet</p>
      </div>

      <div className="home-filters">
        <Searchbar />

        <div className="home-filter-container">
          <Year />
        </div>
      </div>
    </div>
  );
};

export default Filter;
