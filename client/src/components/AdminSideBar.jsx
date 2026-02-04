import React from 'react'

const AdminSideBar = () => {
  return (
    <aside className='w-64 bg-slate-900 text-white min-h screen p-5'>
      <h1 className="text-xl font-bold mb-8">CERTIFY</h1>

      <nav className="space-y-3">
        <p onClick={()=> window.location.href = '/admin/dashboard'} className="cursor-pointer hover:text-blue-400">Dashboard</p>
        <p onClick={()=> window.location.href = '/admin/universities'} className="cursor-pointer hover:text-blue-400">Universities</p>
        <p onClick={()=> window.location.href ='/admin/companies'} className="cursor-pointer hover:text-blue-400">Companies</p>
        <p className="cursor-pointer hover:text-red-400">Logout</p>

        </nav>  
    </aside>
  )
}

export default AdminSideBar