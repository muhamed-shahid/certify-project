import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import AdminHeader from '../../components/AdminHeader'

const UniversityApproval = () => {
  return (
    <div className='flex'>
        <AdminSideBar/>
        <div className="flex-1 bg-slate-100 min-h-screen">
            <AdminHeader/>
            <div className="p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-4 ">University Approval Requests</h2>
                <div className="overflow-x-auto bg-white rounded-xl shadow">
                    <table className="w-full">
                        <thead className="bg-slate-200">
                            <tr>
                                <th className="p-3 text-left">University Name</th>
                                <th className="p-3 text-left">Email</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-left">Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UniversityApproval