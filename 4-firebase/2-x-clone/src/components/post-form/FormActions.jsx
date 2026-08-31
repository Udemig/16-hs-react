import { IoImageOutline as Image } from "react-icons/io5";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import { FaRegSmile as Emoji } from "react-icons/fa";
import Loader from "../loader/";

const FormActions = ({ handleMediaChange, isDisabled, isLoading }) => {
  return (
    <div className="flex justify-between">
      <div className="text-blue text-xl flex gap-4">
        <label htmlFor="file" className="form-icon">
          <Image />

          <input
            id="file"
            type="file"
            name="media"
            className="hidden"
            onChange={handleMediaChange}
          />
        </label>

        <label className="form-icon">
          <Gif />
        </label>

        <label className="form-icon">
          <Emoji />
        </label>
      </div>

      <button disabled={isDisabled || isLoading} type="submit" className="submit-button">
        {isLoading ? <Loader /> : "Gönder"}
      </button>
    </div>
  );
};

export default FormActions;
