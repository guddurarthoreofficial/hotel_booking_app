import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Pencil } from "lucide-react";

import { getRoomById } from "../../services/roomService";
import RoomGallery from "../../components/admin/rooms/RoomGallery";
import RoomInfoCard from "../../components/admin/rooms/RoomInfoCard";
import RoomAmenities from "../../components/admin/rooms/RoomAmenities";
import RoomStatusCard from "../../components/admin/rooms/RoomStatusCard";

const RoomDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const res = await getRoomById(id);
                setRoom(res.room);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRoom();
    }, [id]);

    if (loading) {
        return (
            <div className="rounded-xl bg-white p-8 shadow">
                Loading room details...
            </div>
        );
    }

    if (!room) {
        return (
            <div className="rounded-xl bg-white p-8 shadow">
                Room not found.
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                <button
                    onClick={() => navigate(`/admin/rooms/edit/${room._id}`)}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                >
                    <Pencil size={18} />
                    Edit Room
                </button>
            </div>

            {/* Main Card */}
            <div className="grid gap-6 lg:grid-cols-3">

                <div className="space-y-6 lg:col-span-2">

                    <RoomGallery
                        images={room.images}
                    />

                    <RoomInfoCard
                        room={room}
                    />

                    <div className="rounded-2xl bg-white p-6 shadow">
                        <h2 className="mb-4 text-xl font-bold">
                            Description
                        </h2>

                        <p className="leading-7 text-slate-600">
                            {room.description || "No description available"}
                        </p>
                    </div>

                    <RoomAmenities
                        amenities={room.amenities}
                    />

                </div>

                <div>

                    <RoomStatusCard
                        room={room}
                    />

                </div>

            </div>
        </div>
    );
};

const Info = ({ title, children }) => (
    <div className="rounded-xl border p-5">
        <p className="text-sm text-gray-500">{title}</p>

        <p className="mt-2 text-lg font-semibold">
            {children}
        </p>
    </div>
);

export default RoomDetails;