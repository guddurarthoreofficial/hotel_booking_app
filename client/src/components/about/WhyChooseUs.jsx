import {
  FaBed,
  FaConciergeBell,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBed size={34} />,
    title: "Luxury Accommodation",
    description:
      "Spacious and beautifully designed rooms equipped with premium amenities for maximum comfort.",
  },
  {
    icon: <FaConciergeBell size={34} />,
    title: "Exceptional Service",
    description:
      "Our professional staff is available 24×7 to ensure every guest enjoys a memorable stay.",
  },
  {
    icon: <FaShieldAlt size={34} />,
    title: "Safe & Secure",
    description:
      "Advanced security systems, CCTV surveillance and secure online booking for complete peace of mind.",
  },
  {
    icon: <FaLeaf size={34} />,
    title: "Eco Friendly",
    description:
      "We believe in sustainable hospitality with environmentally responsible practices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-amber-500 font-semibold uppercase tracking-[3px]">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Experience Hospitality
            Beyond Expectations
          </h2>

          <p className="text-gray-500 mt-6 leading-8">
            Every detail at Juhi Petals Hotel is carefully crafted
            to provide luxury, comfort, and unforgettable memories
            for every guest.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-transparent hover:border-amber-400"
            >

              <div className="h-20 w-20 rounded-2xl bg-amber-100 text-amber-500 flex items-center justify-center text-3xl group-hover:bg-amber-400 group-hover:text-white transition">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mt-8">

                {feature.title}

              </h3>

              <p className="text-gray-500 mt-4 leading-7">

                {feature.description}

              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;