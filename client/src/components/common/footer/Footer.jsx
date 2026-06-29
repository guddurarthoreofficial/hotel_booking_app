import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          <FooterLogo />

          <FooterLinks />

          <FooterContact />

          <FooterNewsletter />

        </div>

        <FooterBottom />

      </div>

    </footer>
  );
};

export default Footer;