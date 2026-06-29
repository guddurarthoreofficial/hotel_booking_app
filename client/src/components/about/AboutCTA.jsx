import { Link } from "react-router-dom";
import { FaArrowRight, FaHotel } from "react-icons/fa";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900">

      {/* Decorative Circles */}

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

        <div className="mx-auto h-24 w-24 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-5xl text-amber-400">

          <FaHotel />

        </div>

        <h2 className="mt-10 text-5xl md:text-6xl font-extrabold leading-tight">

          Ready For Your
          <span className="block text-amber-400">
            Luxury Stay?
          </span>

        </h2>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-200 leading-8">

          Whether you're planning a family vacation,
          a business trip, or a relaxing weekend getaway,
          Juhi Petals Hotel promises exceptional comfort,
          premium hospitality, and unforgettable memories.

        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <Link
            to="/rooms"
            className="group inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-black font-bold px-10 py-5 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
          >

            Book Your Room

            <FaArrowRight className="group-hover:translate-x-1 transition" />

          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-white hover:bg-white hover:text-black px-10 py-5 rounded-2xl transition-all duration-300"
          >

            Contact Us

          </Link>

        </div>

      </div>

    </section>
  );
};

export default AboutCTA;