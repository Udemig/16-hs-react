import { useEffect, useState } from "react";
import api from "../utils/api";

// custom hook
const useVideoDetail = (videoId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    // api'a gönderilecek parametreleri hazırla
    const params = { id: videoId, extend: 1, geo: "TR", lang: "tr" };

    // api'a video bilgileri için istek at
    api
      .get("/video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [videoId]);

  // hook'un return ediceği verileri belirledik
  return { isLoading, error, video };
};

export default useVideoDetail;
