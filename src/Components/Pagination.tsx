import React, { FC } from "react";
import ReactPaginate from "react-paginate";

type Props = Readonly<{
  pageCount: number;
  onPageChange: () => void;
}>;
const Pagination: FC<Props> = function ({ pageCount, onPageChange }: Props) {
  return (
    <div>
      <div className="pagination">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={onPageChange}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
        />
      </div>
    </div>
  );
};

export default Pagination;
