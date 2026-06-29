import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="border-t border-slate-700 mt-16 pt-8">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        <div className="flex gap-4">

          <a
            href="https://guddurarthoreofficial.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
            className="h-11 w-11 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-black transition flex items-center justify-center"
          >
            <FaGlobe />
          </a>

          <a href="#" className="h-11 w-11 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-black transition flex items-center justify-center">
            <FaGithub />
          </a>

          <a href="#" className="h-11 w-11 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-black transition flex items-center justify-center">
            <FaLinkedin />
          </a>

          <a href="#" className="h-11 w-11 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-black transition flex items-center justify-center">
            <FaInstagram />
          </a>

          <a href="#" className="h-11 w-11 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-black transition flex items-center justify-center">
            <FaFacebook />
          </a>

        </div>

        <div className="text-center text-gray-400 text-sm">

          © {new Date().getFullYear()} Juhi Petals Hotel.
          All Rights Reserved.

          <div className="mt-2 flex justify-center items-center gap-2">

            Designed & Developed with

            <FaHeart className="text-red-500" />

            by <span className="text-amber-400 font-semibold">Guddu Kumar</span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FooterBottom;