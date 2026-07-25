import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




import RoomForm from "../../components/admin/rooms/RoomForm";
import { createRoom, uploadRoomImages } from "../../services/roomService";

const AddRoom = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data, images) => {
    try {
      setLoading(true);

      const { room } = await createRoom(data);

      if (!room?._id) {
        throw new Error("Room creation failed");
      }

      if (images?.length) {
        await uploadRoomImages(room._id, images);
      }

      toast.success("Room created successfully");
      navigate("/admin/rooms");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
        error.message ||
        "Failed to create room"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Add New Room</h1>
        <p className="text-gray-500">
          Fill in the room details and upload images.
        </p>
      </div>

      <RoomForm
        mode="create"
        loading={loading}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/admin/rooms")}
      />
    </div>
  );
  
};

export default AddRoom;


