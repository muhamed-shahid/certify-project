import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UniversityLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData,setFormData]= useState({
    email:"",
    password:"",
    role:"UNIVERSITY"
  })

  const navigate = useNavigate()

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value,

    })

  }


  const handleSubmit = async (e)=>{

      e.preventDefault()

      try{
        const res = await axios.post("http://localhost:5055/api/auth/login",formData)
        localStorage.setItem("token",res.data.token)
        toast.success("Login successfull")
        navigate("/university/dashboard")

      

    } catch(err){
      console.log(err);
      toast.error(err.response?.data?.message||"Login failed")
      
    }}

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

<form onSubmit={handleSubmit}>
            {/* Username */}
          <div className="mb-5">
            <label className="text-sm text-white/80">User Name</label>
            <input
              type="text"
              placeholder="User Name/Email"
              onChange={handleChange}
              value={formData.email}
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
                value={formData.password}
                onChange={handleChange}
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
            <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700
                               text-white py-2 rounded-md font-medium">
              Login
            </button>
            <button onClick={()=>navigate("university/register")} className="flex-1 bg-indigo-500 hover:bg-indigo-600
                               text-white py-2 rounded-md font-medium">
              Register
            </button>
          </div>
</form>

        </div>
      </div>
    </div>
  );
};

export default UniversityLogin;
