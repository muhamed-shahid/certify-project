import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-4xl">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Certificate Verification System
            </h1>
            <div className="grid md:grid-cols-3 gap-6">
                <Link  className="p-6 rounded-xl shadow hover:shadow-lg transition bg-slate-100 text-center" to="/admin/login">
                <h2 className="text-xl font-semibold mb-2">Admin</h2>
                <p className="text-gray-600">Manage system approvals</p>
                
                </Link>

                <Link  className="p-6 rounded-xl shadow hover:shadow-lg transition bg-slate-100 text-center" to="/university/login">
                <h2 className="text-xl font-semibold mb-2">University</h2>
                <p className="text-gray-600">Issue & manage certificate</p>
                
                </Link>
                <Link  className="p-6 rounded-xl shadow hover:shadow-lg transition bg-slate-100 text-center" to="/company/login">
                <h2 className="text-xl font-semibold mb-2">Company</h2>
                <p className="text-gray-600">Verify certificates</p>
                
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home