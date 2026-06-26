import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/home/Hero";
import FeaturedRooms from "../../components/home/FeaturedRooms";

const Home = () => {
  return (
    <MainLayout hero>

      <Hero />

      <FeaturedRooms />

    </MainLayout>
  );
};

export default Home;