import RoomStatusBadge from "./RoomStatusBadge";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const AdminRoomTable = ({
  rooms = [],
  loading = false
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-5 py-4 text-left">Room</th>
              <th className="px-5 py-4 text-left">Type</th>
              <th className="px-5 py-4 text-left">Price</th>
              <th className="px-5 py-4 text-left">Capacity</th>
              <th className="px-5 py-4 text-left">Status</th>
              <th className="px-5 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {loading && (

              <tr>

                <td
                  colSpan={6}
                  className="py-10 text-center"
                >

                  Loading Rooms...

                </td>

              </tr>

            )}

            {!loading && rooms.length === 0 && (

              <tr>

                <td
                  colSpan={6}
                  className="py-10 text-center text-slate-500"
                >

                  No Rooms Found

                </td>

              </tr>

            )}

            {!loading && rooms.map(room => (

              <tr
                key={room._id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-5 py-4 font-semibold">
                  {room.roomNumber}
                </td>

                <td className="px-5 py-4">{room.roomType}</td>

                <td className="px-5 py-4">
                  ₹{room.pricePerNight}
                </td>

                <td className="px-5 py-4">
                  {room.capacity}
                </td>

                <td className="px-5 py-4">
                  <RoomStatusBadge status={room.status} />
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-center gap-3">
                    <button className="text-slate-500 hover:text-blue-600">
                      <FaEye />
                    </button>

                    <button className="text-slate-500 hover:text-green-600">
                      <FaEdit />
                    </button>

                    <button className="text-slate-500 hover:text-red-600">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>

            ))}



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRoomTable;