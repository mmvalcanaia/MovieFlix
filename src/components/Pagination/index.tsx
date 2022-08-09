import ReactPaginate from "react-paginate";
import "./styles.css";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";

type Props = {
  pageCount: number;
  pageRangeDisplayed: number;
  onChange?: (pageNumber: number) => void;
};

const Pagination = ({ pageCount, pageRangeDisplayed, onChange }: Props) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="previous-arrow"
      nextClassName="next-arrow"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"
      previousLabel={
        <div className="pagination-arrow-container">
          <ArrowIcon />
        </div>
      }
      nextLabel={
        <div className="pagination-arrow-container">
          <ArrowIcon />
        </div>
      }
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
    />
  );
};
export default Pagination;
