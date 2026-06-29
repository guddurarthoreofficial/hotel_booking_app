import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">

          Ready To Experience Luxury?

        </h2>

        <p className="mt-6 text-gray-300 text-lg leading-8">

          Discover elegant rooms, exceptional hospitality,
          secure online booking and unforgettable memories
          at Juhi Petals Hotel.

        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <Link
            to="/rooms"
            className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-4 rounded-xl transition flex items-center gap-3"
          >

            Book Now

            <FaArrowRight />

          </Link>

          <Link
            to="/about"
            className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
          >

            Learn More

          </Link>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;