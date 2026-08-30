import { IoImageOutline as Image } from "react-icons/io5";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import { FaRegSmile as Emoji } from "react-icons/fa";

const FormActions = () => {
  return (
    <div className="flex justify-between">
      <div className="text-blue text-xl flex gap-4">
        <button type="button" className="form-icon">
          <Image />
        </button>
        <button type="button" className="form-icon">
          <Gif />
        </button>
        <button type="button" className="form-icon">
          <Emoji />
        </button>
      </div>

      <button type="submit" className="submit-button">
        Gönder
      </button>
    </div>
  );
};

export default FormActions;
