import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

const ContactInfo = () => {
  const socials = [
    {
      icon: <FaGlobe />,
      link: "https://guddurarthoreofficial.github.io/portfolio/",
    },
    {
      icon: <FaGithub />,
      link: "#",
    },
    {
      icon: <FaLinkedin />,
      link: "#",
    },
    {
      icon: <FaInstagram />,
      link: "#",
    },
    {
      icon: <FaFacebook />,
      link: "#",
    },
  ];

  return (
    <div className="bg-slate-900 rounded-3xl text-white p-8 shadow-2xl h-full">

      <h2 className="text-3xl font-bold">
        Contact Information
      </h2>

      <p className="text-gray-400 mt-3">
        We'd love to hear from you.
      </p>

      <div className="space-y-8 mt-10">

        <div className="flex gap-5">

          <FaPhoneAlt className="text-amber-400 text-xl mt-1" />

          <div>

            <h3 className="font-bold">
              Phone
            </h3>

            <p className="text-gray-400">
              +91 9523605578
            </p>

          </div>

        </div>

        <div className="flex gap-5">

          <FaEnvelope className="text-amber-400 text-xl mt-1" />

          <div>

            <h3 className="font-bold">
              Email
            </h3>

            <p className="text-gray-400">
              guddur748081@gmail.com
            </p>

          </div>

        </div>

        <div className="flex gap-5">

          <FaMapMarkerAlt className="text-amber-400 text-xl mt-1" />

          <div>

            <h3 className="font-bold">
              Address
            </h3>

            <p className="text-gray-400">
              West Champaran,
              Bihar, India
            </p>

          </div>

        </div>

        <div className="flex gap-5">

          <FaClock className="text-amber-400 text-xl mt-1" />

          <div>

            <h3 className="font-bold">
              Working Hours
            </h3>

            <p className="text-gray-400">
              Open 24 Hours
            </p>

          </div>

        </div>

      </div>

      <div className="flex gap-4 mt-12">

        {socials.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="h-12 w-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black transition flex items-center justify-center"
          >
            {item.icon}
          </a>
        ))}

      </div>

    </div>
  );
};

export default ContactInfo;