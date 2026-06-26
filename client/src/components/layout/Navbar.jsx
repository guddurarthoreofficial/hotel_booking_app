import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6">

        <h1 className="text-3xl font-bold text-white">
          Juhi Petals
        </h1>

        <div className="flex gap-8 text-white">

          Home

          Rooms

          About

          Contact

        </div>

      </div>

    </nav>
  );
};

export default Navbar;