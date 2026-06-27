import MainLayout from "../../layouts/MainLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getRoomById } from "../../services/roomService";
import RoomGallery from "../../components/rooms/RoomGallery";
import { useNavigate } from "react-router-dom";

const RoomDetails = () => {

    const { id } = useParams();

    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        fetchRoom();
    }, []);

    const fetchRoom = async () => {
        try {
            const data = await getRoomById(id);

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
            <section className="max-w-7xl mx-auto px-6 py-20">

                <h1 className="text-4xl font-bold capitalize">
                    {room.roomType} Room
                </h1>

                <p className="text-gray-500 mt-3">
                    {room.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-10 mt-10">

                    <RoomGallery images={room.images} />

                    <div>

                        <h2 className="text-3xl font-bold text-blue-600">
                            ₹ {room.pricePerNight}
                            <span className="text-lg text-gray-500">
                                {" "} / Night
                            </span>
                        </h2>

                        <p className="mt-5">
                            <strong>Room Number :</strong>{" "}
                            {room.roomNumber}
                        </p>

                        <p className="mt-3">
                            <strong>Maximum Guests :</strong>{" "}
                            {room.maxGuests}
                        </p>

                        <p className="mt-3">
                            <strong>Status :</strong>{" "}
                            {room.status}
                        </p>

                        <div className="mt-6">

                            <h3 className="font-bold text-xl">
                                Amenities
                            </h3>

                            <div className="flex flex-wrap gap-3 mt-4">

                                {room.amenities.map((item) => (
                                    <span
                                        key={item}
                                        className="bg-gray-100 px-4 py-2 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>

                        </div>

                        <button
                            onClick={() => navigate(`/booking/${room._id}`)}
                            className="mt-10 bg-amber-400 hover:bg-amber-300 px-8 py-4 rounded-xl font-semibold"
                        >
                            Book Now
                        </button>

                    </div>

                </div>

            </section>
        </MainLayout>
    );
};

export default RoomDetails; 