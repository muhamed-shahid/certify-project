import React, { useState } from 'react'

const AdminSideBar = () => {

  const [showLogout,setShowLogout] = useState(false)

  const handleLogout = ()=>{
    setShowLogout(false)
    window.location.href = "/"
  }
  return (
    <>
    <aside className='w-64 bg-slate-900 text-white min-h screen p-5'>
      <h1 className="text-xl font-bold mb-8">CERTIFY</h1>

      <nav className="space-y-3">
        <p onClick={()=> window.location.href = '/admin/dashboard'} className="cursor-pointer hover:text-blue-400">Dashboard</p>
        <p onClick={()=> window.location.href = '/admin/universities'} className="cursor-pointer hover:text-blue-400">Universities</p>
        <p onClick={()=> window.location.href ='/admin/companies'} className="cursor-pointer hover:text-blue-400">Companies</p>
        <p onClick={()=>setShowLogout(true)} className="cursor-pointer hover:text-red-400">Logout</p>

        </nav>  
    </aside>

    {
      showLogout &&(
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Logout</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-semibold"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default AdminSideBar