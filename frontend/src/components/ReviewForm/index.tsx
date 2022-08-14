import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { Review } from "../../types/review";
import { requestBackend } from "../../util/requests";
import { toast } from "react-toastify";

import "./styles.css";

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type ReviewFormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
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
        setValue("text", "");
        onInsertReview(response.data);
        toast.success("Avaliação registrada!");
      })
      .catch(() => {
        toast.error("Não é permitido texto vazio.");
      });
  };

  return (
    <div className="base-card form-container">
      <form onSubmit={handleSubmit(onSubmitClick)}>
        <input
          {...(register("text"))}
          type="text"
          name="text"
          className="input-field"
          placeholder="Deixe sua avaliação aqui"
        />
        <div className="btn-container">
          <button type="submit">SALVAR AVALIAÇÃO</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
