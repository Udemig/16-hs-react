// api'dan gelen öğe video mu (normal video veya shorts)
const isVideo = (item) => item.type === "video" || item.type === "shorts";

export default isVideo;
