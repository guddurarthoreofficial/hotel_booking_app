
const DEFAULT_AMENITIES = [
  "WiFi",
  "AC",
  "TV",
  "Mini Bar",
  "Balcony",
  "Parking",
  "Breakfast",
  "Swimming Pool",
  "Gym",
  "Jacuzzi",
];

const AmenitySelector = ({ value = [], onChange }) => {
  const toggleAmenity = (amenity) => {
    if (value.includes(amenity)) {
      onChange(value.filter((item) => item !== amenity));
    } else {
      onChange([...value, amenity]);
    }
  };

  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-slate-700">
        Amenities
      </label>

      <div className="flex flex-wrap gap-3">
        {DEFAULT_AMENITIES.map((amenity) => {
          const selected = value.includes(amenity);

          return (
            <button
              key={amenity}
              type="button"
              onClick={() => toggleAmenity(amenity)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition
                ${
                  selected
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                }`}
            >
              {amenity}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AmenitySelector;