import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const { login, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login(formData);

    if (result.success) {
      toast.success(result.message);

      navigate("/");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <AuthLayout title="Login">

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <div>

          <label className="block mb-2 font-medium">
            Password
          </label>

          <div className="relative">

            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

        </div>


        <div className="flex justify-between text-sm">

          <label className="flex items-center gap-2">

            <input type="checkbox" />

            Remember me

          </label>

          <button
            type="button"
            className="text-amber-500 hover:underline"
          >
            Forgot Password?
          </button>

        </div>

        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Login"}
        </Button>
        <p className="text-center mt-8 text-gray-600">

          Don't have an account?

          <span
            onClick={() => navigate("/register")}
            className="text-amber-500 font-semibold ml-2 cursor-pointer hover:underline"
          >
            Create Account
          </span>

        </p>

      </form>

    </AuthLayout>
  );
};

export default Login;