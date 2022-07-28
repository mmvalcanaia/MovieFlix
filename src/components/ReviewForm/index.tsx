import "./styles.css";

const ReviewForm = () => {
  return (
    <div className="base-card form-container">
      <form>
        <input
          type="text"
          name="text"
          className="input-field"
          placeholder="Deixe sua avaliação aqui"
        />
        <div className="btn-container">
          <button>SALVAR AVALIAÇÃO</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
