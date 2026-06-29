import { FaHotel, FaStar } from "react-icons/fa";

const FooterLogo = () => {
  return (
    <div>

      <div className="flex items-center gap-4">

        <div className="h-14 w-14 rounded-2xl bg-amber-400 flex items-center justify-center">

          <FaHotel className="text-2xl text-slate-900" />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Juhi Petals
          </h2>

          <p className="text-sm text-gray-400">
            Luxury Hotel
          </p>

        </div>

      </div>

      <p className="mt-6 text-gray-400 leading-7">

        Experience luxury, comfort and world-class hospitality.
        Whether you're traveling for business or leisure,
        Juhi Petals ensures an unforgettable stay.

      </p>

      <div className="flex gap-1 mt-6 text-amber-400">

        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}

      </div>

    </div>
  );
};

export default FooterLogo;