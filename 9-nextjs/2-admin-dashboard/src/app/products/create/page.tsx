import ProductForm from "@/components/form/ProductForm";
import { FC } from "react";

const CreatePage: FC = () => {
  return (
    <div className="page max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="title">Ürün Ekle</h1>
        <p className="text-zinc-500 mt-1">Yeni bir ürün oluşturun ve kataloğunuza ekleyin</p>
      </div>

      <div className="card p-6 md:p-8">
        <ProductForm />
      </div>
    </div>
  );
};

export default CreatePage;
