import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoomGallery = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback image if array is empty
  const defaultImage = "https://placehold.co/800x500?text=No+Image";
  const hasImages = images.length > 0;
  const currentImage = hasImages ? images[currentIndex]?.url : defaultImage;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image View */}
      <div className="relative h-[350px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow">
        <img
          src={currentImage}
          alt={`Room image ${currentIndex + 1}`}
          className="h-full w-full object-cover transition-all duration-300"
        />

        {/* Controls - Only visible when multiple images exist */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/75"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/75"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Counter Badge */}
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails Bar */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, index) => (
            <button
              key={img._id || index}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg transition-all ${
                currentIndex === index
                  ? "ring-2 ring-indigo-600 ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img.url}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomGallery;