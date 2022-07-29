import { useForm } from "react-hook-form";
import { requestPostNewReview } from "../../util/requests";
import "./styles.css";

type ReviewFormData = {
  text: string
};

type Props = {
  movieId: string
}

const ReviewForm = (movieId : Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormData>();

  const onSubmitClick = (review : ReviewFormData) => {
    requestPostNewReview(review)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="base-card form-container">
       <form onSubmit={handleSubmit(onSubmitClick)}>
        <input
          {...register("text", {
            required: "Campo obrigatório",
          })}
          type="text"
          name="text"
          className="input-field"
          placeholder="Deixe sua avaliação aqui"
        />
        <div className="invalid-feedback d-block">{errors.text?.message}</div>
        <div className="btn-container">
          <button>SALVAR AVALIAÇÃO</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
