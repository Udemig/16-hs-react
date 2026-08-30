import Loader from ".";

const PageLoader = () => {
  return (
    <div className="h-screen bg-primary grid place-items-center">
      <Loader designs="text-white text-2xl" />
    </div>
  );
};

export default PageLoader;
