import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


import RoomForm from "../../components/admin/rooms/RoomForm";

import {
  getRoomById,
  updateRoom,
  uploadRoomImages,
} from "../../services/roomService";

const EditRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchRoom();
  }, [id]);

  const fetchRoom = async () => {
    try {
      setLoading(true);

      const res = await getRoomById(id);

      setRoom(res.room);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to load room"
      );

      navigate("/admin/rooms");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData, images) => {
    try {
      setSaving(true);

      // Update room details
      await updateRoom(id, formData);

      // Upload new images (if any)
      if (images.length > 0) {
        await uploadRoomImages(id, images);
      }

      toast.success("Room updated successfully");

      navigate("/admin/rooms");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to update room"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Room
        </h1>

        <p className="text-gray-500">
          Update room details and manage images.
        </p>
      </div>

      <RoomForm
        mode="edit"
        initialData={room}
        loading={saving}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/admin/rooms")}
      />
    </div>
  );
};

export default EditRoom;