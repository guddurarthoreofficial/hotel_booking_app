import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";
import toast from "react-hot-toast";

import MainLayout from "../../layouts/MainLayout";
import { useAuth } from "../../context/AuthContext";

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
    <MainLayout>
      <section className="min-h-screen flex items-center justify-center bg-slate-100 py-16">

        <div className="bg-white shadow-2xl rounded-3xl w-full max-w-lg p-10">

          <div className="text-center">

            <div className="mx-auto w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center">

              <FaUserPlus className="text-3xl text-black" />

            </div>

            <h1 className="text-4xl font-bold mt-6">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Join Juhi Petals Hotel
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 mt-10"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-amber-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-amber-400 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-amber-400 outline-none"
            />

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border rounded-xl p-4 pr-14 focus:ring-2 focus:ring-amber-400 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-5 top-5 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border rounded-xl p-4 pr-14 focus:ring-2 focus:ring-amber-400 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-5 top-5 text-gray-500"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            <button
              disabled={loading}
              className="w-full bg-amber-400 hover:bg-amber-300 rounded-xl py-4 font-bold transition"
            >
              {loading
                ? "Creating Account..."
                : "Register"}
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </section>
    </MainLayout>
  );
};

export default Register;