import React from 'react'
import CompanySidebar from '../../components/CompanySidebar'
import CompanyHeader from '../../components/CompanyHeader'

const CompanyDashboard = () => {
  return (
    <div className='flex'>
        <CompanySidebar/>

        <div className="flex-1 bg-slate-100 min-h-screen">
            <CompanyHeader/>
        </div>

    </div>
  )
}

export default CompanyDashboard