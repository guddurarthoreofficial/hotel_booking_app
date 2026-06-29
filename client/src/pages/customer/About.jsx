import MainLayout from "../../layouts/MainLayout";
import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import WhyChooseUs from "../../components/about/WhyChooseUs";
import HotelStats from "../../components/about/HotelStats";
import DeveloperSection from "../../components/about/DeveloperSection";
import AboutCTA from "../../components/about/AboutCTA";


const About = () => {
  return (
    <MainLayout hero>

      <>
        <AboutHero />

        <OurStory />

        <WhyChooseUs />

        <HotelStats />

        <DeveloperSection />

        <AboutCTA />
      </>

    </MainLayout>
  );
};

export default About;