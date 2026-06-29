import { useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Backend API baad me connect karenge

    setTimeout(() => {
      toast.success("Message sent successfully 🎉");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold">
        Send Us A Message
      </h2>

      <p className="text-gray-500 mt-3">
        Fill out the form and we'll get back to you shortly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 mt-8"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-amber-400 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-amber-400 outline-none"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-amber-400 outline-none"
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border rounded-xl p-4 resize-none focus:ring-2 focus:ring-amber-400 outline-none"
        />

        <button
          disabled={loading}
          className="w-full bg-amber-400 hover:bg-amber-300 rounded-xl py-4 font-bold flex justify-center items-center gap-3 transition"
        >
          <FaPaperPlane />

          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

    </div>
  );
};

export default ContactForm;