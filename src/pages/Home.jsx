import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen flex align-center justify-center flex-col gap-2'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <NavLink to="/Hotel_Dashboard/Admin/login">Login</NavLink>
      <NavLink to="/Hotel_Dashboard/Admin/dashboard">Dashboard</NavLink>
    </div>
  )
}

export default Home