import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../../utils/api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Buttons from "./Buttons";
import Banner from "./Banner";
import Content from "./Content";
import Cast from "./Cast";

const Movie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setLoading(true);

    const params = { append_to_response: "credits", language: "tr" };

    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div>
      <Buttons movie={movie} />

      <Banner movie={movie} />

      <Content movie={movie} />

      <Cast cast={movie.credits.cast} />
    </div>
  );
};

export default Movie;
