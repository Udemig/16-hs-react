import type { FC } from "react";
import Hero from "./Hero";
import Filter from "./Filter";
import List from "./List";

const Home: FC = () => {
  return (
    <div>
      <Hero />

      <div className="grid lg:grid-cols-4 max-lg:mt-10 gap-5">
        <div className="lg:col-span-1">
          <Filter />
        </div>

        <div className="lg:col-span-3">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
