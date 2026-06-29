const RoomPagination = ({
  page,
  totalPages,
  setPage,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-3 mt-12">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-5 py-3 rounded-xl bg-gray-200 disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`h-11 w-11 rounded-xl font-semibold transition ${
              page === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        )
      )}

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-5 py-3 rounded-xl bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
};

export default RoomPagination;