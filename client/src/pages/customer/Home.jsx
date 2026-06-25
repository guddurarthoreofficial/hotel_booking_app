import { useAuth } from "../../context/AuthContext";
import AuthLayout from "../../layouts/AuthLayout";

const Home = () => {



  const {
    user,
    token,
    loading,
    isAuthenticated
  } = useAuth();

  console.log(user);
  console.log(token);
  console.log(loading);
  console.log(isAuthenticated);
  return (
    <AuthLayout title="Hotel Booking">
      <p className="text-center">
        Layout Working



      </p>
    </AuthLayout>
  );
};

export default Home;