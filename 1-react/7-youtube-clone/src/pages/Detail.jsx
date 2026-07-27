import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import useVideoDetail from "../hooks/useVideoDetail";
import Spinner from "../components/loader/Spinner";
import Error from "../components/error";
import ChannelInfo from "../components/detail/ChannelInfo";
import Description from "../components/detail/Description";
import Comments from "../components/detail/Comments";
import Card from "../components/card";

const Detail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const { isLoading, error, video } = useVideoDetail(videoId);
  console.log(video);

  return (
    <div className="page flex flex-col lg:flex-row gap-6 mx-auto max-w-500">
      <div className="flex-1">
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>

        <div className="space-y-4 mt-5">
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <Error message={error} />
          ) : (
            <>
              <h1 className="text-xl font-bold line-clamp-2 leading-tight">{video.title}</h1>

              <ChannelInfo video={video} />

              <Description video={video} />

              <Comments count={video?.commentCount} videoId={videoId} />
            </>
          )}
        </div>
      </div>

      <div className="lg:w-100">
        <h2 className="text-lg font-semibold mb-4">İlgili Videolar</h2>

        <div className="grid gap-2 sm:gap-5 lg:gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {video?.relatedVideos?.data
            .filter((item) => item.type === "video" || item.type === "shorts")
            .map((video, key) => (
              <Card video={video} key={key} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
