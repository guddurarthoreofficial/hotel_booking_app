import { useAuth } from "../../context/AuthContext";
import AuthLayout from "../../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";


const Home = () => {

    const navigate = useNavigate();

    const { logout } = useAuth();

    const {
      user,
      token,
      loading,
      isAuthenticated
    } = useAuth();

    // console.log(user);
    // console.log(token);
    // console.log(loading);
    // console.log( "guddu"+isAuthenticated);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AuthLayout title="Hotel Booking">
      <p className="text-center">
        Layout Working
        <br />
        <button onClick={handleLogout} className="m-4  bg-blend-color"> logout </button>

      </p>
    </AuthLayout>
  );
};

export default Home;