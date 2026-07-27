import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="border p-4 rounded col col-12 col-md-6 col-lg-4">
      <img src={book.image} className="w-100 rounded" />

      <div className="d-flex flex-column mt-3">
        <h3>{book.title}</h3>

        <p>{book.author}</p>

        <Link to={`/ürünler/${book.id}`} className="bg-dark text-white p-2 rounded text-center">
          Detay'a Git
        </Link>
      </div>
    </div>
  );
};

export default Card;
