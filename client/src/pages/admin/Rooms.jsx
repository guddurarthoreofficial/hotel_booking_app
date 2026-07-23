import RoomHeader from "../../components/admin/rooms/RoomHeader";
import RoomFilters from "../../components/admin/rooms/RoomFilters";
import AdminRoomTable from "../../components/admin/rooms/AdminRoomTable";

const Rooms = () => {
  return (
    <div className="space-y-6">
      <RoomHeader />

      <RoomFilters />

      <AdminRoomTable rooms={[]} />
    </div>
  );
};

export default Rooms;