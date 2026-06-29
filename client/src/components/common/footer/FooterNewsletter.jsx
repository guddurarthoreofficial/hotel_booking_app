import { useState } from "react";
import toast from "react-hot-toast";

const FooterNewsletter = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Subscribed Successfully 🎉");

    setEmail("");
  };

  return (
    <div>

      <h3 className="text-xl font-bold text-white mb-6">
        Newsletter
      </h3>

      <p className="text-gray-400 mb-6 leading-7">

        Subscribe to receive the latest offers,
        exclusive deals and hotel updates.

      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="email"
          required
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Enter your email"
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-amber-400"
        />

        <button
          className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-3 rounded-xl transition"
        >
          Subscribe
        </button>

      </form>

    </div>
  );
};

export default FooterNewsletter;