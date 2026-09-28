import type { FC } from "react";
import type { ICar } from "../../utils/types";
import formatData from "../../utils/formatData";

interface Props {
  car: ICar;
}

const Info: FC<Props> = ({ car }) => {
  return (
    <div className="flex flex-col gap-4">
      {formatData(car).map(([key, value]) => (
        <div key={key} className="car-detail-row">
          <span className="capitalize text-gray-light">{key}</span>
          <span>
            {value === "T" || value === "Y" ? "Var" : value === "N" ? "Yok" : value || "-"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Info;
