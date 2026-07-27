const BookingFilters = ({ filters, setFilters, setPage }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));

    setPage(1);
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      status: "",
      paymentStatus: "",
      paymentMethod: "",
    });

    setPage(1);
  };

  return (
    <div className="mb-6 rounded-xl bg-white p-5 shadow">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <input
          type="text"
          name="search"
          placeholder="Search guest or room..."
          value={filters.search}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="checked_in">Checked In</option>
          <option value="checked_out">Checked Out</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <select
          name="paymentStatus"
          value={filters.paymentStatus}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2"
        >
          <option value="">Payment Status</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>

        <select
          name="paymentMethod"
          value={filters.paymentMethod}
          onChange={handleChange}
          className="rounded-lg border px-4 py-2"
        >
          <option value="">Payment Method</option>
          <option value="cash">Cash</option>
          <option value="online">Online</option>
        </select>

        <button
          onClick={resetFilters}
          className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default BookingFilters;