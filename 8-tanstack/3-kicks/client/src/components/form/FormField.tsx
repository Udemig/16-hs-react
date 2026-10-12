import type { FC } from "react";
import { ErrorMessage, Field } from "formik";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  options?: string[];
  info?: string;
}

const FormField: FC<Props> = ({
  label,
  name,
  placeholder,
  type = "text",
  required = true,
  options,
  info,
}) => {
  return (
    <div className="relative">
      <div>
        {type === "radio" ? (
          <div className="flex gap-4">
            {options?.map((option) => (
              <div className="flex gap-4">
                <Field type="radio" id={option} name={name} value={option} />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        ) : type === "checkbox" ? (
          <div className="flex">
            <Field
              id={name}
              name={name}
              type={type}
              required={required}
              className={`size-5 me-2 shrink-0`}
            />

            <label className="font-semibold">{label}</label>
          </div>
        ) : (
          <div>
            <Field
              id={name}
              name={name}
              type={type}
              required={required}
              placeholder={placeholder}
              className={`rounded-lg py-2.5 px-4 border border-dark-gray w-full placeholder:text-gray-400`}
            />
            {info && <span className="font-rubik text-xs text-zinc-600 leading-0">{info}</span>}
          </div>
        )}

        <ErrorMessage
          name={name}
          component="div"
          className="absolute -bottom-5 left-0 text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default FormField;
