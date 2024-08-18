/* eslint-disable react/prop-types */
import { useState } from "react";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [pageNumber, setPageNumber] = useState(currentPage);

  const updatePageNumber = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPageNumber(newPage);
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex select-none justify-center items-center gap-3 ">
      {/* left arrow */}
      <div
        onClick={() => updatePageNumber(pageNumber - 1)}
        className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full"
      >
        <svg className="w-8" viewBox="0 0 24 24" fill="none">
          <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="flex justify-center items-center gap-2 bg-white p-2 shadow-lg rounded-full">
        {[...Array(totalPages).keys()].map((item) => (
          <div
            onClick={() => updatePageNumber(item + 1)}
            className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 ${
              pageNumber === item + 1 ? "bg-sky-500 text-white" : "bg-white"
            } border-sky-300  font-semibold text-gray-700 py-[6px] rounded-full`}
            key={item}
          >
            {item + 1}
          </div>
        ))}
      </div>
      {/* right arrow */}
      <div
        onClick={() => updatePageNumber(pageNumber + 1)}
        className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full"
      >
        <svg className="w-8" viewBox="0 0 24 24" fill="none">
          <path d="M10 7L15 12L10 17" stroke="#0284C7" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
};
