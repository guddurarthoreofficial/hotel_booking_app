import { FaHotel, FaStar } from "react-icons/fa";
import Card from "../components/ui/Card";

const AuthLayout = ({ title, children }) => {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center flex items-center justify-center px-6 py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920&q=80')",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}

      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}

        <div className="text-center mb-8">

          <div className="mx-auto w-20 h-20 rounded-3xl bg-amber-400 flex items-center justify-center shadow-2xl">

            <FaHotel className="text-4xl text-black" />

          </div>

          <h1 className="text-4xl font-bold text-white mt-5">

            Juhi Petals

          </h1>

          <div className="flex justify-center gap-1 mt-3 text-amber-400">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>

          <p className="text-gray-300 mt-3">
            Luxury Hotel Experience
          </p>

        </div>

        <Card className="backdrop-blur-sm">

          <h2 className="text-3xl font-bold text-center mb-8">

            {title}

          </h2>

          {children}

        </Card>

      </div>

    </div>
  );
};

export default AuthLayout;