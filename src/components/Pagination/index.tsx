import ReactPaginate from "react-paginate";
import "./styles.css";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";

const Pagination = () => {
  return (
    <ReactPaginate
      pageCount={5}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousLabel={<ArrowIcon />}
      previousClassName="previous-arrow"
      nextLabel={<ArrowIcon />}
      nextClassName="next-arrow"
      activeLinkClassName="pagination-active"
      disabledClassName="arrow-inactive"
    />
  );
};
export default Pagination;
