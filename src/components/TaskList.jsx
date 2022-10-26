
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {RiDeleteBin5Line} from "react-icons/ri"

const TaskList = ({task,getTask}) => {

  const deleteTask = async(id)=>{ 
    const url = "https://63518e18dfe45bbd55c35972.mockapi.io/api/tasks"
    try {
      await axios.delete(`${url}/${id}`);

    } catch (error) {

    }
    getTask();
  } 
  
  

  return (
    <div>
        {task.map((item,key)=>{
          const {id,task,date}=item;
          return(
            <div  key={key} className='mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2'>
              <div>
                <h4>{task}</h4>
                <p>{date}</p>
              </div>
              <div>
                <RiDeleteBin5Line
                onClick={()=>{deleteTask(id)}}
                style={{
                  cursor:"pointer",
                  marginRight:"20px",
                  fontSize:"2rem",
                  boxShadow:"2px 2px 2px #ECAB9E"

                }}/>
              </div>

              </div>
          )
        })}
      
    </div>

  )
}








export default TaskList