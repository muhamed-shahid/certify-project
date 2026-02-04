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
    {
        id:3,
        name:"LMN University",
        email:"contact@lmn.edu",
        status:"Approved",
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
                                        <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${getBadgeStyle(
                          uni.status
                        )}`}
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            background:
                              uni.status === "Approved"
                                ? "#16a34a"
                                : uni.status === "Rejected"
                                ? "#dc2626"
                                : "#d97706",
                          }}
                        />
                        {uni.status}
                      </span>
                                    </td>
                                    <td className='p-3 space-x-2'>
                                        {uni.status === "Pending"?(
                                            <>
                                        <button onClick={()=>uStatus(uni.id,"Approved")} className='bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-2 rounded-3xl shadow-md transition'>Approve</button>
                                        <button onClick={()=>uStatus(uni.id,"Rejected")} className='bg-gradient-to-r from-rose-500 to-red-600
             hover:from-rose-600 hover:to-red-700
             text-white px-5 py-2 rounded-3xl
             shadow-md transition mt-1' >Reject</button>
                                        
                                        </>
                                        ):(
                                          <span className="text-slate-500 text-sm">
                          No action available
                        </span>
                      )}  
                                        
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