import { useForm, Controller } from "react-hook-form";
import AmenitySelector from "./AmenitySelector";
import FeaturedToggle from "./FeaturedToggle";
import ImageUploader from "./ImageUploader";
import { useState } from "react";

const ROOM_TYPES = [
    "standard",
    "deluxe",
    "premium",
    "suite",
];

const BED_TYPES = [
    "single",
    "double",
    "queen",
    "king",
];

const RoomForm = ({
    mode = "create",
    initialValues = {},
    existingImages = [],
    onDeleteExistingImage,
    onSubmit,
    onCancel,
    loading = false,
}) => {

    const [images, setImages] = useState([]);
    const submitHandler = (data) => {
        onSubmit(data, images);
    };

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            roomNumber: initialValues.roomNumber || "",
            roomType: initialValues.roomType || "standard",
            pricePerNight: initialValues.pricePerNight || "",
            maxGuests: initialValues.maxGuests || "",
            roomSize: initialValues.roomSize || "",
            floor: initialValues.floor || 1,
            bedType: initialValues.bedType || "double",
            amenities: initialValues.amenities || [],
            description: initialValues.description || "",
            isFeatured: initialValues.isFeatured || false,
        },
    });

    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className="space-y-8"
        >
            <div className="rounded-2xl bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-xl font-bold text-slate-800">
                    Basic Information
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {/* Room Number */}

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Room Number
                        </label>

                        <input
                            {...register("roomNumber", {
                                required: "Room Number is required",
                            })}
                            className="w-full rounded-xl border p-3 outline-none focus:border-blue-500"
                        />

                        <p className="mt-1 text-sm text-red-500">
                            {errors.roomNumber?.message}
                        </p>
                    </div>

                    {/* Room Type */}

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Room Type
                        </label>

                        <select
                            {...register("roomType")}
                            className="w-full rounded-xl border p-3"
                        >
                            {ROOM_TYPES.map((type) => (
                                <option
                                    key={type}
                                    value={type}
                                >
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Price */}

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Price Per Night
                        </label>

                        <input
                            type="number"
                            {...register("pricePerNight", {
                                required: "Price is required",
                                min: {
                                    value: 1,
                                    message: "Price must be greater than 0",
                                },
                            })}
                            className="w-full rounded-xl border p-3"
                        />
                        <p className="mt-1 text-sm text-red-500">
                            {errors.pricePerNight?.message}
                        </p>
                    </div>

                    {/* Guests */}

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Maximum Guests
                        </label>

                        <input
                            type="number"
                            {...register("maxGuests", {
                                required: "Maximum guests is required",
                                min: {
                                    value: 1,
                                    message: "Guests must be at least 1",
                                },
                            })}
                            className="w-full rounded-xl border p-3"
                        />
                        <p className="mt-1 text-sm text-red-500">
                            {errors.maxGuests?.message}
                        </p>
                    </div>

                    {/* Floor */}

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Floor
                        </label>

                        <input
                            type="number"
                            {...register("floor")}
                            className="w-full rounded-xl border p-3"
                        />
                    </div>

                    {/* Room Size */}

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Room Size (Sq Ft)
                        </label>

                        <input
                            type="number"
                            {...register("roomSize")}
                            className="w-full rounded-xl border p-3"
                        />
                    </div>

                    {/* Bed Type */}

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Bed Type
                        </label>

                        <select
                            {...register("bedType")}
                            className="w-full rounded-xl border p-3"
                        >
                            {BED_TYPES.map((bed) => (
                                <option
                                    key={bed}
                                    value={bed}
                                >
                                    {bed}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>
            </div>

            {/* Amenities */}

            <div className="rounded-2xl bg-white p-6 shadow-sm">
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
            </div>

            {/* Description */}

            <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-slate-800">
                    Description
                </h2>

                <textarea
                    rows={5}
                    {...register("description")}
                    className="w-full rounded-xl border p-3"
                />
            </div>
            {/* Images */}

            <ImageUploader
                images={images}
                setImages={setImages}
                existingImages={existingImages}
                onDeleteExistingImage={onDeleteExistingImage}
            />



            {/* Featured */}

            <div className="rounded-2xl bg-white p-6 shadow-sm">
                <Controller
                    name="isFeatured"
                    control={control}
                    render={({ field }) => (
                        <FeaturedToggle
                            checked={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />
            </div>

            {/* Buttons */}

            <div className="flex justify-end gap-4">

                <button
                    type="button"
                    onClick={onCancel}
                    className="rounded-xl border px-6 py-3 font-semibold hover:bg-slate-100"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
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