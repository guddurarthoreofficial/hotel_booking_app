const RoomGallery = ({ images = [] }) => {
  const image =
    images.length > 0
      ? images[0].url
      : "https://placehold.co/800x500?text=No+Image";

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <img
        src={image}
        alt="Room"
        className="h-[350px] w-full object-cover"
      />
    </div>
  );
};

export default RoomGallery;