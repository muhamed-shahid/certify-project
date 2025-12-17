import React, { useState } from 'react'

const initialCompanies = [
    {
        id:1,
        name:"ABC Technologies",
        email:"abcpvtltd@gmail.com",
        status:"Pending"
    },
    {
        id:2,
        name:"XYZ Technologies",
        email:"xyzpvtltd@gmail.com",
        status:"Pending"
    },
    {
        id:1,
        name:"LMN Technologies",
        email:"lmnpvtltd@gmail.com",
        status:"Pending"
    },
]

const CompanyApproval = () => {

    const [companies,setCompanies] = useState(initialCompanies)

    const updateStatus = (id,newStatus)=>{
        setCompanies((prev)=>{
            prev.map((cmp)=>
                cmp.id===id?(...cmp,status:newStatus)
        )
        })
    }

  return (
    <div>CompanyApproval</div>
  )
}

export default CompanyApproval