import React, { useState } from "react";

const UniversityLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative h-screen w-full">

      {/* Fullscreen Background Image */}
      <img
        src="/images/university_lg.png"
        alt="University Background"
        className="absolute inset-0 w-full h-full object-fill"
      />

      {/* Overlay (optional dark overlay for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Login Card */}
      <div className="relative  z-10 h-full flex items-center justify-end pr-12 ml-20">
        <div className="w-[380px] rounded-2xl p-8
                        bg-white/10 backdrop-blur-lg
                        border border-white/20
                        shadow-2xl text-white">

          <h2 className="text-center text-xl font-semibold mb-8">
            Login
          </h2>

          {/* Username */}
          <div className="mb-5">
            <label className="text-sm text-white/80">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              className="w-full bg-transparent border border-white/30
                         rounded-md px-4 py-2 mt-1
                         text-white placeholder-white/60
                         focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-8">
            <label className="text-sm text-white/80">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent border border-white/30
                           rounded-md px-4 py-2 pr-10
                           text-white placeholder-white/60
                           focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70"
              >
                👁
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700
                               text-white py-2 rounded-md font-medium">
              Login
            </button>
            <button className="flex-1 bg-indigo-500 hover:bg-indigo-600
                               text-white py-2 rounded-md font-medium">
              Register
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UniversityLogin;
