import { useState, type FC } from "react";
import type { ICar } from "../../utils/types";
import CarInfo from "./CarInfo";
import Button from "../button";
import getPrice from "../../utils/getPrice";
import getImage from "../../utils/getImage";
import Modal from "../modal";

interface Props {
  car: ICar;
}

const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="car-card group">
        {/* Marka */}
        <h2 className="car-card-content-title">
          {car.make} {car.model}
        </h2>

        {/* Fiyat */}
        <div className="flex mt-6 text-[19px]">
          <span className="font-semibold">₺</span>
          <span className="text-[32px]">{getPrice(car).toLocaleString("tr-TR")}</span>
          <span className="font-semibold self-end">/gün</span>
        </div>

        {/* Resim */}
        <img
          src={getImage(car, "23", true)}
          alt="car"
          loading="lazy"
          className="size-full object-contain min-h-50"
        />

        {/* Detaylar */}
        <div className="w-full">
          <div className="md:group-hover:hidden">
            <CarInfo trany={car.trany} drive={car.drive} year={car.year} />
          </div>

          <div className="max-md:mt-4 md:hidden md:group-hover:block">
            <Button text="Daha Fazla" designs="w-full mt-[0.5px]" fn={() => setIsOpen(true)} />
          </div>
        </div>
      </div>

      <Modal car={car} isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default Card;
