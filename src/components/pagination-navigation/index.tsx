import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useAsyncStore } from "../../store";
import "./styles.css";

interface currentPageObject {
  selected: number;
}

export function PaginationNavigation(): JSX.Element {
  const page = useAsyncStore((state) => state.page);
  const changePage = useAsyncStore((state) => state.changePage);
  const paginationInfo = useAsyncStore((state) => state.paginationInfo);
  const fetchCharacters = useAsyncStore((state) => state.fetchCharacters);

  const handlePageClick = (event: currentPageObject): void => {
    changePage(event.selected + 1);
  };

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  return (
    <ReactPaginate
      breakLabel="..."
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      pageCount={paginationInfo.pages}
      nextLabel=">"
      previousLabel="<"
      containerClassName="pagination-container"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeLinkClassName="active"
    />
  );
}
