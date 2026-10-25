import type { FC } from "react";
import Hero from "./Hero";
import List from "./List";

const Home: FC = () => {
  return (
    <div>
      <h1 className="font-rubik font-bold uppercase text-center whitespace-nowrap leading-[0.8] text-[clamp(40px,15vw,215px)]">
        Do it <span className="text-blue">right</span>
      </h1>

      <Hero />

      <div className="flex justify-between items-end gap-4 mt-12">
        <h2 className="font-rubik font-semibold uppercase text-2xl md:text-4xl leading-tight">
          Yeni sezon ürünleri <br /> sakın kaçırma
        </h2>
        <button className="btn">Alışverişe Başla</button>
      </div>

      <List />
    </div>
  );
};

export default Home;
