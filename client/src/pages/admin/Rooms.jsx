import { useEffect, useState } from "react";

import RoomHeader from "../../components/admin/rooms/RoomHeader";
import RoomFilters from "../../components/admin/rooms/RoomFilters";
import AdminRoomTable from "../../components/admin/rooms/AdminRoomTable";
import Pagination from "../../components/common/Pagination";

import { getRooms } from "../../services/roomService";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    page: 1,
    search: "",
    status: "",
    roomType: "",
    sort: "",
  });

  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalRooms: 0,
  });

  const loadRooms = async () => {
    try {
      setLoading(true);

      const res = await getRooms(filters);

      setRooms(res.rooms);

      setPagination({
        page: res.page,
        totalPages: res.totalPages,
        totalRooms: res.totalRooms,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRooms();
  }, [filters]);

  return (
    <div className="space-y-6">

      <RoomHeader />

      <RoomFilters
        filters={filters}
        setFilters={setFilters}
      />

      <AdminRoomTable
        rooms={rooms}
        loading={loading}
        totalRooms={pagination.totalRooms}
      />

      <Pagination
        page={pagination.page}
        totalPages={pagination.totalPages}
        onPageChange={(newPage) =>
          setFilters((prev) => ({
            ...prev,
            page: newPage,
          }))
        }
      />

    </div>
  );
};

export default Rooms;