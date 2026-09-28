import type { FC } from "react";
import type { DriveType } from "../../utils/types";
import { DRIVE_OPTIONS } from "../../utils/constants";

interface Props {
  trany: string;
  drive: DriveType;
  year: string;
}

const CarInfo: FC<Props> = ({ trany, drive, year }) => {
  // ekrana basılacak bilgiler
  const array = [
    {
      icon: "/steering-wheel.svg",
      text: trany.includes("Auto") ? "Auto" : "Manuel",
    },
    {
      icon: "/tire.svg",
      text: DRIVE_OPTIONS[drive],
    },
    {
      icon: "/calendar.svg",
      text: year,
    },
  ];

  return (
    <div className="flex-between">
      {array.map((item, key) => (
        <div key={key} className="flex-center flex-col gap-1">
          <img src={item.icon} width={25} height={25} alt="icon" />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CarInfo;
