import "./styles.css";

const Filter = () => {
  return (
    <form className="form-filter">
      <select className="form-filter-select" name="genres" id="genre">
        <option value="comedy">Comédia</option>
        <option value="drama">Drama</option>
      </select>
    </form>
  );
};
export default Filter;
