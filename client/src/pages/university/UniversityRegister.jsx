import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UniversityRegister = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "UNIVERSITY",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, role } = formData;

    // Validation
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5055/api/auth/register",
        { name, email, password, role }
      );

      toast.success(res.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "UNIVERSITY",
      });

      setTimeout(() => {
        navigate("/university/login");
      }, 2000);

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-teal-500/30 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/10 
                      border border-white/20 shadow-2xl 
                      rounded-2xl w-full max-w-md p-8 text-white">

        <h2 className="text-2xl font-bold text-center mb-2">
          University Registration
        </h2>

        <p className="text-center text-sm text-gray-300 mb-6">
          Register to request access
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="University Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 
                       border border-white/30 text-white 
                       placeholder-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-emerald-400"
          />

          <input
            type="email"
            name="email"
            placeholder="University Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 
                       border border-white/30 text-white 
                       placeholder-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-emerald-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 
                       border border-white/30 text-white 
                       placeholder-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-emerald-400"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 
                       border border-white/30 text-white 
                       placeholder-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-emerald-400"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-lg 
                       bg-gradient-to-r from-emerald-500 to-teal-600 
                       hover:from-emerald-600 hover:to-teal-700 
                       transition font-semibold shadow-lg"
          >
            Register
          </button>

        </form>

        <p className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <Link
            to="/university/login"
            className="text-emerald-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default UniversityRegister;