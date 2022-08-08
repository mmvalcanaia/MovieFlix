import "./styles.css";

import Select, { StylesConfig} from "react-select";
import { useEffect, useState } from "react";
import { requestBackend } from "../../../util/requests";
import { Genre } from "../../../types/genre";
import { colors } from "react-select/dist/declarations/src/theme";

const Filter = () => {
  const [selectGenres, setSelectedGenres] = useState<Genre[]>([]);

  useEffect(() => {
    requestBackend({ url: "/genres", withCredentials: true }).then((response) => {
      setSelectedGenres(response.data);
    });
  }, []);

  const customStyles : StylesConfig<Genre> = {
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? '#312f2f' : '#6c6c6c',
      height: '50px',
    })
  }

  return (
    <form className="form-filter">
      <Select
        options={selectGenres}
        getOptionLabel={(genre: Genre) => genre.name}
        getOptionValue={(genre: Genre) => String(genre.id)}
        classNamePrefix="form-filter-select"
        styles={customStyles}
      />
    </form>
  );
};
export default Filter;
