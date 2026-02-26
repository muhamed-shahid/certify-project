import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import AdminHeader from '../../components/AdminHeader'
import axios from 'axios'
import toast from 'react-hot-toast'



const UniversityApproval = () => {
    const [universities,setUniversities] = useState([])
    const [loading,setLoading] = useState(false)
    const [confirmBox,setConfirmBox] = useState(false)
    const [selectedUniversity,setSelectedUniversity] = useState(null)
    const [actionType,setActionType] = useState(null)
    const [reason,setReason] = useState("")

    const token = localStorage.getItem("token")

    useEffect(()=>{
        if(!token){
            toast.error("Unauthorized. Please login again")
            return
        }

        const fetchUniversities = async()=>{
            try{
                setLoading(true)

                const res = await axios.get("http://localhost:5055/api/admin/universities",{headers:{Authorization:`Bearer ${token}`,
                },
            })

            if(res.data.success){
                setUniversities(res.data.data)
            }

            }catch(err){
                console.error(err);
                toast.error(err.response?.data?.message || "Failed to fetch universities")
                
            } finally{
                setLoading(false)
            }
        }
        fetchUniversities()
    },[token])

    const getBadgeStyle = (status) => {
        if(status==="APPROVED")
            return "bg-green-100 text-green-700"
        if(status==="REJECTED")
            return "bg-red-100 text-yellow-700"
        else
            return "bg-yellow-100 text-yellow-700"
    }

     const openModal = (university, type) => {

    if (!university) return;

    setSelectedUniversity(university);
    setActionType(type);
    setReason("");
    setConfirmBox(true);

  };

  const closeModal = () => {

    setConfirmBox(false);
    setSelectedUniversity(null);
    setActionType(null);
    setReason("");

  };

  const handleStatusUpdate = async ()=>{
    if(!selectedUniversity) return
    try{
        const res = await axios.put(`http://localhost:5055/api/admin/university/${selectedUniversity._id}`,
      {
        status: actionType,
        reason: reason || ""
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      toast.success(res.data.message || "Status updated successfully");

      setUniversities(prev =>
        prev.map(university =>
            university._id === selectedUniversity._id ? {...university, status: actionType}:university
        )
      )
      closeModal()
 

    } catch (err){
        console.error(err);
         toast.error(
      err.response?.data?.message ||
      "Failed to update status"
    );
        
    }
  }
  return (
    <div className='flex'>
        <AdminSideBar/>
        <div className="flex-1 bg-slate-100 min-h-screen">
            <AdminHeader/>
            <div className="p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-4 ">University Approval Requests</h2>


                {loading ?(
                    <p>Loading....</p>
                ):(
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
                                <tr key={uni._id} className='border-b'>
                                    <td className='p-3'>{uni.name}</td>
                                    <td className='p-3'>{uni.email}</td>
                                    <td className='p-3'>
                                        <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${getBadgeStyle(uni.status)}`}>

                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            background:
                              uni.status === "APPROVED"
                                ? "#16a34a"
                                : uni.status === "REJECTED"
                                ? "#dc2626"
                                : "#d97706",
                          }}
                        />
                        {uni.status}
                      </span>
                                    </td>
                                    <td className='p-3 space-x-2'>
                                        {uni.status === "PENDING"?(
                                            <>
                                        <button onClick={()=>openModal(uni, "APPROVED")} className='bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-2 rounded-3xl shadow-md transition'>Approve</button>
                                        <button onClick={()=>openModal(uni, "REJECTED")} className='bg-gradient-to-r from-rose-500 to-red-600
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
                )}
            </div>

 {confirmBox && (

          <div className="fixed inset-0 flex items-center justify-center bg-black/40">

            <div className="bg-white p-6 rounded shadow w-96">

              <h3 className="text-lg font-bold">

                {actionType === "APPROVED"
                  ? "Confirm Approval"
                  : "Confirm Rejection"}

              </h3>

              <p className="mt-2">

                Are you sure you want to {" "}
                {actionType === "APPROVED" ? "approve" : "reject"} {" "}
                <b>{selectedUniversity?.name}</b> ?

              </p>

              {actionType === "REJECTED" && (

                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full border mt-3 p-2"
                  placeholder="Optional rejection reason"
                />

              )}

              <div className="flex justify-end gap-3 mt-4">

                <button onClick={closeModal}>
                  Cancel
                </button>

                <button
                  onClick={handleStatusUpdate}
                  className="bg-indigo-600 text-white px-4 py-2 rounded"
                >
                  Confirm
                </button>

              </div>

            </div>

          </div>

        )}


        </div>
    </div>
  )
}

export default UniversityApproval