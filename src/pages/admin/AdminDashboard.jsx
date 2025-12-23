import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import AdminHeader from '../../components/AdminHeader'

const AdminDashboard = () => {
  return (
    <div className='flex'>
      <AdminSideBar/>

      <div className="flex-1">
        <AdminHeader/>

        <div className="p-6 grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow">
            <h3 className="text-slate-600">Universities</h3>
            <p className="text-3xl font-bold">12</p>

            </div>
          <div className="bg-white rounded-xl shadow mt-5">
            <h3 className="text-slate-600">Companies</h3>
            <p className="text-3xl font-bold">8</p>

            </div>
          <div className="bg-white rounded-xl shadow mt-5">
            <h3 className="text-slate-600">Certificates</h3>
            <p className="text-3xl font-bold">125</p>

            </div>
            </div>
      </div>
    </div>
  )
}

export default AdminDashboard