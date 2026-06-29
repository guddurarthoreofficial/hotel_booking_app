
const RoomCardSkeleton = () => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-md">

      {/* Image */}

      <div className="relative h-64 overflow-hidden bg-gray-200 animate-pulse">

        <div className="absolute top-4 left-4 h-7 w-24 rounded-full bg-gray-300"></div>

        <div className="absolute top-4 right-4 h-7 w-24 rounded-full bg-gray-300"></div>

      </div>

      {/* Body */}

      <div className="p-6">

        {/* Title + Price */}

        <div className="flex justify-between items-start">

          <div>

            <div className="h-7 w-40 rounded bg-gray-200 animate-pulse"></div>

            <div className="mt-3 h-4 w-24 rounded bg-gray-200 animate-pulse"></div>

          </div>

          <div>

            <div className="h-7 w-20 rounded bg-gray-200 animate-pulse"></div>

            <div className="mt-2 h-3 w-12 rounded bg-gray-200 animate-pulse"></div>

          </div>

        </div>

        {/* Description */}

        <div className="mt-6">

          <div className="h-4 rounded bg-gray-200 animate-pulse"></div>

          <div className="mt-3 h-4 w-5/6 rounded bg-gray-200 animate-pulse"></div>

        </div>

        {/* Amenities */}

        <div className="flex gap-5 mt-6">

          <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>

          <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>

          <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>

          <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>

        </div>

        {/* Button */}

        <div className="mt-8 h-12 rounded-xl bg-gray-200 animate-pulse"></div>

      </div>

    </div>
  );
};

export default RoomCardSkeleton;

