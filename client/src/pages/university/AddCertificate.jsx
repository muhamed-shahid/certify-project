import React, { useState } from 'react'
import UniversitySidebar from '../../components/UniversitySidebar'
import UniversityHeader from '../../components/UniversityHeader'
import axios from "axios"
import toast from "react-hot-toast"

const AddCertificate = () => {

  const [formData,setFormData] = useState({
    certificateNumber:"",
    studentName:"",
    courseName:"",
    universityName:"",
    issueDate: new Date().toISOString().split("T")[0],
  })

  // const [message,setMessage] = useState("")
  const [error,setError] = useState("")
  const handleChange = (e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value,
    })
  }

  const handleSubmit = async(e)=>{

    try{
      const res = await axios.post("http://localhost:5055/api/certificates/add",formData) 

      toast.success(res.data.message)
      setError("")

      setFormData({
        certificateNumber:"",
        studentName:"",
        courseName:"",
        universityName:"",
        issueDate:new Date().toISOString().split("T")[0],

      })
    }
    catch (err){
      setError(
        err.response?.data?.message||"Server error. Please try again later"
      )
      
    }
  }
  return (
    <div className='flex'>
        <UniversitySidebar/>
        <div className='flex-1 bg-slate-100 min-h-screen'>
            <UniversityHeader/>
            <div className='p-6 max-w-2xl'>
                <h2 className="text-xl font-bold mb-4">Add New Certificate</h2>
                <div className='bg-white p-6 rounded-xl shadow space-y-4'>
                    <input className='w-full border p-2 rounded' placeholder='Certificate Number' name='certificateNumber' value={formData.certificateNumber} onChange={handleChange}/>
                    <input className='w-full border p-2 rounded' placeholder='Student Name'name='studentName' onChange={handleChange} value={formData.studentName}/>
                    <input className='w-full border p-2 rounded' placeholder='Course Name' name='courseName' onChange={handleChange} value={formData.courseName}/>
                    <input className='w-full border p-2 rounded' placeholder='University Name' name='universityName' onChange={handleChange} value={formData.universityName}/>
                    <input className='w-full border p-2 rounded' type='date' name='issueDate' onChange={handleChange} value={formData.issueDate}/>  
                  <button type='button' onClick={handleSubmit} className='bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded'>Generate Certificate</button>

                  {/* {message && (
                    <p className="mt-3 text-sm text-blue-600">{message}</p>
                  )}  */}
                  {error && (
                    <p className="mt-3 text-sm text-red-600">{error}</p>
                  )} 
                </div>
            </div>
    </div>
    </div>
  )
}

export default AddCertificate