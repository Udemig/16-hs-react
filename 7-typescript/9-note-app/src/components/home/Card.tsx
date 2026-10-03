import type { FC } from "react";
import type { Note } from "../../utils/types";
import { Link } from "react-router-dom";

interface Props {
  note: Note;
}

const Card: FC<Props> = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`} className="card p-5 group flex flex-col animate-fade-in transform hover:scale-[1.02] transition-all">
      <h3 className="mb-3 text-lg font-bold text-text-primary group-hover:text-primary transition-all line-clamp-1">{note.title}</h3>

      <p className="line-clamp-2 text-text-secondary text-sm mb-4 flex-1">{note.content.slice(0, 200)}</p>

      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border">
        {note.tags.slice(0, 4).map((tag, key) => (
          <span key={key} className="bg-primary text-text-primary px-2 py-0.5 mt-2 rounded-full items-center">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Card;
