import "./styles.css";
import starIcon from "../../assets/star.png";
import { Review } from "../../types/review";

type Props = {
  review: Review;
};

const MovieReview = ({ review }: Props) => {
  return (
    <>
      <div className="review-card">
        <div className="user-review">
          <div className="icon-container">
            <img src={starIcon} alt="" />
          </div>
          <p>{review.user.name}</p>
        </div>
        <div className="text-review">
          <p>{review.text}</p>
        </div>
      </div>
    </>
  );
};

export default MovieReview;
