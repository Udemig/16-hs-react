import { CardItem } from "@/types";
import { FC } from "react";
import icon1 from "@/assets/images/icon-1.webp";
import icon2 from "@/assets/images/icon-2.webp";
import icon3 from "@/assets/images/icon-3.webp";
import icon4 from "@/assets/images/icon-4.png";
import Card from "@/components/home/Card";
import { getOrders, getProducts, getUsers } from "@/utils/service";
import SalesChart from "@/components/home/SalesChart";
import CategoryChart from "@/components/home/CategoryChart";

const Home: FC = async () => {
  // 3 isteği aynı anda at, hepsinin bitmesibi beklle (sırasıyla atmaktan daha hızlı)
  const [orders, products, users] = await Promise.all([getOrders(), getProducts(), getUsers()]);

  // toplam satış tutarı
  const totalSales = orders.reduce((acc, order) => acc + order.total_price, 0);

  // ekrana basılacak kartlar
  const cards: CardItem[] = [
    { icon: icon1, label: "Toplam Kullanıcı", value: users.length },
    { icon: icon2, label: "Toplam Sipariş", value: orders.length },
    {
      icon: icon3,
      label: "Toplam Satış",
      value: totalSales.toLocaleString("tr-TR", { style: "currency", currency: "TRY" }),
    },
    { icon: icon4, label: "Toplam Ürün", value: products.length },
  ];

  return (
    <div className="page">
      <div className="mb-6">
        <h1 className="title">Admin Paneli</h1>
        <p className="text-zinc-500 mt-1">Genel bakış ve performans göstergeleri</p>
      </div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {cards.map((item) => (
          <Card key={item.label} item={item} />
        ))}
      </section>

      <section className="grid lg:grid-cols-14 gap-5">
        <div className="lg:col-span-9 size-full overflow-hidden">
          <SalesChart />
        </div>
        <div className="lg:col-span-5 size-full overflow-hidden">
          <CategoryChart />
        </div>
      </section>
    </div>
  );
};

export default Home;
