import { Search } from "lucide-react";
import type React from "react";
import type { FC } from "react";
import ReactSelect from "react-select";
import { SELECT_STYLES } from "../../utils/constants";
import { useAppSelector } from "../../redux";

interface Props {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter: FC<Props> = ({ setTitle, setTags }) => {
  // notlara eriş
  const { notes } = useAppSelector((store) => store);

  // etiketlerden oluşan bir dizi oluştur
  const noteTags = [...new Set(notes.map((note) => note.tags).flat())];

  return (
    <div className="mb-8 p-5 card">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Title Input */}
        <div className="flex-1 w-full md:w-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="size-5" />
            </div>

            <input
              type="text"
              placeholder="Notları ara.."
              className="pl-10 pr-4 py-2.5 w-full border border-border rounded-md text-amber-50 placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        {/* Etiket Select */}
        <div className="w-full md:w-1/2">
          <ReactSelect
            isMulti
            styles={SELECT_STYLES}
            placeholder="Etiket Seçiniz"
            options={noteTags.map((t) => ({label:t,value:t}))}
            onChange={(tags) => setTags(tags.map((t) => t.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
