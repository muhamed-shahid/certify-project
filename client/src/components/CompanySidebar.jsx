import React, { useState } from 'react'

const CompanySidebar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const handleLogout = () => {
    setShowLogoutModal(false)
    window.location.href = "/"
  }

  return (
    <>
      <aside className='w-64 bg-blue-700 text-white min-h-screen p-5'>
        <h1 className="text-xl font-bold mb-8">CERTIFY</h1>
        <nav className="space-y-3">
          <p onClick={() => window.location.href = "/company/dashboard"} className="cursor-pointer hover:text-blue-200">Dashboard</p>
          <p onClick={() => window.location.href = "/company/verifyCertificate"} className="cursor-pointer hover:text-blue-200">Verify Certificate</p>
          <p onClick={() => setShowLogoutModal(true)} className="cursor-pointer hover:text-blue-200">Logout</p>
        </nav>
      </aside>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Logout</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
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
      )}
    </>
  )
}

export default CompanySidebar