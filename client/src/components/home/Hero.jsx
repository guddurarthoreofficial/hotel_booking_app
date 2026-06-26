import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/images/hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

        <div className="max-w-2xl">

          <span className="text-amber-400 uppercase tracking-[8px] font-semibold">
            Welcome To
          </span>

          <h1 className="text-7xl font-extrabold text-white mt-5">
            Juhi Petals
          </h1>

          <h2 className="text-3xl text-white mt-5 font-light">
            Luxury Stay,
            <span className="text-amber-400">
              {" "}Memorable Moments
            </span>
          </h2>

          <p className="text-gray-300 mt-8 leading-8 text-lg">
            Experience premium hospitality with luxurious
            rooms, delicious cuisine and unforgettable
            memories.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/rooms"
              className="bg-amber-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-amber-300 duration-300"
            >
              Explore Rooms
            </Link>

            <Link
              to="/login"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black duration-300"
            >
              Book Now
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;