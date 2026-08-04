import { useEffect, useState } from "react";
import Hero from "./Hero";
import api from "../../utils/api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import MovieList from "./MovieList";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setLoading(true);

    api
      .get("/genre/movie/list?language=tr")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Hero />

      {loading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

export default Home;
