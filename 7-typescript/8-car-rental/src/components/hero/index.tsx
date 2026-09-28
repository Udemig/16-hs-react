import { useEffect, type FC } from "react";
import Button from "../button";
import { Link } from "react-router-dom";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

const Hero: FC = () => {
  const count = useMotionValue(24500);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 47520, { duration: 1.2 });
    return () => controls.stop();
  }, []);

  return (
    <div className="hero">
      <div className="pt-20 xl:flex-1 max-h-230">
        <div className="mb-4 text-xl flex items-center gap-2">
          <motion.pre
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 26,
              lineHeight: 1,
              color: "#8df0cc",
            }}
          >
            {rounded}
          </motion.pre>
          <span className="mb-1">+ Araba</span>
        </div>

        <h1 className="hero-title">Özgürlüğü Hisset, Yolculuğa Başla</h1>

        <p className="hero-subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç kiralama deneyimini
          Altın Seçenekleri ile taçlandırarak her anını özel kılabilirsin.
        </p>

        <Link to="#catalog">
          <Button text="Arabaları Keşfet" designs="mt-12" />
        </Link>
      </div>

      <div className="flex-center">
        <motion.img
          alt="hero"
          src="/hero.png"
          className="object-contain xl:w-150 xl:h-119.25 drop-shadow-xl"
          initial={{ x: 300, opacity: 0 }} // başlangıç
          animate={{ x: 0, opacity: 1 }} // bitiş
        />
      </div>
    </div>
  );
};

export default Hero;
