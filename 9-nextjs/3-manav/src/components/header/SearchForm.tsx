import Form from "next/form";
import { getTranslations } from "next-intl/server";
import type { FC } from "react";
import { TbSearch } from "react-icons/tb";

const SearchForm: FC = async () => {
  const t = await getTranslations("Header");

  return (
    <Form
      action={"/"}
      className="max-md:order-last w-full flex gap-3 py-2 px-4 border border-zinc-300 sm:mx-5 md:w-1/3  rounded-full focus-within:border-zinc-800 transition"
    >
      <button type="submit" className="text-xl text-zinc-700 cursor-point">
        <TbSearch />
      </button>

      <input
        type="search"
        name="query"
        className="outline-none text-zinc-800 w-full"
        placeholder={t("search")}
      />
    </Form>
  );
};

export default SearchForm;
