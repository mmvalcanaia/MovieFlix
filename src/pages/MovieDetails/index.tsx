import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieReview from "../../components/MovieReview";
import ReviewForm from "../../components/ReviewForm";
import { Movie } from "../../types/movie";
import { Review } from "../../types/review";
import { hasAnyRoles, requestBackend } from "../../util/requests";
import MovieSynopsis from "./MovieSynopsis";

import "./styles.css";

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReviews] = useState<Review[]>([]);

  //get movie
  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(config)
      .then((response) => {
        if (response.data !== undefined) {
          setMovie(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  //get reviews
  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="review-list">
      <MovieSynopsis movie={movie as Movie} />
      {hasAnyRoles(["ROLE_MEMBER"]) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
      )}
      <div className="base-card">
        {reviews?.map((review) => {
          return <MovieReview review={review} key={review.id} />;
        })}
      </div>
    </div>
  );
};

export default MovieDetails;
