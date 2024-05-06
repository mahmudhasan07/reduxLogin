import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { NavLink } from "react-router-dom";

function App() {


  return (
    <div className='space-y-5 w-fit mx-auto my-10 text-center'>
      <h1 className='text-xl font-semibold my-3'>Please Login First</h1>
    <NavLink to={"/login"}><button className='btn '>Login</button></NavLink>
    </div>
  )
}

export default App
