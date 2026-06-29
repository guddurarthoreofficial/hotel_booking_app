import {
  FaCheckCircle,
  FaHotel,
  FaUtensils,
  FaWifi,
  FaCar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHotel />,
    title: "Luxury Rooms",
    desc: "Premium rooms with modern interiors and world-class comfort.",
  },
  {
    icon: <FaUtensils />,
    title: "Fine Dining",
    desc: "Delicious multi-cuisine food prepared by expert chefs.",
  },
  {
    icon: <FaWifi />,
    title: "High-Speed WiFi",
    desc: "Stay connected with complimentary high-speed internet.",
  },
  {
    icon: <FaCar />,
    title: "Airport Pickup",
    desc: "Comfortable airport pickup and drop service available.",
  },
];

const OurStory = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop"
              alt="Hotel"
              className="rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-amber-400 text-black rounded-3xl px-8 py-6 shadow-xl">

              <h2 className="text-4xl font-bold">
                10+
              </h2>

              <p className="font-medium">
                Years of Excellence
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="text-amber-500 font-semibold uppercase tracking-widest">
              Our Story
            </span>

            <h2 className="text-5xl font-bold mt-4 leading-tight">

              A Luxury Stay Designed
              Around You

            </h2>

            <p className="mt-8 text-gray-600 leading-8">

              At <strong>Juhi Petals Hotel</strong>,
              we believe every guest deserves an unforgettable experience.

              Our elegant rooms, premium facilities,
              exceptional hospitality and personalized services
              make every stay comfortable and memorable.

            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4"
                >

                  <div className="h-14 w-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="font-bold text-lg">

                      {item.title}

                    </h3>

                    <p className="text-gray-500 text-sm mt-1">

                      {item.desc}

                    </p>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-10 space-y-3">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500" />

                <span>24×7 Front Desk Support</span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500" />

                <span>Free Cancellation Available</span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500" />

                <span>100% Secure Online Payment</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurStory;