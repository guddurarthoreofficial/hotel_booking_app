import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const Home = () => {
  return (
    <div className="max-w-md mx-auto mt-20 p-6">
      <Input
        label="Email"
        placeholder="Enter your email"
      />

      <Button>
        Test Button
      </Button>
    </div>
  );
};

export default Home;