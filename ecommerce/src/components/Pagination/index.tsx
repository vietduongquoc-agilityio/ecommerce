import { colors } from "@/themes";
import Button from "../Button";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
  pageCount: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  pageCount,
}) => {
  const visibleRange = 5;

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pageCount) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(currentPage - Math.floor(visibleRange / 2), 1);
    const endPage = Math.min(startPage + visibleRange - 1, pageCount);

    if (startPage > 1) {
      pageNumbers.push(
        <Button key="first" onClick={() => handlePageClick(1)} variant="pagination">
          1
        </Button>
      );
      if (startPage > 2) {
        pageNumbers.push(<span key="dots-start">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          onClick={() => handlePageClick(i)}
          variant="pagination"
          style={{
            backgroundColor: currentPage === i ? "#B88E2F" : colors.primary.dark,
            color: currentPage === i ? "white" : "black",
          }}
        >
          {i}
        </Button>
      );
    }

    if (endPage < pageCount) {
      if (endPage < pageCount - 1) {
        pageNumbers.push(<span key="dots-end">...</span>);
      }
      pageNumbers.push(
        <Button key={pageCount} onClick={() => handlePageClick(pageCount)} variant="pagination">
          {pageCount}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "38px" , padding:"70px 0"}}>
      {currentPage > 1 && (
        <Button onClick={handlePrevious} variant="pagination">
          Previous
        </Button>
      )}
      {renderPageNumbers()}
      {currentPage < pageCount && (
        <Button onClick={handleNext} variant="pagination">
          Next
        </Button>
      )}
    </div>
  );
};

export default Pagination;
