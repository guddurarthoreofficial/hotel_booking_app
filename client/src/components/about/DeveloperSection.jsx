import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DeveloperSection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-amber-500 font-semibold">
            Meet The Developer
          </span>

          <h2 className="text-5xl font-bold mt-5">

            Crafted With ❤️ Using
            <span className="text-amber-500">
              {" "}MERN Stack
            </span>

          </h2>

        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[40px] overflow-hidden shadow-2xl">

          <div className="grid lg:grid-cols-3">

            {/* Left */}

            <div className="bg-amber-400 flex flex-col justify-center items-center p-12">

              <div className="h-44 w-44 rounded-full bg-white flex items-center justify-center text-7xl font-bold text-slate-900 shadow-xl">

                GK

              </div>

              <h2 className="text-3xl font-bold mt-8">

                Guddu Kumar

              </h2>

              <p className="mt-2 text-center font-medium">

                Full Stack MERN Developer

              </p>

            </div>

            {/* Right */}

            <div className="lg:col-span-2 p-12 text-white">

              <h3 className="text-3xl font-bold">

                Passionate About Building
                Modern Web Applications

              </h3>

              <p className="mt-6 text-gray-300 leading-8">

                I specialize in developing scalable,
                responsive and production-ready
                full-stack applications using
                React.js, Node.js, Express.js
                and MongoDB.

                This Hotel Booking Platform
                is designed as a complete
                enterprise-level MERN application
                with authentication,
                booking management,
                Razorpay payment,
                invoice generation,
                profile management,
                and admin dashboard.

              </p>

              {/* Contact */}

              <div className="grid md:grid-cols-2 gap-6 mt-10">

                <div className="flex items-center gap-3">

                  <FaEnvelope className="text-amber-400" />

                  guddur748081@gmail.com

                </div>

                <div className="flex items-center gap-3">

                  <FaPhoneAlt className="text-amber-400" />

                  +91 9523605578

                </div>

                <div className="flex items-center gap-3">

                  <FaMapMarkerAlt className="text-amber-400" />

                  West Champaran, Bihar

                </div>

              </div>

              {/* Social */}

              <div className="flex flex-wrap gap-5 mt-12">

                <a
                  href="https://guddurarthoreofficial.github.io/portfolio/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-14 w-14 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black transition flex items-center justify-center text-2xl"
                >
                  <FaGlobe />
                </a>

                <a
                  href="#"
                  className="h-14 w-14 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black transition flex items-center justify-center text-2xl"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="h-14 w-14 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black transition flex items-center justify-center text-2xl"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  className="h-14 w-14 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black transition flex items-center justify-center text-2xl"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="h-14 w-14 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black transition flex items-center justify-center text-2xl"
                >
                  <FaFacebook />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DeveloperSection;