import "./styles.css";

import Select from "react-select";

const Filter = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <form className="form-filter">
      <Select options={options} classNamePrefix="form-filter-select" />
    </form>
  );
};
export default Filter;
