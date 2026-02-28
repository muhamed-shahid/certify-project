import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import AdminHeader from '../../components/AdminHeader'
import axios from "axios"
import toast from "react-hot-toast"

const AdminDashboard = () => {

  const [stats,setStats] = useState({
    universities:0,
    companies:0,
    certificates:0,
  })

  const token = localStorage.getItem("token")


  useEffect (()=>{
    const fetchstats = async ()=>{
      try{
        const res = await axios.get("http://localhost:5055/api/admin/dashboard",{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })

        setStats(res.data.data)
      }catch(err){
        toast.error(err.response?.data?.message||"Failed to load dashboard stats")
      }
    }
    fetchstats()
  },[token])
  return (
    <div className='flex'>
      <AdminSideBar/>

      <div className="flex-1">
        <AdminHeader/>

        <div className="p-6 grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow">
            <h3 className="text-slate-600">Universities</h3>
            <p className="text-3xl font-bold">{stats.universities}</p>

            </div>
          <div className="bg-white rounded-xl shadow mt-5">
            <h3 className="text-slate-600">Companies</h3>
            <p className="text-3xl font-bold">{stats.companies}</p>

            </div>
          <div className="bg-white rounded-xl shadow mt-5">
            <h3 className="text-slate-600">Certificates</h3>
            <p className="text-3xl font-bold">{stats.certificates}</p>

            </div>
            </div>
      </div>
    </div>
  )
}

export default AdminDashboard