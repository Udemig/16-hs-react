import { CircleQuestionMark } from "lucide-react";

const nullCheck = (value) => {
  return value || <CircleQuestionMark title="Bilinmiyor" className="size-5" />;
};

export default nullCheck;
