import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children, hero = false }) => {
  return (
    <>
      <Navbar />

      <main className={hero ? "" : "pt-24 min-h-screen"}>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;