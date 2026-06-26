import { useState } from "react";

const RoomGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(
        images?.length
            ? images[0].url
            : "https://placehold.co/800x500?text=Juhi+Petals"
    );

    return (
        <div>

            {/* Main Image */}

            <img
                src={selectedImage}
                alt="Room"
                className="w-full h-[500px] object-cover rounded-2xl"
            />

            {/* Thumbnails */}

            <div className="grid grid-cols-4 gap-4 mt-5">

                {images?.map((image) => (
                    <img
                        key={image.public_id}
                        src={image.url}
                        alt=""
                        onClick={() => setSelectedImage(image.url)}
                        className="h-24 w-full object-cover rounded-lg cursor-pointer border-2 hover:border-amber-400 transition"
                    />
                ))}

            </div>

        </div>
    );
};

export default RoomGallery;