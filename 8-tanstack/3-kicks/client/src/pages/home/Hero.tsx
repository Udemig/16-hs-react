import type { FC } from "react";
import heroBg from "../../assets/images/hero-bg.png";
import heroSmallFirst from "../../assets/images/hero-small-1.png";
import heroSmallSecond from "../../assets/images/hero-small-2.png";

const Hero: FC = () => {
  return (
    <div className="relative mt-8 aspect-2/1 lg:aspect-[2.1/1] rounded-3xl overflow-hidden font-rubik text-white">
      <img src={heroBg} alt="hero" className="absolute inset-0 size-full object-cover" />

      <span className="absolute top-8 left-0 max-sm:hidden bg-dark-gray text-gray text-sm font-semibold uppercase px-3 py-4 rounded-r-lg [writing-mode:sideways-lr]">
        Nike yılın ürünü
      </span>

      <div className="absolute right-4 bottom-4 w-1/6 flex flex-col gap-2">
        <img src={heroSmallFirst} className="rounded-xl" />
        <img src={heroSmallSecond} className="rounded-xl" />
      </div>

      <div className="absolute left-5 bottom-5 sm:left-10 sm:bottom-10 max-w-3/5">
        <h1 className="font-semibold text-3xl sm:text-5xl lg:text-7xl">NIKE AIR MAX</h1>
        <p className="text-sm sm:text-base mt-1 sm:mt-2">
          Nike herkesin komforu için yeni Air Max'i tanıtıyor
        </p>
        <button className="btn mt-3 sm:mt-6 uppercase text-xs sm:text-sm">Satın AL</button>
      </div>
    </div>
  );
};

export default Hero;
