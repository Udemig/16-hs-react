import { getOrders } from "@/utils/service";
import { FC } from "react";

const OrderTable: FC = async () => {
  // siparişleri api'dan al
  const orders = await getOrders();

  // duruma bağlı renk döndüren fonksiyon
  const getColor = (status: string): string => {
    switch (status) {
      case "Teslim Edildi":
        return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
      case "Kargoya Verildi":
        return "bg-blue-50 text-blue-700 ring-blue-600/20";
      case "Hazırlanıyor":
        return "bg-amber-50 text-amber-700 ring-amber-600/20";
      default:
        return "bg-gray-50 text-gray-700 ring-gray-600/20";
    }
  };

  return (
    <div className="max-sm:w-[80vw] overflow-x-auto card mt-6">
      <table className="w-full">
        <thead className="border-b border-zinc-200 bg-zinc-50">
          <tr>
            <th className="text-left pl-5">#</th>
            <th className="text-left">Sipariş Tarihi</th>
            <th>Ürün Sayısı</th>
            <th>Toplam Fiyat</th>
            <th>Adres</th>
            <th>Durum</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-zinc-50/70 transition-colors">
              <td className="text-left pl-5 font-medium text-zinc-500">#{order.id}</td>

              <td className="text-left">
                {new Date(order.order_date).toLocaleDateString("tr", {
                  day: "2-digit",
                  month: "long",
                  year: "2-digit",
                })}
              </td>

              <td>{order.items.reduce((acc, i) => acc + i.quantity, 0)}</td>

              <td className="font-medium tabular-nums">{order.total_price}₺</td>

              <td>{order.shipping_address.city}</td>

              <td>
                <div
                  className={`${getColor(order.status)} inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium ring-1 ring-inset text-nowrap min-w-28 justify-center`}
                >
                  <span className="size-1.5 rounded-full bg-current" />
                  <span>{order.status}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
