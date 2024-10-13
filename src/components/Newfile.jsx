import React from 'react'
import { NavLink } from 'react-router-dom'
import './Newfile.css'
import snow from '/images/snowflake.svg'

const Newfile = () => {
  return (
    <div>
      <h1>This is a test file</h1>
      <img src={snow} alt="snowflk" />

      <NavLink to="/basic/file2"><span className='logo-text' >Harshvardhan Panchal</span></NavLink>


    </div>
  )
}

export default Newfile
