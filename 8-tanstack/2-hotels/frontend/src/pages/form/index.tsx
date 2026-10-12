import type { FC } from "react";
import { INITIAL_VALUES, INPUT_FIELDS } from "../../utils/constants";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PLACE_SCHEMA } from "../../utils/schemas";
import { useCreatePlace } from "../../service/hooks";

const FormPage: FC = () => {
  const { isPending, mutate } = useCreatePlace();

  // form gönderilince çalışır
  // otomatik olarak preventDefault yapar
  // values parametresi ile inputlardaki değerlere erişir
  const handleSubmit = (values: any) => {
    mutate(values);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-8 md:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
            Yeni Konaklama Alanı Oluştur
          </h1>

          <p className="text-zinc-600">
            Aşağıdaki formu doldurarak yeni bir konaklama noktası ekleyebilirsiniz
          </p>
        </div>

        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={PLACE_SCHEMA}
          onSubmit={handleSubmit}
        >
          <Form className="grid gap-8">
            {INPUT_FIELDS.map((item, key) => (
              <div key={key} className="field relative">
                <label htmlFor={item.name}>{item.label}</label>

                <Field {...item} id={item.name} className="input" />

                <ErrorMessage
                  name={item.name}
                  component="div"
                  className="text-red-500 text-sm font-medium absolute -bottom-6"
                />
              </div>
            ))}

            <button disabled={isPending} type="submit" className="btn btn-primary mt-4 text-lg">
              Gönder
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormPage;
