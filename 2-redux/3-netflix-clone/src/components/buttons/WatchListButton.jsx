import { Plus } from "lucide-react";

const WatchListButton = ({ movie }) => {
  return (
    <button className="hero-btn from-blue-600 to-blue-700">
      <Plus className="size-5" />
      Listeye Ekle
    </button>
  );
};

export default WatchListButton;
