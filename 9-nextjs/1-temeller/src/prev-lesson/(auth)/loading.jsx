const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <h2>Yükleniyor...</h2>
      <div className="border-blue-500 border-t size-10 rounded-full animate-spin" />
    </div>
  );
};

export default Loading;
