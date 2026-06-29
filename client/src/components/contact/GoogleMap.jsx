const GoogleMap = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="uppercase tracking-[3px] text-amber-500 font-semibold">
            Find Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Visit Our Hotel
          </h2>

        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=West+Champaran+Bihar&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          />

        </div>

      </div>

    </section>
  );
};

export default GoogleMap;