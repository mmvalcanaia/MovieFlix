import MovieReview from "../../components/MovieReview";
import ReviewForm from "../../components/ReviewForm";
import { hasAnyRoles } from "../../util/requests";
import "./styles.css";

const MovieDetails = () => {
  return (
    <>
      <div className="review-list">
        <h3>Detalhes do filme</h3>
        {hasAnyRoles(["ROLE_MEMBER"]) && <ReviewForm />}
        <div className="base-card">
          <MovieReview />
          <MovieReview />
          <MovieReview />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
