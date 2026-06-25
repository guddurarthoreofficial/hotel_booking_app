import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  console.log(user);

  return <h1>Home Page</h1>;
};

export default Home;