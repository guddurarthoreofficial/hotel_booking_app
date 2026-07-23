import RoomStatusBadge from "./RoomStatusBadge";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const AdminRoomTable = ({
  rooms = [],
  loading = false,
  totalRooms = 0,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b px-5 py-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Rooms
        </h2>

        <span className="text-sm text-slate-500">
          Total: {totalRooms}
        </span>
      </div>
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

                  <tr>
                    <td colSpan={6} className="p-6">
                      <div className="space-y-3">
                        {[...Array(5)].map((_, index) => (
                          <div
                            key={index}
                            className="h-10 animate-pulse rounded bg-gray-200"
                          />
                        ))}
                      </div>
                    </td>
                  </tr>

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