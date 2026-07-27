import { useEffect, useState } from "react";
import { deleteRoomImage } from "../../../services/roomService";
import { toast } from "react-toastify";

const ImageUploader = ({
  images = [],
  setImages,
  existingImages = [],
  roomId,
  mode = "create",
}) => {
  const [existing, setExisting] = useState(existingImages);
  const [deleting, setDeleting] = useState("");

  useEffect(() => {
    setExisting(existingImages);
  }, [existingImages]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const selectedImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...selectedImages]);

    e.target.value = "";
  };

  const handleDeleteExisting = async (public_id) => {
    if (!window.confirm("Delete this image?")) return;

    try {
      setDeleting(public_id);

      await deleteRoomImage(roomId, public_id);

      setExisting((prev) =>
        prev.filter((img) => img.public_id !== public_id)
      );

      toast.success("Image deleted successfully");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to delete image"
      );
    } finally {
      setDeleting("");
    }
  };

  const removeNewImage = (index) => {
    setImages((prev) => {
      const updated = [...prev];

      URL.revokeObjectURL(updated[index].preview);

      updated.splice(index, 1);

      return updated;
    });
  };

  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img.preview) {
          URL.revokeObjectURL(img.preview);
        }
      });
    };
  }, [images]);

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block font-medium">
          Room Images
        </label>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full rounded-lg border p-2"
        />
      </div>

      {/* Existing Images */}
      {mode === "edit" && existing.length > 0 && (
        <div>
          <h3 className="mb-3 font-semibold">
            Existing Images
          </h3>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {existing.map((image) => (
              <div
                key={image.public_id}
                className="relative overflow-hidden rounded-lg border"
              >
                <img
                  src={image.url}
                  alt=""
                  className="h-32 w-full object-cover"
                />

                <button
                  type="button"
                  disabled={deleting === image.public_id}
                  onClick={() =>
                    handleDeleteExisting(image.public_id)
                  }
                  className="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-xs text-white disabled:opacity-60"
                >
                  {deleting === image.public_id
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New Images */}
      {images.length > 0 && (
        <div>
          <h3 className="mb-3 font-semibold">
            New Images
          </h3>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border"
              >
                <img
                  src={image.preview}
                  alt=""
                  className="h-32 w-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => removeNewImage(index)}
                  className="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-xs text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;