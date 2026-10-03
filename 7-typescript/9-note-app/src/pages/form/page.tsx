import { useState, type FC, type SubmitEvent } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { MDE_OPTIONS, SELECT_STYLES } from "../../utils/constants";
import ReactSelect from "react-select/creatable";
import { Link, useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react";
import type { NoteValues } from "../../utils/types";
import { addNote } from "../../redux/noteSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux";

const Form: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // form gönderilince
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // form verisini nesne formatına getir
    const values: NoteValues = {
      title,
      content,
      tags: selectedTags,
    };

    // yeni not oluşturulucağını slice'a haber ver
    dispatch(addNote(values));

    // ansayfaya yönlendirme ve bildirim
    navigate("/");
    toast.success("Not oluşturuldu");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Not Oluştur</h1>
        <p className="text-text-secondary">Fikirlerinizi ve notlarınızı kaydedin</p>
      </div>

      <form onSubmit={handleSubmit} className="card p-6 sm:p-8 animate-slide-up mt-6">
        {/* Başlık */}
        <div>
          <label htmlFor="title" className="label">
            Başlık
          </label>
          <input
            type="text"
            id="title"
            placeholder="Not başlığı giriniz"
            className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-text-primary focus:ring-2 focus:ring-primary/30 transition placeholder:text-text-secondary"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* İçerik */}
        <div className="my-6">
          <label htmlFor="content" className="label">
            İçerik
          </label>

          <SimpleMDE id="content" options={MDE_OPTIONS} className="w-full markdown-editor bg-transparent" value={content} onChange={(value) => setContent(value)} />
        </div>

        {/* Etiketler */}
        <div>
          <label htmlFor="tags" className="label">
            Etiketler
          </label>

          <ReactSelect
            isMulti
            required
            placeholder="Etiket Seçiniz"
            styles={SELECT_STYLES}
            onChange={(tags) => setSelectedTags(tags.map((t) => t.value))}
            value={selectedTags.map((t) => ({ label: t, value: t }))}
          />
        </div>

        {/* Butonlar */}
        <div className="flex flex-col md:flex-row gap-3 pt-4 border-t border-border">
          <Link to="/" className="form-button">
            <X className="size-4 mr-1.5" />
            İptal
          </Link>

          <button type="submit" className="form-button bg-primary hover:bg-primary-hover">
            <Check className="size-4 mr.15" />
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
