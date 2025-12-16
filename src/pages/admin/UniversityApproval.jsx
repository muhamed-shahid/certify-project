import React, { useState } from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import AdminHeader from '../../components/AdminHeader'

const initialUniversities = [
    {
        id:1,
        name:"ABC University",
        email:"contact@abc.edu",
        status:"Pending",
    },
    {
        id:2,
        name:"XYZ University",
        email:"contact@xyz.edu",
        status:"Pending",
    },
];

const UniversityApproval = () => {
    const [universities,setUniversities] = useState(initialUniversities)

    const uStatus=(id,newStatus)=>{
        setUniversities((prev)=> 
            prev.map((uni)=>
            uni.id===id? {...uni,status:newStatus}:uni))
    }

    const getBadgeStyle = (status) => {
        if(status==="Approved")
            return "bg-green-100 text-green-700"
        if(status==="Rejected")
            return "bg-red-100 text-yellow-700"
        else
            return "bg-yellow-100 text-yellow-700"
    }
  return (
    <div className='flex'>
        <AdminSideBar/>
        <div className="flex-1 bg-slate-100 min-h-screen">
            <AdminHeader/>
            <div className="p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-4 ">University Approval Requests</h2>
                <div className="overflow-x-auto bg-white rounded-xl shadow">
                    <table className="w-full border-collapse">
                        <thead className="bg-slate-200">
                            <tr>
                                <th className="p-3 text-left">University Name</th>
                                <th className="p-3 text-left">Email</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {universities.map((uni) => (
                                <tr key={uni.id} className='border-b'>
                                    <td className='p-3'>{uni.name}</td>
                                    <td className='p-3'>{uni.email}</td>
                                    <td className='p-3'>
                                        <span className='px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700'>
                                        {uni.status}
                                        </span>
                                    </td>
                                    <td className='p-3 space-x-2'>
                                        <button onClick={uStatus(uni.id,"Approved")} className='bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded ml-2'>Approve</button>
                                        <button onClick={uStatus(uni.id,"Rejected")} className='bg-red-600 hover:bg-red-700 text-white px-6 py-1 rounded mt-2 mr-1' >Reject</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UniversityApproval