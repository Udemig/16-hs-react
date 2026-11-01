import { categories, inputs } from "@/utils/constants";
import { FC } from "react";
import Field from "./Field";
import ImagePreview from "./ImagePreview";
import Link from "next/link";
import SubmitButton from "./SubmitButton";
import { handleProductForm } from "@/utils/action";
import { Product } from "@/types";

interface Props {
  product?: Product;
}

const ProductForm: FC<Props> = ({ product }) => {
  return (
    <form action={handleProductForm} className="grid md:grid-cols-2 gap-6">
      {/* düzenleme modu için gizli id inputu */}
      {product && <input type="text" readOnly name="id" value={product.id} hidden />}

      {/* Sol */}
      <div className="space-y-6">
        {inputs.map((input, key) => (
          <Field key={key} htmlFor={input.name} label={input.label}>
            <input
              type={input.type}
              name={input.name}
              step={input.step}
              max={input.max}
              min={input.min}
              id={input.name}
              defaultValue={product?.[input.name as keyof Product]}
              className="input"
              required
            />
          </Field>
        ))}

        {/* Kategori */}
        <Field htmlFor="category" label="Kategori">
          <select
            name="category"
            id="category"
            required
            className="input"
            defaultValue={product?.category}
          >
            {categories.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Sağ */}
      <div className="space-y-6">
        <ImagePreview defaultUrl={product?.image_url} />

        <Field htmlFor="description" label="Açıklama">
          <textarea
            name="description"
            id="description"
            className="input sm:text-sm min-h-55"
            defaultValue={product?.description}
          ></textarea>
        </Field>
      </div>

      <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-zinc-100">
        <Link
          href="/products"
          className="px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-md transition"
        >
          İptal
        </Link>

        <SubmitButton />
      </div>
    </form>
  );
};

export default ProductForm;
