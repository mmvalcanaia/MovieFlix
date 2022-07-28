import "./styles.css";
import starIcon from "../../assets/star.png";

const MovieReview = () => {
  return (
    <>
      <div className="review-card">
        <div className="user-review">
          <div className="icon-container">
            <img src={starIcon} alt="" />
          </div>
          <p>Maria Silva</p>
        </div>
        <div className="text-review">
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieReview;
