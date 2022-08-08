import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import Filter from "./Filter";
import { Movie } from "../../types/movie";
import { Response } from "../../types/response";
import { requestBackend } from "../../util/requests";
import "./styles.css";

const Movies = () => {
  const [movies, setMovies] = useState<Response<Movie>>();

  useEffect(() => {
    const params = {
      url: "/movies",
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="movies-container">
      <Filter />
      <div className="row">
        {movies?.content.map((movie: Movie) => (
          <div
            className="movies-list col-sm-6 col-lg-6 col-xl-3"
            key={movie.id}
          >
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
