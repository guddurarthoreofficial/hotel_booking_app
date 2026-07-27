import { useEffect, useState } from "react";
import { getBookings } from "../../services/bookingService";
import BookingFilters from "../../components/admin/bookings/BookingFilters";
import BookingTable from "../../components/admin/bookings/BookingTable";


const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [filters, setFilters] = useState({
        search: "",
        status: "",
        paymentStatus: "",
        paymentMethod: "",
    });

    const fetchBookings = async () => {
        try {
            setLoading(true);

            const data = await getBookings({
                page,
                limit: 10,
                ...filters,
            });

            setBookings(data.bookings);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, [page, filters]);

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Booking Management</h1>
                <p className="text-gray-500">
                    Manage hotel bookings, payments and guest check-in/check-out.
                </p>
            </div>

            {/* Filters Component */}
            <BookingFilters
                filters={filters}
                setFilters={setFilters}
                setPage={setPage}
            />

            <BookingTable
                bookings={bookings}
                refresh={fetchBookings}
            />
            {/* <BookingFilters /> */}


            {loading ? (
                <div className="text-center py-10">Loading bookings...</div>
            ) : bookings.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                    No bookings found.
                </div>
            ) : (
                <>
                    {/* BookingTable Component */}
                    {/* <BookingTable bookings={bookings} refresh={fetchBookings} /> */}

                    <div className="mt-6 flex items-center justify-between">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((prev) => prev - 1)}
                            className="rounded-lg border px-4 py-2 disabled:opacity-50"
                        >
                            Previous
                        </button>

                        <span className="font-medium">
                            Page {page} of {totalPages}
                        </span>

                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage((prev) => prev + 1)}
                            className="rounded-lg border px-4 py-2 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default BookingList;