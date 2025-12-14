import React from 'react'

const AdminLogin = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-slate-100' >
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-slate-800">
            Admin Login
        </h2>
        <form  className="mt-6 space-y-4">
          <div>
            <label  className="block text-sm font-medium text-slate-600">Email</label>
            <input 
            type="email"
            placeholder='admin@certify.com'
            className='mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <label  className="block text-sm font-medium text-slate-600">Password</label>
            <input 
            type="password"
            placeholder='password'
            className='mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition'>Login</button>
        </form>
        </div>
    </section>
  )
}

export default AdminLogin