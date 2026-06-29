import {
  FaHotel,
  FaUsers,
  FaConciergeBell,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaHotel />,
    number: "150+",
    title: "Luxury Rooms",
  },
  {
    icon: <FaUsers />,
    number: "5000+",
    title: "Happy Guests",
  },
  {
    icon: <FaConciergeBell />,
    number: "24/7",
    title: "Reception",
  },
  {
    icon: <FaAward />,
    number: "10+",
    title: "Years Experience",
  },
];

const HotelStats = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-amber-400 font-semibold">
            Our Achievements
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">

            Trusted by Thousands
            <span className="text-amber-400">
              {" "}of Guests
            </span>

          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto leading-8">

            Our commitment to excellence has earned
            the trust of thousands of travelers from
            around the world.

          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {stats.map((item) => (

            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/10 p-10 text-center hover:scale-105 transition duration-500"
            >

              <div className="mx-auto h-20 w-20 rounded-full bg-amber-400 flex items-center justify-center text-4xl text-black">

                {item.icon}

              </div>

              <h3 className="text-5xl font-extrabold text-white mt-8">

                {item.number}

              </h3>

              <p className="text-gray-300 mt-4 text-lg">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default HotelStats;