import React from 'react'
import TaskPng from "../assets/task.png"
import TaskList from './TaskList'

const Header = () => {
  return (
    <div>

      <div className="d-flex justify-content-evenly align items-center ">
      <img style={{width:90}}  src={TaskPng}/>
      <h1 className='display-5'>TASK TRACKER</h1>

      </div>

    
      </div>
  )
}

export default Header