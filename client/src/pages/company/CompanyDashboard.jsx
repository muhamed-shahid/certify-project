import React from 'react'
import CompanySidebar from '../../components/CompanySidebar'
import CompanyHeader from '../../components/CompanyHeader'

const CompanyDashboard = () => {
  return (
    <div className='flex'>
        <CompanySidebar/>

        <div className="flex-1 bg-slate-100 min-h-screen">
            <CompanyHeader/>
            <div className="p-6 flex items-center justify-center px-40 py-40">
              <div className="bg-white p-6 rounded-xl shadow max-w-xl">
                <h3 className="text-lg font-semibold mb-2 flex items-center justify-center">Certificate Verification</h3>
                <p className="text-slate-600">Verify certificates issued by universities using a unique certificate ID.</p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default CompanyDashboard