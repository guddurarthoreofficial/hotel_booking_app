import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const FooterContact = () => {
  return (
    <div>

      <h3 className="text-xl font-bold text-white mb-6">
        Contact
      </h3>

      <div className="space-y-5">

        <div className="flex items-start gap-4">

          <FaPhoneAlt className="text-amber-400 mt-1" />

          <div>
            <p className="text-gray-400">+91 9523605578</p>
          </div>

        </div>

        <div className="flex items-start gap-4">

          <FaEnvelope className="text-amber-400 mt-1" />

          <div>
            <p className="text-gray-400">
              guddur748081@gmail.com
            </p>
          </div>

        </div>

        <div className="flex items-start gap-4">

          <FaMapMarkerAlt className="text-amber-400 mt-1" />

          <div>
            <p className="text-gray-400">
              West Champaran,
              Bihar, India
            </p>
          </div>

        </div>

        <div className="flex items-start gap-4">

          <FaClock className="text-amber-400 mt-1" />

          <div>
            <p className="text-gray-400">
              Open 24 × 7
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default FooterContact;