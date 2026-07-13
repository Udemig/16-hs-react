import { useEffect, useState } from "react";
import api from "../utils/api";

// custom hook
const useComments = (videoId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    // api'a gönderilecek parametreleri hazırla
    const params = { id: videoId, sort_by: "top", geo: "TR", lang: "tr" };

    // api'a video bilgileri için istek at
    api
      .get("/comments", { params })
      .then((res) => setComments(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [videoId]);

  // hook'un return ediceği verileri belirledik
  return { isLoading, error, comments };
};

export default useComments;
