import { getProducts } from "@/utils/service";
import { FC } from "react";
import DoughnutGraphic from "../graphics/DoughnutGraphic";
import { ChartData } from "@/types";

const CategoryChart: FC = async () => {
  // api'dan sipariş verisini al
  const products = await getProducts();

  // kategori başına ürün sayısı
  const countObj: Record<string, number> = {};

  products.forEach((product) => {
    countObj[product.category] = (countObj[product.category] || 0) + 1;
  });

  // grafik için gerekli veri
  const data: ChartData = {
    labels: Object.keys(countObj),
    datasets: [
      {
        label: "Ürün Sayısı",
        data: Object.values(countObj),
        backgroundColor: [
          "#6366f1", // İndigo
          "#8b5cf6", // Mor
          "#ec4899", // Pembe
          "#14b8a6", // Teal
          "#f59e0b", // Amber
          "#06b6d4", // Cyan
        ],
        borderColor: "white",
        borderWidth: 1,
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div className="card p-5 size-full lg:pb-16">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="subtitle">Kategori Dağılımı</h2>
          <p className="text-sm text-zinc-500 mt-0.5">Kategori başına ürün sayısı</p>
        </div>
      </div>

      <div className="size-full pt-5">
        <DoughnutGraphic data={data} />
      </div>
    </div>
  );
};

export default CategoryChart;
