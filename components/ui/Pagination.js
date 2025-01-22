import React from "react";
import { Button } from "@/components/ui/button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

  const nextPage = () => {
    if (currentPage < totalPages - 1) onPageChange(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 0) onPageChange(currentPage - 1);
  };

  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button variant="outline" size="sm" onClick={() => onPageChange(0)} disabled={currentPage === 0}>
        First
      </Button>
      <Button variant="outline" size="sm" onClick={previousPage} disabled={currentPage === 0}>
        Previous
      </Button>
      {pageNumbers.slice(Math.max(0, currentPage - 2), Math.min(totalPages, currentPage + 5)).map((page) => (
        <Button
          key={page}
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "bg-[#777777] border-[#777777] text-white" : ""}
        >
          {page + 1}
        </Button>
      ))}
      <Button variant="outline" size="sm" onClick={nextPage} disabled={currentPage >= totalPages - 1}>
        Next
      </Button>
      <Button variant="outline" size="sm" onClick={() => onPageChange(totalPages - 1)} disabled={currentPage >= totalPages - 1}>
        Last
      </Button>
    </div>
  );
};

export default Pagination;
