import { useEffect, useState } from "react";

import RoomHeader from "../../components/admin/rooms/RoomHeader";
import RoomFilters from "../../components/admin/rooms/RoomFilters";
import AdminRoomTable from "../../components/admin/rooms/AdminRoomTable";
import Pagination from "../../components/common/Pagination";
import { deleteRoom } from "../../services/roomService";
import { toast } from "react-toastify";


import { getRooms } from "../../services/roomService";
import DeleteRoomModal from "../../components/admin/rooms/DeleteRoomModal";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);


  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);



  const handleDelete = async () => {
    try {
      setDeleteLoading(true);

      const res = await deleteRoom(selectedRoom._id);

      toast.success(res.message || "Room deleted successfully");

      setDeleteModal(false);
      setSelectedRoom(null);

      loadRooms();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete room"
      );
    } finally {
      setDeleteLoading(false);
    }
  };

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
        onDelete={(room) => {
          setSelectedRoom(room);
          setDeleteModal(true);
        }}
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
      <DeleteRoomModal
        isOpen={deleteModal}
        room={selectedRoom}
        loading={deleteLoading}
        onClose={() => setDeleteModal(false)}
        onConfirm={handleDelete}
      />

    </div>
  );
};

export default Rooms;