import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer:
      "Check-in starts at 2:00 PM and check-out is until 11:00 AM.",
  },
  {
    question: "Do you provide free Wi-Fi?",
    answer:
      "Yes, complimentary high-speed Wi-Fi is available throughout the hotel.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, cancellations are allowed according to our cancellation policy.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "We accept Cash, UPI, Credit/Debit Cards and Razorpay online payments.",
  },
  {
    question: "Do you provide airport pickup?",
    answer:
      "Yes, airport pickup and drop services are available on request.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[3px] text-amber-500 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center px-8 py-6 text-left font-semibold text-lg"
              >

                {item.question}

                {active === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </button>

              {active === index && (

                <div className="px-8 pb-6 text-gray-600 leading-7">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;