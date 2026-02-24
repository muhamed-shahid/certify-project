import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData,setFormData] = useState({
    email:"",
    password:"",
    role:"ADMIN"
  })

  const navigate = useNavigate()
  const handleChange= (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }



  const validate = () => {
    const errs = {}
    if (!formData.email) errs.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Enter a valid email'
    if (!password) errs.password = 'Password is required'
    return errs
  }

  const handleSubmit =async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      // TODO: perform login API call
      console.log('Logging in', { email, password })
    }


    try{
      const res = await axios.post("http://localhost:5055/api/auth/login",formData)
      localStorage.setItem("token",res.data.token)
      toast.success("Login successfull")
      navigate("/admin/dahsboard")
    }
    catch(err){
      console.log(err);
      toast.error(err.response?.data?.message||"Login failed")
      
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left illustration / brand panel */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 p-10">
          <div className="text-white text-center">
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="4" fill="rgba(255,255,255,0.12)"/>
              <path d="M7 14c1.333-2 3.333-3 5-3s3.667 1 5 3" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8v2" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="mt-6 text-2xl font-bold">Certify Admin</h3>
            <p className="mt-2 opacity-90 max-w-xs">Manage institutions, approvals and certificates securely from a single dashboard.</p>
          </div>
        </div>

        {/* Right: form panel */}
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-blue-50 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 7a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-800">Admin sign in</h2>
              <p className="text-sm text-slate-500">Sign in to your admin account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@certify.com"
                  className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-200'}`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  name='password'
                  placeholder="••••••••"
                  className={`w-full rounded-lg border px-4 py-2 pr-12 focus:outline-none focus:ring-2 ${errors.password ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-200'}`}
                  aria-invalid={errors.password ? 'true' : 'false'}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M3 3l18 18" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.58 10.58A3 3 0 0 0 13.42 13.42" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.94 17.94C15.94 19.11 13.55 20 12 20c-4 0-7-4-9-6 1.63-1.63 4.63-4 9-4 1.55 0 3.14.33 4.44.94" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M2.63 12.23C4.63 8.9 8.06 6.5 12 6.5c4 0 7.36 2.36 9.37 5.77-2 3.31-5.43 5.7-9.37 5.7-4 0-7.36-2.35-9.37-5.74z" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AdminLogin