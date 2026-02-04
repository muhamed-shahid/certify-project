import React from 'react'

const UniversitySidebar = () => {
  return (
    <aside className='w-64 bg-indigo-700 text-white min-h-screen p-5'>
        <h1 className="text-xl font-bold mb-8">CERTIFY</h1>
        <nav className="space-y-3">
            <p onClick={()=>window.location.href='/university/dashboard'} className="cursor-pointer hover:text-indigo-200">
                Dashboard
            </p>
            <p onClick={()=>window.location.href='/university/addCertificate'} className="cursor-pointer hover:text-indigo-200">
                Add Certificate
            </p>
            <p onClick={()=>window.location.href='/university/viewCertificate'} className="cursor-pointer hover:text-indigo-200">
                View Certificates
            </p>
            <p className="cursor-pointer hover:text-red-400">
                Logout
            </p>
        </nav>
        
    </aside>
  )
}

export default UniversitySidebar