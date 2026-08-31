const Content = ({ content }) => {
  return (
    <div>
      {content.text && <p>{content.text}</p>}

      {content.media && content.mediaType === "image" ? (
        <img src={content.media} className="rounded-xl my-2 object-cover max-h-100" />
      ) : content.mediaType === "video" ? (
        <video src={content.media} className="w-full my-2 rounded-xl" controls />
      ) : content.mediaType === "audio" ? (
        <audio src={content.media} className="w-full my-2" controls />
      ) : null}
    </div>
  );
};

export default Content;
