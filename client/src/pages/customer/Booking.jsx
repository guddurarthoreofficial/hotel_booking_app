import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import BookingForm from "../../components/booking/BookingForm";

import { getRoomById } from "../../services/roomService";

const Booking = () => {

  const { roomId } = useParams();

  const [room, setRoom] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoom();
  }, []);

  const fetchRoom = async () => {

    try {

      const data = await getRoomById(roomId);

      setRoom(data.room);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto py-20">
          Loading...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto py-12 px-6">

        <BookingForm room={room} />

      </section>

    </MainLayout>
  );
};

export default Booking;