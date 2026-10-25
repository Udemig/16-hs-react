import { Loader2 } from "lucide-react";
import type { FC } from "react";

const Loader: FC = () => {
  return <Loader2 className="mx-auto my-20 size-8 text-blue animate-spin" />;
};

export default Loader;
