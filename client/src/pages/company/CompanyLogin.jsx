import { useState } from "react";
import { Link } from "react-router-dom";


const CompanyLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900">

      {/* Background Blur Circle Effect */}
      <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Login Card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/10 
                      border border-white/20 shadow-2xl 
                      rounded-2xl w-full max-w-md p-8 text-white">

        <h2 className="text-2xl font-bold text-center mb-2">
          Company Portal
        </h2>

        <p className="text-center text-sm text-gray-300 mb-6">
          Secure Certificate Verification Access
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm mb-1">
              Company Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="company@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 
                         border border-white/30 text-white 
                         placeholder-gray-300 focus:outline-none 
                         focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 
                         border border-white/30 text-white 
                         placeholder-gray-300 focus:outline-none 
                         focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg 
                       bg-gradient-to-r from-blue-500 to-indigo-600 
                       hover:from-blue-600 hover:to-indigo-700 
                       transition font-semibold shadow-lg"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-300 mt-6">Don't have an account?<Link to={"/company/register"} className="text-blue-400 hover:underline">Register</Link>
</p>

        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 Certificate Verification System
        </p>

      </div>
    </div>
  );
};

export default CompanyLogin;
