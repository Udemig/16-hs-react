import useFetch from "./useFetch";

// custom hook
// video bilgilerini getirir
const useVideoDetail = (videoId) => useFetch("/video/info", { id: videoId, extend: 1 });

export default useVideoDetail;
