import React from 'react'
import CompanySidebar from '../../components/CompanySidebar'
import CompanyHeader from '../../components/CompanyHeader'
import { useState } from 'react'
import axios from "axios"



const [certificateNumber,setCertificateNumber]=useState("")
const [result,setResult]=useState(null)


const VerifyCertificate =async () => {
  try{
    const res = await axios.post("http://localhost:5055/api/certificates/verify",{certificateNumber})
    setResult(res.data)
  }
  catch(err){
    setResult({
       success:false,
            message:"Certificate not found"
    })

  }
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
              value={certificateNumber}
              onChange={(event)=>setCertificateNumber(event.target.value)}
            />

            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg"
            onClick={VerifyCertificate}>
              Verify
            </button>

            {/* Result Card */}
            {result && (
              <div className="border-t pt-4">
              {result.success ? (
                <div className="text-green-600 font-semibold">
                ✅ {result.message}
              
              <div className="mt-2 text-sm text-slate-600">
                <p><b>Student:</b> John Doe</p>
                <p><b>Course:</b> MERN Stack</p>
                <p><b>University:</b> ABC University</p>
              </div>
              </div>
              ):(
                <p className='text-red-600'>❌{result.message}</p>
              )}

              
            </div>
            )}
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default VerifyCertificate