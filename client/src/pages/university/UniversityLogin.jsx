import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate ,Link} from "react-router-dom";

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
    <div className="relative min-h-screen flex items-center justify-center 
                  bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900">

    {/* Background Glow Effects */}
    <div className="absolute w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl top-10 left-10"></div>
    <div className="absolute w-96 h-96 bg-teal-500/30 rounded-full blur-3xl bottom-10 right-10"></div>

    {/* Login Card */}
    <div className="relative z-10 w-[380px] rounded-2xl p-8
                    bg-white/10 backdrop-blur-lg
                    border border-white/20
                    shadow-2xl text-white">

      <h2 className="text-center text-xl font-semibold mb-8">
        University Login
      </h2>

      <form onSubmit={handleSubmit}>

        {/* Email */}
        <div className="mb-5">
          <label className="text-sm text-white/80">Email</label>
          <input
            type="email"
            name="email"
            placeholder="University Email"
            onChange={handleChange}
            value={formData.email}
            className="w-full bg-transparent border border-white/30
                       rounded-md px-4 py-2 mt-1
                       text-white placeholder-white/60
                       focus:ring-2 focus:ring-emerald-400 outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="text-sm text-white/80">Password</label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/30
                         rounded-md px-4 py-2 pr-10
                         text-white placeholder-white/60
                         focus:ring-2 focus:ring-emerald-400 outline-none"
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
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600
                       hover:from-emerald-600 hover:to-teal-700
                       text-white py-2 rounded-md font-medium transition"
          >
            Login
          </button>

          <Link
            to="/university/register"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700
                       text-white py-2 text-center rounded-md font-medium"
          >
            Register
          </Link>
        </div>

      </form>
    </div>
  </div>
  );
};

export default UniversityLogin;
