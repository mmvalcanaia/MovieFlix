import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import Filter, { GenreFilterData } from "./Filter";
import { Movie } from "../../types/movie";
import { requestBackend } from "../../util/requests";
import { AxiosRequestConfig } from "axios";
import Pagination from "../../components/Pagination";
import { SpringPage } from "../../types/springPage";

import "./styles.css";

type ControlComponentsData = {
  activePage: number;
  filterData: GenreFilterData;
};

const Movies = () => {
  const [movies, setMovies] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      filterData: { genre: null },
      activePage: 0,
    });

  const handleSubmitFilter = (data: GenreFilterData) => {
    setControlComponentsData({ filterData: data, activePage: 0});
  };

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const getGenres = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: "/movies",
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
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
      <Pagination
        pageCount={movies ? movies.totalPages : 0}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Movies;
