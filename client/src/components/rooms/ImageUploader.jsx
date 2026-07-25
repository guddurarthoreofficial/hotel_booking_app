import { useRef } from "react";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";

const ImageUploader = ({
  images = [],
  setImages,
  existingImages = [],
  onDeleteExistingImage,
}) => {
  const inputRef = useRef(null);

  const handleSelect = (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...previews]);
  };

  const removeNewImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Room Images
      </h2>

      <div
        onClick={() => inputRef.current.click()}
        className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 transition hover:border-blue-600 hover:bg-blue-50"
      >
        <FaCloudUploadAlt className="mb-4 text-5xl text-blue-600" />

        <p className="font-semibold">
          Click to upload images
        </p>

        <span className="mt-2 text-sm text-slate-500">
          JPG, PNG, WEBP
        </span>
      </div>

      <input
        ref={inputRef}
        multiple
        type="file"
        accept="image/*"
        hidden
        onChange={handleSelect}
      />

      {(existingImages.length > 0 || images.length > 0) && (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

          {existingImages.map((img) => (
            <div
              key={img.public_id}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={img.url}
                alt=""
                className="h-40 w-full object-cover"
              />

              <button
                type="button"
                onClick={() => onDeleteExistingImage(img.public_id)}
                className="absolute right-2 top-2 rounded-full bg-red-600 p-2 text-white opacity-0 transition group-hover:opacity-100"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={img.preview}
                alt=""
                className="h-40 w-full object-cover"
              />

              <button
                type="button"
                onClick={() => removeNewImage(index)}
                className="absolute right-2 top-2 rounded-full bg-red-600 p-2 text-white opacity-0 transition group-hover:opacity-100"
              >
                <FaTrash />
              </button>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default ImageUploader;