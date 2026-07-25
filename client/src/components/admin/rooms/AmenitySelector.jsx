const AMENITIES = [
  "WiFi",
  "AC",
  "TV",
  "Parking",
  "Breakfast",
  "Balcony",
  "Mini Bar",
  "Room Service",
  "Swimming Pool",
  "Gym",
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
      <h3 className="mb-3 text-lg font-semibold">Amenities</h3>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {AMENITIES.map((amenity) => (
          <label
            key={amenity}
            className="flex cursor-pointer items-center gap-2 rounded-lg border p-3"
          >
            <input
              type="checkbox"
              checked={value.includes(amenity)}
              onChange={() => toggleAmenity(amenity)}
            />

            <span>{amenity}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AmenitySelector;