import { Heart } from "lucide-react";
import type { FC } from "react";
import DOMPurify from "dompurify";

interface Props {
  description: string;
}

const Foot: FC<Props> = ({ description }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <button className="btn flex-1 bg-dark-gray">Sepete Ekle</button>
        <button className="btn px-4">
          <Heart />
        </button>
      </div>

      <button className="btn">Hemen Satın Al</button>

      <h2 className="font-bold text-xl mt-6">Bu ürün hakkında</h2>

      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
    </div>
  );
};

export default Foot;
