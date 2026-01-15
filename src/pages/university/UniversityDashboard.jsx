import React from 'react'
import UniversitySidebar from "../../components/UniversitySidebar";
import UniversityHeader from '../../components/UniversityHeader';

const UniversityDashboard = () => {
  return (
    <div className="flex">
        <UniversitySidebar/>
        <div className='flex-1 bg-slate-100 min-h-screen'><UniversityHeader/>
         <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-slate-600">Certificates Issued</h3>
            <p className="text-3xl font-bold">120</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-slate-600">Active Certificates</h3>
            <p className="text-3xl font-bold">110</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-slate-600">Revoked</h3>
            <p className="text-3xl font-bold">10</p>
          </div>
        </div>
      
        </div>

    </div>
  )
}

export default UniversityDashboard