import { useState } from "react";
import formatNumber from "../../utils/formatNumber";
import { Link } from "react-router-dom";

// video kapak resmi ve süre rozeti
const Thumbnail = ({ video, isHover, className = "" }) => {
  const thumbnail = video.thumbnail?.at(-1)?.url;
  const richThumbnail = video.richThumbnail?.at(-1)?.url;

  return (
    <div
      className={`relative rounded-xl overflow-hidden w-full aspect-video bg-zinc-900 ${className}`}
    >
      <img
        src={isHover && richThumbnail ? richThumbnail : thumbnail}
        className="size-full object-contain group-hover:scale-105 transition"
      />

      <span
        className={`absolute bottom-2 right-2 text-xs px-2 py-1 rounded ${video.isLive ? "bg-red-500" : "bg-black/80"}`}
      >
        {video.lengthText}
      </span>
    </div>
  );
};

// "X görüntülenme * tarih" satırı
const ViewInfo = ({ video }) => (
  <p className="flex items-center gap-1 text-sm">
    <span className="whitespace-nowrap">{formatNumber(video.viewCount)} görüntülenme</span>{" "}
    * <span className="line-clamp-1"> {video.publishedTimeText}</span>
  </p>
);

const Card = ({ video, isRow }) => {
  // mouse card'ın üzerindemi state'i
  const [isHover, setIsHover] = useState(false);

  const channelAvatar = video.channelThumbnail?.[0]?.url || "/avatar.jpg";
  const hoverProps = {
    onMouseEnter: () => setIsHover(true),
    onMouseLeave: () => setIsHover(false),
  };

  // yatay card
  if (isRow)
    return (
      <Link
        className="group flex gap-2 p-2 hover:bg-zinc-900 transition rounded-lg"
        to={`/watch?v=${video.videoId}`}
        {...hoverProps}
      >
        <Thumbnail video={video} isHover={isHover} className="flex-1 max-w-125 min-w-47.5" />

        <div className="flex-1 text-zinc-400 space-y-2">
          <h3 className="text-white line-clamp-2 leading-tight font-semibold">{video.title}</h3>

          <ViewInfo video={video} />

          <div className="flex items-center gap-2">
            <img src={channelAvatar} alt={video.channelTitle} className="size-6 rounded-full" />
            <p className="my-1">{video.channelTitle}</p>
          </div>

          <p className="text-xs md:text-sm line-clamp-2 text-zinc-400">{video.description}</p>
        </div>
      </Link>
    );

  // dikey card
  return (
    <Link className="group" to={`/watch?v=${video.videoId}`} {...hoverProps}>
      <Thumbnail video={video} isHover={isHover} className="mb-3" />

      <div className="flex gap-3">
        <img src={channelAvatar} alt={video.channelTitle} className="size-14 rounded-full" />

        <div className="flex-1 text-zinc-400">
          <h3 className="text-white line-clamp-2 leading-tight font-semibold">{video.title}</h3>

          <p className="my-1">{video.channelTitle}</p>

          <ViewInfo video={video} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
