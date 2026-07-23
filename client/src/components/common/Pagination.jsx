import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-6 flex items-center justify-between">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="flex items-center gap-2 rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-100"
      >
        <FaChevronLeft />
        Previous
      </button>

      <div className="flex gap-2">
        {pages.map((item) => (
          <button
            key={item}
            onClick={() => onPageChange(item)}
            className={`h-10 w-10 rounded-lg border transition ${
              item === page
                ? "bg-blue-600 text-white border-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex items-center gap-2 rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-100"
      >
        Next
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;