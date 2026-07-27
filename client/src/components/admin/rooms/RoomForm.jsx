import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import AmenitySelector from "./AmenitySelector";
import FeaturedToggle from "./FeaturedToggle";
import ImageUploader from "./ImageUploader";

const RoomForm = ({
  initialData = {},
  mode = "create",
  loading = false,
  onSubmit,
  onCancel,
}) => {
  const [images, setImages] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      roomNumber: "",
      roomType: "standard",
      pricePerNight: "",
      maxGuests: 1,
      roomSize: "",
      floor: 1,
      bedType: "double",
      amenities: [],
      status: "available",
      description: "",
      isFeatured: false,
    },
  });

  useEffect(() => {
    if (!initialData?._id) return;

    reset({
      roomNumber: initialData.roomNumber,
      roomType: initialData.roomType,
      pricePerNight: initialData.pricePerNight,
      maxGuests: initialData.maxGuests,
      roomSize: initialData.roomSize,
      floor: initialData.floor,
      bedType: initialData.bedType,
      amenities: initialData.amenities,
      status: initialData.status,
      description: initialData.description,
      isFeatured: initialData.isFeatured,
    });
  }, [initialData, reset]);

  const submitHandler = (data) => {
    onSubmit(data, images);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6 rounded-xl bg-white p-6 shadow"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {/* Room Number */}
        <div>
          <label className="mb-1 block font-medium">Room Number</label>

          <input
            {...register("roomNumber", {
              required: "Room Number is required",
            })}
            className="w-full rounded-lg border p-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.roomNumber?.message}
          </p>
        </div>

        {/* Room Type */}
        <div>
          <label className="mb-1 block font-medium">Room Type</label>

          <select
            {...register("roomType")}
            className="w-full rounded-lg border p-3"
          >
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="premium">Premium</option>
            <option value="suite">Suite</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="mb-1 block font-medium">
            Price Per Night
          </label>

          <input
            type="number"
            {...register("pricePerNight", {
              required: "Price is required",
            })}
            className="w-full rounded-lg border p-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.pricePerNight?.message}
          </p>
        </div>

        {/* Guests */}
        <div>
          <label className="mb-1 block font-medium">
            Max Guests
          </label>

          <input
            type="number"
            {...register("maxGuests")}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Room Size */}
        <div>
          <label className="mb-1 block font-medium">
            Room Size (sq ft)
          </label>

          <input
            type="number"
            {...register("roomSize")}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Floor */}
        <div>
          <label className="mb-1 block font-medium">Floor</label>

          <input
            type="number"
            {...register("floor")}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Bed Type */}
        <div>
          <label className="mb-1 block font-medium">Bed Type</label>

          <select
            {...register("bedType")}
            className="w-full rounded-lg border p-3"
          >
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="queen">Queen</option>
            <option value="king">King</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="mb-1 block font-medium">Status</label>

          <select
            {...register("status")}
            className="w-full rounded-lg border p-3"
          >
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      {/* Amenities */}
      <Controller
        name="amenities"
        control={control}
        render={({ field }) => (
          <AmenitySelector
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      {/* Description */}
      <div>
        <label className="mb-1 block font-medium">
          Description
        </label>

        <textarea
          rows={5}
          {...register("description")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Featured */}
      <Controller
        name="isFeatured"
        control={control}
        render={({ field }) => (
          <FeaturedToggle
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <ImageUploader
        images={images}
        setImages={setImages}
        existingImages={initialData.images || []}
        roomId={initialData._id}
        mode={mode}
      />

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border px-6 py-3"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-60"
        >
          {loading
            ? "Saving..."
            : mode === "create"
              ? "Create Room"
              : "Update Room"}
        </button>
      </div>
    </form>
  );
};

export default RoomForm;