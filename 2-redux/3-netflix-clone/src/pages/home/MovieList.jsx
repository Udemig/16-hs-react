import { useEffect, useState } from "react";
import api from "../../utils/api";
import { BASE_IMG_URL } from "../../utils/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get(`/discover/movie?with_genres=${genre.id}`).then((res) => setMovies(res.data.results));
  }, [genre.id]);

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold mb-5">{genre.name}</h1>

      <Splide
        options={{ autoWidth: true, gap: "20px", type: "loop", pagination: false }}
        className="flex flex-wrap gap-5"
      >
        {movies.map((movie) => (
          <SplideSlide key={movie.id} className="max-w-75 rounded-xl overflow-hidden">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={BASE_IMG_URL + movie.poster_path}
                loading="lazy"
                className="h-full cursor-pointer transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border rounded-xl border-transparent hover:border-white/20"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
