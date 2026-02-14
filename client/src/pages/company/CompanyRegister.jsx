import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"

const CompanyRegister = () => {

    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        companyName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const {companyName,email,password,confirmPassword} = formData
    

    if(!companyName.trim()||!email.trim()||!password.trim()||!confirmPassword.trim()){
        toast.error("All fields are required")
        return
    }

    if(password!==confirmPassword){
        toast.error("Passwords do not match")
        return
    }
    try{
        const res =  await axios.post("http://localhost:5055/api/company/register",{companyName,email,password,})
        toast.success(res.data.message)

        setFormData({
            companyName:"",
            email:"",
            password:"",
            confirmPassword:"",
        })


        setTimeout(()=>{
            navigate("/company/login")
        },2000)
    } catch (err){
        toast.error(err.response?.data?.message||"Registration failed")
    }}

  return (
    <div className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900'>
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl bottom-10 right-10"></div>
        <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl rounded-2xl w-full max-w-md p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-2">Company Registration</h2>
        <p className="text-center text-sm text-gray-300 mb-6">Register to request access</p>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text"
            name='companyName'
            placeholder='Company Name'
            value={formData.companyName}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-lg bg-white/20 border-collapse border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'  />
            <input type="email"
            name='email'
            placeholder='Company Email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-lg bg-white/20 border-collapse border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'  />
            <input type="password"
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-lg bg-white/20 border-collapse border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'  />
            <input type="password"
            name='confirmPassword'
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-lg bg-white/20 border-collapse border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'  />

            <button type='submit' className='w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 to-indigo-700'>Register</button>
        </form>
         <p className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <Link
            to="/company/login"
            className="text-blue-400 hover:underline"
          >
            Login
          </Link>
        </p>

        </div>
    </div>
  )
}

export default CompanyRegister