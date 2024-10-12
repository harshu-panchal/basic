import React from 'react'
import { NavLink } from 'react-router-dom'
import './Newfile.css'

const Newfile = () => {
  return (
    <div>
      <h1>This is a test file</h1>
      <img src="src\assets\snowflake.svg" alt="" />

      <NavLink to="/file2"><span className='logo-text' >Harshvardhan Panchal</span></NavLink>


    </div>
  )
}

export default Newfile
