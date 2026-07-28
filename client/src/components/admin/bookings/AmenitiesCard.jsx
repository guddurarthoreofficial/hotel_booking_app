import {
  Coffee,
  Dumbbell,
  Wifi,
  Tv,
  Waves,
  UtensilsCrossed,
  Wine,
  Bath,
  Car,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const amenityIcons = {
  Breakfast: Coffee,
  "Swimming Pool": Waves,
  "Room Service": UtensilsCrossed,
  Gym: Dumbbell,
  Wifi: Wifi,
  TV: Tv,
  "Mini Bar": Wine,
  Bathtub: Bath,
  Parking: Car,
  Security: ShieldCheck,
};

const AmenitiesCard = ({ amenities = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-6">

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Room Amenities
        </h2>

        <p className="text-sm text-gray-500">
          Facilities available with this room
        </p>
      </div>

      {amenities.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No amenities available.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">

          {amenities.map((amenity) => {
            const Icon =
              amenityIcons[amenity] || CheckCircle2;

            return (
              <div
                key={amenity}
                className="border rounded-xl p-4 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-blue-50"
              >
                <Icon
                  size={28}
                  className="text-blue-600 mb-3"
                />

                <span className="font-medium text-gray-700 text-sm">
                  {amenity}
                </span>
              </div>
            );
          })}

        </div>
      )}

    </div>
  );
};

export default AmenitiesCard;