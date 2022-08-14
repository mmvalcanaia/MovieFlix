import { Movie } from "../../../types/movie";
import "./styles.css";

type Props = {
  movie: Movie;
};

const MovieSynopsis = ({ movie }: Props) => {
  return (
    <div className="base-card movie-synopsis-card-container">
      <div className="movie-synopsis-card-img">
        <img src={movie?.imgUrl} alt="Capa do filme" />
      </div>
      <div className="movie-synopsis-card-info">
        <h1 className="movie-synopsis-card-title">{movie?.title}</h1>
        <span className="movie-synopsis-card-year">{movie?.year}</span>
        <p className="movie-synopsis-card-subtitle">{movie?.subTitle}</p>
        <p className="movie-synopsis-card-synopsis">{movie?.synopsis}</p>
      </div>
    </div>
  );
};

export default MovieSynopsis;
