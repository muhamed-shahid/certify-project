import React from 'react'
import CompanySidebar from '../../components/CompanySidebar'
import CompanyHeader from '../../components/CompanyHeader'

const VerifyCertificate = () => {
  return (
     <div className="flex">
      <CompanySidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <CompanyHeader />

        <div className="p-6 max-w-xl">
          <h2 className="text-xl font-bold mb-4">
            Verify Certificate
          </h2>

          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Enter Certificate Number"
              className="w-full border p-2 rounded"
            />

            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg">
              Verify
            </button>

            {/* Result Card */}
            <div className="border-t pt-4">
              <p className="text-green-600 font-semibold">
                ✅ Certificate is VALID
              </p>

              <div className="mt-2 text-sm text-slate-600">
                <p><b>Student:</b> John Doe</p>
                <p><b>Course:</b> MERN Stack</p>
                <p><b>University:</b> ABC University</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default VerifyCertificate