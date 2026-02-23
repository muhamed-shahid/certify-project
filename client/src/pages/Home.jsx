import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-6">
      <div className="w-full max-w-4xl">
        <header className="flex items-center justify-center mb-6 bg-black rounded-2xl p-5">
          <img src="/images/logo.png" alt="Certify logo" className="h-14 w-14 mr-3 " />
          <div className="text-center">
            <h1 className="text-3xl font-poppins font-extrabold text-white">Certify</h1>
            <p className="text-sm text-indigo-100">Trusted Certificate Verification</p>
          </div>
        </header>

        <div className="bg-white p-10 rounded-2xl shadow-2xl">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
            Certificate Verification System
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link className="p-6 rounded-xl shadow hover:shadow-lg transition bg-slate-100 text-center" to="/admin/login">
              <h3 className="text-xl font-semibold mb-2">Admin</h3>
              <p className="text-gray-600">Manage system approvals</p>
            </Link>

            <Link className="p-6 rounded-xl shadow hover:shadow-lg transition bg-slate-100 text-center" to="/university/login">
              <h3 className="text-xl font-semibold mb-2">University</h3>
              <p className="text-gray-600">Issue &amp; manage certificates</p>
            </Link>

            <Link className="p-6 rounded-xl shadow hover:shadow-lg transition bg-slate-100 text-center" to="/company/login">
              <h3 className="text-xl font-semibold mb-2">Company</h3>
              <p className="text-gray-600">Verify certificates</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home