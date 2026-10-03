import type { FC } from "react";

interface Props {
  resultCount: number;
  totalCount: number;
}

const Total: FC<Props> = ({ resultCount, totalCount }) => {
  return (
    <div className="mt-8 text-text-secondary text-sm flex justify-between">
      <div>
        <span> toplam </span>
        <b className="text-text-primary">{totalCount}</b>
        <span> not içerisinden </span>
        <b className="text-text-primary">{resultCount}</b>
        <span> not gösterliyor </span>
      </div>
    </div>
  );
};

export default Total;
