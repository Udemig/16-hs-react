import { FC } from "react";

interface Props {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
}

// Wrapper Component
const Field: FC<Props> = ({ children, htmlFor, label }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-zinc-700 mb-1.5">
        {label}
      </label>

      {children}
    </div>
  );
};

export default Field;
