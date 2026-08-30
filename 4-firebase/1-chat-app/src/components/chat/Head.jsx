import { Link } from "react-router-dom";

const Head = ({ username, photo, room }) => {
  return (
    <div className="flex justify-between items-center p-4 border border-gray-100 shadow-md">
      <div className="flex items-center gap-3">
        <img
          src={photo}
          alt="profil"
          referrerPolicy="no-referrer"
          className="size-10 rounded-full object-cover border border-gray-200"
        />
        <p className="font-semibold">{username}</p>
      </div>

      <div className="bg-indigo-50 flex text-indigo-600 px-4 py-1.5 text-sm rounded-full font-medium border border-indigo-100">
        <span className="mr-2 opacity-70">Oda:</span> <span>{room}</span>
      </div>

      <Link
        to="/"
        className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all"
      >
        Farklı Oda
      </Link>
    </div>
  );
};

export default Head;
