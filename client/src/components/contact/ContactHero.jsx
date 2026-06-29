import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section
      className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center text-white px-6 max-w-4xl">

        <h1 className="text-6xl font-extrabold">
          Contact Us
        </h1>

        <p className="mt-6 text-xl text-gray-200 leading-8">
          Have questions or need assistance?
          Our team is always ready to help you.
        </p>

        <div className="mt-10">

          <Link
            to="/rooms"
            className="bg-amber-400 hover:bg-amber-300 text-black px-8 py-4 rounded-xl font-bold transition"
          >
            Book Your Stay
          </Link>

        </div>

      </div>

    </section>
  );
};

export default ContactHero;