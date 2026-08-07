import { FaHotel, FaStar, FaCheckCircle } from "react-icons/fa";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')",
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/70 backdrop-blur-[2px]">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-8 py-8">

          {/* LEFT SIDE */}
          <div className="hidden w-1/2 pr-10 text-white lg:flex lg:flex-col lg:justify-center">

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-400 shadow-xl">
              <FaHotel className="text-5xl text-black" />
            </div>

            <h1 className="text-5xl font-extrabold">              Juhi Petals
            </h1>

            <div className="mt-5 flex gap-1 text-amber-400 text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="mt-5 max-w-md text-lg leading-8 text-gray-300">
              Experience luxury hospitality with seamless hotel
              management, secure bookings and premium guest services.
            </p>

            <div className="mt-8 space-y-4">

              <Feature text="Premium Luxury Rooms" />

              <Feature text="Instant Online Booking" />

              <Feature text="Secure Payment Gateway" />

              <Feature text="24×7 Reception Support" />

              <Feature text="Professional Hotel Dashboard" />

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex w-full justify-center lg:w-1/2">

            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

              {children}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

const Feature = ({ text }) => (
  <div className="flex items-center gap-4">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-black">
      <FaCheckCircle />
    </div>

    <span className="text-base text-gray-200">      {text}
    </span>
  </div>
);

export default AuthLayout;