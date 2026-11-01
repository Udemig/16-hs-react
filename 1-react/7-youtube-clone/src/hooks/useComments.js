import useFetch from "./useFetch";

// custom hook
// videonun yorumlarını getirir
const useComments = (videoId) => useFetch("/comments", { id: videoId, sort_by: "top" });

export default useComments;
