"use client";

import { FC } from "react";

const SubmitButton: FC = () => {
  return (
    <button
      type="submit"
      className="px-6 py-2.5 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition"
    >
      Kaydet
    </button>
  );
};

export default SubmitButton;
