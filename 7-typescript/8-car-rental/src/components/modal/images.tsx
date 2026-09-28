import type { FC } from "react";
import type { ICar } from "../../utils/types";
import getImage from "../../utils/getImage";

interface Props {
  car: ICar;
}

const Images: FC<Props> = ({ car }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full">
        <img src={getImage(car, "23", true)} className="size-full rounnded-md object-cover" />
      </div>

      <div className="flex gap-3 -my-6 mb-3">
        <div className="car-detail-thumb">
          <img src={getImage(car, "29", true)} className="size-full object-contain mx-auto" />
        </div>
        <div className="car-detail-thumb">
          <img src={getImage(car, "05", true)} className="size-full object-contain mx-auto" />
        </div>
        <div className="car-detail-thumb">
          <img src={getImage(car, "13", true)} className="size-full object-contain mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Images;
