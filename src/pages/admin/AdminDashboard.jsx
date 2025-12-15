import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import AdminHeader from '../../components/AdminHeader'

const AdminDashboard = () => {
  return (
    <section className='flex'>
      <AdminSideBar/>

      <div className="flex-1">
        <AdminHeader/>
      </div>
    </section>
  )
}

export default AdminDashboard