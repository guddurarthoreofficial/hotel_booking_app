import { useState, useEffect } from "react";
import { Image as ImageIcon } from "lucide-react";

const ImageGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0].url);
    }
  }, [images]);

  if (!images.length) {
    return (
      <div className="bg-white rounded-2xl shadow-md border h-[420px] flex flex-col items-center justify-center text-gray-400">
        <ImageIcon size={70} />
        <p className="mt-3 text-lg font-medium">No Image Available</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md border overflow-hidden">

      {/* Main Image */}

      <div className="h-[420px] bg-gray-100 overflow-hidden">
        <img
          src={selectedImage}
          alt="Room"
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnail Images */}

      <div className="flex gap-3 overflow-x-auto p-4">

        {images.map((image) => (
          <button
            key={image._id}
            onClick={() => setSelectedImage(image.url)}
            className={`w-24 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0
              ${
                selectedImage === image.url
                  ? "border-blue-600"
                  : "border-gray-200 hover:border-blue-400"
              }`}
          >
            <img
              src={image.url}
              alt="Thumbnail"
              className="w-full h-full object-cover"
            />
          </button>
        ))}

      </div>
    </div>
  );
};

export default ImageGallery;