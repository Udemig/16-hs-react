import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import formatNumber from "../../utils/formatNumber";

const ChannelInfo = ({ video }) => {
  return (
    <div className="flex justify-between sm:items-center max-sm:flex-col max-sm:gap-3">
      {/* Kanal */}
      <div className="flex items-center gap-5">
        <div className="flex gap-2 sm:gap-4 items-center">
          <img
            src={video?.channelThumbnail?.[0]?.url}
            alt={video?.channelTitle}
            className="rounded-full size-10 md:size-14"
          />

          <div>
            <h4 className="font-bold">{video?.channelTitle}</h4>
            <p className="text-zinc-400">{video?.subscriberCountText}</p>
          </div>

          <button className="bg-white px-4 py-1 text-black rounded-full whitespace-nowrap">
            Abone Ol
          </button>
        </div>
      </div>

      {/* Like */}
      <div className="flex items-center bg-dark rounded-full max-sm:w-fit cursor-pointer">
        <button className="py-2 px-3 sm:px-4 flex items-center gap-2 font-bold border-r border-zinc-600">
          <AiOutlineLike />
          <span>{formatNumber(video?.likeCount)}</span>
        </button>
        <button className="py-2 px-3 sm:px-4">
          <AiOutlineDislike />
        </button>
      </div>
    </div>
  );
};

export default ChannelInfo;
