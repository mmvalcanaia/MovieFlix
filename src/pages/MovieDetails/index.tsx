import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieReview from "../../components/MovieReview";
import ReviewForm from "../../components/ReviewForm";
import { Review } from "../../types/review";
import { hasAnyRoles, requestBackend } from "../../util/requests";
import "./styles.css";

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();
  const [reviews, setReviews] = useState<Review[]>();

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

  return (
    <>
      <div className="review-list">
        <h3>Detalhes do filme</h3>
        {hasAnyRoles(["ROLE_MEMBER"]) && <ReviewForm movieId={movieId} />}
        <div className="base-card">
          {reviews?.map((review) => {
            return <MovieReview review={review} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
