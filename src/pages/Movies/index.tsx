import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import Filter, { GenreFilterData } from "./Filter";
import { Movie } from "../../types/movie";
import { Response } from "../../types/response";
import { requestBackend } from "../../util/requests";
import "./styles.css";
import { AxiosRequestConfig } from "axios";
import Pagination from "../../components/Pagination";

type ControlComponentsData = {
  filterData: GenreFilterData;
};

const Movies = () => {
  const [movies, setMovies] = useState<Response<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      filterData: { genre: null },
    });

  const handleSubmitFilter = (data: GenreFilterData) => {
    setControlComponentsData({ filterData: data });
  };

  const getGenres = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: "/movies",
      withCredentials: true,
      params: {
        genre: controlComponentsData.filterData.genre,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };
    requestBackend(params).then((response) => {
      setMovies(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  return (
    <div className="movies-container">
      <Filter onSubmitFilter={handleSubmitFilter} />
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
      <Pagination />
    </div>
  );
};

export default Movies;
