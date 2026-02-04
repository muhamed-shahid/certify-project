import React from 'react'

const CompanySidebar = () => {
  return (
    <aside className='w-64 bg-blue-700 text-white min-h-screen p-5'>
        <h1 className="text-xl font-bold mb-8">CERTIFY</h1>
        <nav className="space-y-3">
            <p onClick={()=>window.location.href="/company/dashboard"} className="cursor-pointer hover:text-blue-200">Dashboard</p>
            <p onClick={()=>window.location.href="/company/verifyCertificate"} className="cursor-pointer hover:text-blue-200">Verify Certificate</p>
            <p className="cursor-pointer hover:text-blue-200">Logout</p>
        </nav>
    </aside>
  )
}

export default CompanySidebar