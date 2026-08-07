import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

import AuthLayout from "../../layouts/AuthLayout";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/ui/Button";

const Register = () => {
  const navigate = useNavigate();
  const { register, loading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    const result = await register({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    });

    if (result.success) {
      toast.success(result.message);
      navigate("/");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto py-2">
        {/* Heading */}
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Create Account ✨
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Join Juhi Petals and start managing your hotel.
          </p>
        </div>

        {/* Name */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-12 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-12 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 text-xs text-slate-600">
          <input
            type="checkbox"
            required
            className="mt-0.5 accent-amber-500"
          />
          <span>
            I agree to the{" "}
            <span className="font-semibold text-amber-500">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="font-semibold text-amber-500">
              Privacy Policy
            </span>
          </span>
        </label>

        {/* Button */}
        <Button
          type="submit"
          disabled={loading}
          className="h-11 w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-base font-semibold shadow-md hover:shadow-lg mt-2"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>

        {/* Security */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
          <p className="text-center text-xs text-slate-600">
            🔒 Your information is encrypted and securely stored.
          </p>
        </div>

        {/* Login */}
        <div className="border-t border-slate-200 pt-3 text-center">
          <p className="text-xs text-slate-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-semibold text-amber-500 hover:text-amber-600 hover:underline"
            >
              Login Now
            </button>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;