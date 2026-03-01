import React, { useEffect, useState } from 'react'
import UniversitySidebar from "../../components/UniversitySidebar";
import UniversityHeader from '../../components/UniversityHeader';
import axios from "axios"
import toast from 'react-hot-toast';

const UniversityDashboard = () => {

  const [stats,setStats] = useState({
    total:0,
    active:0,
    revoked:0
  })

  const token = localStorage.getItem("token")
  useEffect(()=>{
     const fetchstats = async ()=>{
   try{
    
      const res = await axios.get("http://localhost:5055/api/certificates/dashboard",{headers:{
        Authorization:`Bearer ${token}`
      }})
      setStats(res.data.data)  
    }catch(err){
    toast.error(err.response?.data?.message||"Cannot load data!")
   }
   }
   fetchstats()
  },[token])
  return (
    <div className="flex">
        <UniversitySidebar/>
        <div className='flex-1 bg-slate-100 min-h-screen'><UniversityHeader/>
         <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-slate-600">Certificates Issued</h3>
            <p className="text-3xl font-bold">{stats.total}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-slate-600">Active Certificates</h3>
            <p className="text-3xl font-bold">{stats.active}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-slate-600">Revoked</h3>
            <p className="text-3xl font-bold">{stats.revoked}</p>
          </div>
        </div>
      
        </div>

    </div>
  )
}

export default UniversityDashboard