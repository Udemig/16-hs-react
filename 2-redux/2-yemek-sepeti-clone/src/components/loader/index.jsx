import { LoaderCircle } from "lucide-react";

const Loader = ({ designs }) => {
  return (
    <div className={`${designs} flex items-center justify-center my-20`}>
      <div className="box inline-flex items-center gap-3 px-6 py-3">
        <LoaderCircle className="size-8 animate-spin text-red-500" />
      </div>
    </div>
  );
};

export default Loader;
