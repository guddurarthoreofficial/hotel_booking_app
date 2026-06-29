import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { getRooms } from "../../services/roomService";

import RoomCard from "../../components/rooms/RoomCard";
import RoomFilters from "../../components/rooms/RoomFilters";
import RoomPagination from "../../components/rooms/RoomPagination";
import EmptyRooms from "../../components/rooms/EmptyRooms";
import RoomCardSkeleton from "../../components/rooms/RoomCardSkeleton";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalRooms, setTotalRooms] = useState(0);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [roomType, setRoomType] = useState("");
    const [status, setStatus] = useState("");
    const [price, setPrice] = useState("");
    const [sort, setSort] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const [debouncedSearch, setDebouncedSearch] = useState("");


    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);


    useEffect(() => {
        fetchRooms();
    }, [debouncedSearch, roomType, status, price, sort, page]);



    const fetchRooms = async () => {
        try {

            let minPrice = "";
            let maxPrice = "";

            if (price) {
                const values = price.split("-");

                minPrice = values[0];
                maxPrice = values[1];
            }

            const data = await getRooms({
                search: debouncedSearch,
                roomType,
                status,
                minPrice,
                maxPrice,
                sort,
                page,
                limit: 9,
            });

            setRooms(data.rooms);
            setTotalPages(data.totalPages);
            setTotalRooms(data.totalRooms);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const params = {};

        if (search) params.search = search;
        if (roomType) params.roomType = roomType;
        if (status) params.status = status;
        if (price) params.price = price;
        if (sort) params.sort = sort;
        if (page > 1) params.page = page;

        setSearchParams(params);
    }, [search, roomType, status, price, sort, page]);


    const resetFilters = () => {
        setSearch("");
        setRoomType("");
        setStatus("");
        setPrice("");
        setSort("");
        setPage(1);
    };

    useEffect(() => {

        setSearch(searchParams.get("search") || "");
        setRoomType(searchParams.get("roomType") || "");
        setStatus(searchParams.get("status") || "");
        setPrice(searchParams.get("price") || "");
        setSort(searchParams.get("sort") || "");
        setPage(Number(searchParams.get("page")) || 1);

    }, []);

    if (loading) {
        return (
            <MainLayout>
                <section className="max-w-7xl mx-auto px-6 py-12">

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {[...Array(6)].map((_, index) => (
                            <RoomCardSkeleton key={index} />
                        ))}

                    </div>

                </section>
            </MainLayout>
        );
    }


    return (
        <MainLayout>
            <section className="max-w-7xl mx-auto px-6 py-12">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">

                    <div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                            Luxury Rooms
                        </h1>

                        <p className="text-gray-500 mt-3">
                            Discover premium rooms designed for comfort and elegance.
                        </p>

                        <p className="mt-4 text-blue-600 font-semibold">

                            Showing

                            <span className="mx-2 text-black">

                                {rooms.length}

                            </span>

                            of

                            <span className="mx-2 text-black">

                                {totalRooms}

                            </span>

                            Rooms

                        </p>

                    </div>

                    <div className="mt-6 lg:mt-0 bg-blue-50 border border-blue-200 rounded-2xl px-6 py-4">

                        <p className="text-sm text-gray-500">
                            Available Rooms
                        </p>

                        <h2 className="text-3xl font-bold text-blue-700">
                            {rooms.length}
                        </h2>

                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Left Sidebar */}

                    <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start">

                        <RoomFilters
                            search={search}
                            setSearch={setSearch}

                            roomType={roomType}
                            setRoomType={setRoomType}

                            status={status}
                            setStatus={setStatus}

                            price={price}
                            setPrice={setPrice}

                            sort={sort}
                            setSort={setSort}

                            resetFilters={resetFilters}
                        />

                    </aside>

                    {/* Right Side */}

                    <section className="lg:col-span-3">

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                            {
                                rooms.length > 0 ? (

                                    rooms.map((room) => (
                                        <RoomCard
                                            key={room._id}
                                            room={room}
                                        />
                                    ))

                                ) : (

                                    <div className="md:col-span-2 xl:col-span-3">
                                        <EmptyRooms onReset={resetFilters} />
                                    </div>

                                )
                            }

                        </div>
                        <RoomPagination
                            page={page}
                            totalPages={totalPages}
                            setPage={setPage}
                        />

                    </section>

                </div>

            </section>
        </MainLayout>
    );
};

export default Rooms;