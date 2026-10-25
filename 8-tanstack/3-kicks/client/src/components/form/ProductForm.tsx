import type { FC } from "react";
import type { Product, ProductValues } from "../../types";
import { Form, Formik } from "formik";
import { INPUT_ARRAY } from "../../constants";
import FormField from "./FormField";
import { PRODUCT_SCHEMA } from "../../constants/schemas";

interface Props {
  isPending: boolean;
  mutate: (formData: ProductValues) => void;
  data?: Product;
}

const ProductForm: FC<Props> = ({ isPending, mutate, data }) => {
  const initialValues = {
    name: data?.name || "",
    price: data?.price || 0,
    discount: data?.discount || 0,
    color: data?.color || "",
    size: data?.size || "",
    description: data?.description || "",
    isNew: data?.isNew || false,
    gender: data?.gender || "men",
  } as const;

  return (
    <Formik initialValues={initialValues} validationSchema={PRODUCT_SCHEMA} onSubmit={mutate}>
      <Form className="grid sm:grid-cols-2 gap-x-6 gap-y-8 bg-white p-6 md:p-8 rounded-3xl">
        {INPUT_ARRAY.map((input) => (
          <FormField key={input.name} {...input} />
        ))}

        <button type="submit" disabled={isPending} className="btn sm:col-span-2">
          {isPending ? "Kaydediliyor..." : "Kaydet"}
        </button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
