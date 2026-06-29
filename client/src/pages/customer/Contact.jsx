import MainLayout from "../../layouts/MainLayout";

import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import GoogleMap from "../../components/contact/GoogleMap";
import FAQ from "../../components/contact/FAQ";
import ContactCTA from "../../components/contact/ContactCTA";

const Contact = () => {
  return (
    <MainLayout hero>

      {/* Hero */}
      <ContactHero />

      {/* Contact Form + Contact Info */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            <ContactForm />

            <ContactInfo />

          </div>

        </div>

      </section>

      {/* Google Map */}
      <GoogleMap />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <ContactCTA />

    </MainLayout>
  );
};

export default Contact;