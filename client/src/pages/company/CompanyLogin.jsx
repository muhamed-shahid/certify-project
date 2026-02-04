import React from 'react'

const CompanyLogin = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-slate-100'>
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center text-slate-800">Company Login</h2>
            <p className="text-center text-slate-500 mb-6">
                Verify certificates securely
            </p>
            <form action="" className="space-y-4">
                <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" />
                <input type="password" placeholder="Password" className="w-full border rounded-lg px-4 py-2" />
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg">Login</button>
            </form>
        </div>
    </section>
  )
}

export default CompanyLogin