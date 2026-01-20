import React from 'react'
import UniversityHeader from '../../components/UniversityHeader'
import UniversitySidebar from '../../components/UniversitySidebar'

const ViewCertificate = () => {
  return (
    <div className='flex'>
        <UniversitySidebar/>
        <div className='flex-1 bg-slate-100 min-h-screen'>
            <UniversityHeader/>
            <div className='p-6 '>
                <h2 className="text-xl font-bold mb-4">Issued Certificate</h2>
                <div className='bg-white rounded-xl shadow overflow-x-auto'>
                    <table className="w-full">
                        <thead className="bg-slate-200">
                            <tr>
                                <th className="p-3 text-left">Student</th>
                                <th className="p-3 text-left">Course</th>
                                <th className="p-3 text-left">Certificate ID</th>
                                <th className="p-3 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3">John Doe</td>
                                <td className="p-3">MERN Stack</td>
                                <td className="p-3">CERT-001</td>
                                <td className="p-3">Active</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            </div>
    </div>
    </div>
  )
}

export default ViewCertificate