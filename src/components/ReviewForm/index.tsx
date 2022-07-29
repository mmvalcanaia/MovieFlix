import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { Review } from "../../types/review";
import { requestBackend } from "../../util/requests";
import "./styles.css";

type Props = {
  movieId: string;
  onInsertReview: (review : Review) => void;
};

type ReviewFormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<ReviewFormData>();

  const onSubmitClick = (reviewFormData: ReviewFormData) => {
    
    reviewFormData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/reviews",
      data: reviewFormData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', "");
        onInsertReview(response.data);
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
          <button type="submit">SALVAR AVALIAÇÃO</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
