import React from 'react'
import UniversitySidebar from '../../components/UniversitySidebar'
import UniversityHeader from '../../components/UniversityHeader'

const AddCertificate = () => {
  return (
    <div className='flex'>
        <UniversitySidebar/>
        <div className='flex-1 bg-slate-100 min-h-screen'>
            <UniversityHeader/>
            <div className='p-6 max-w-2xl'>
                <h2 className="text-xl font-bold mb-4">Add New Certificate</h2>
                <div className='bg-white p-6 rounded-xl shadow space-y-4'>
                    <input className='w-full border p-2 rounded' placeholder='Student Name'/>
                    <input className='w-full border p-2 rounded' placeholder='Course Name'/>
                    <input className='w-full border p-2 rounded' placeholder='Certificate ID'/>
                    <input type="date" className='w-full border p-2 rounded' />

                    <button className='bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded'>Generate Certificate</button> 
                </div>
            </div>
    </div>
    </div>
  )
}

export default AddCertificate