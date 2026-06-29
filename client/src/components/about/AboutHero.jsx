import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}

      <div className="relative z-10 text-center text-white max-w-4xl px-6">

        <div className="flex justify-center mb-6">

          <span className="flex items-center gap-2 bg-amber-400 text-black px-5 py-2 rounded-full font-semibold">

            <FaStar />

            Luxury Hotel Since 2015

          </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

          Experience Luxury

          <span className="text-amber-400 block">
            Like Never Before
          </span>

        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8">

          Welcome to <strong>Juhi Petals Hotel</strong>,
          where elegance meets comfort.
          Enjoy world-class hospitality,
          premium rooms and unforgettable memories.

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/rooms"
            className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-4 rounded-xl transition"
          >
            Explore Rooms
          </Link>

          <Link
            to="/contact"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;