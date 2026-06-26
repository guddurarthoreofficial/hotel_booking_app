import { useEffect, useState } from "react";
import { getRooms } from "../../services/roomService";
import RoomCard from "../rooms/RoomCard";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const data = await getRooms({
        limit: 3,
      });

      setRooms(data.rooms);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-10">
          Featured Rooms
        </h2>

        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center">
        Featured Rooms
      </h2>

      <p className="text-center text-gray-500 mt-3">
        Choose your perfect stay at Juhi Petals
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

        {rooms.map((room) => (
          <RoomCard
            key={room._id}
            room={room}
          />
        ))}

      </div>

    </section>
  );
};

export default FeaturedRooms;