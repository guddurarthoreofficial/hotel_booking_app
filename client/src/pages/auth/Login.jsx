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

      switch (result.user.role) {
        case "admin":
          navigate("/admin");
          break;

        case "manager":
          navigate("/manager");
          break;

        case "receptionist":
          navigate("/receptionist");
          break;

        default:
          navigate("/");
      }
    } else {
      toast.error(result.message);
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto py-2">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Welcome Back 👋
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Login to continue managing your hotel.
          </p>
        </div>

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
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
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-amber-500"
            >
              {showPassword ? (
                <FaEyeSlash size={16} />
              ) : (
                <FaEye size={16} />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex cursor-pointer items-center gap-1.5 text-slate-600">
            <input
              type="checkbox"
              className="accent-amber-500"
            />
            Remember Me
          </label>

          <button
            type="button"
            className="font-medium text-amber-500 transition hover:text-amber-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="h-11 w-full rounded-xl bg-amber-500 text-base font-semibold transition-all duration-300 hover:bg-amber-600 hover:shadow-lg mt-2"
        >
          {loading ? "Signing In..." : "Login"}
        </Button>

        <div className="rounded-xl border border-amber-100 bg-amber-50 px-3 py-2 text-center">
          <p className="text-xs text-slate-600">
            🔒 Your account is protected with secure authentication.
          </p>
        </div>

        <p className="text-center text-xs text-slate-600 pt-1">
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="ml-1 cursor-pointer font-semibold text-amber-500 transition hover:text-amber-600 hover:underline"
          >
            Create Account
          </span>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;