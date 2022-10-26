import React, { useEffect, useState } from 'react'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'
import Button from "react-bootstrap/Button"
import axios from 'axios'


const Home = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [text,setText] = useState ("Show Task Bar")
  const [task,setTask]= useState ([]);
  const url = "https://63518e18dfe45bbd55c35972.mockapi.io/api/tasks"
  const toggle=()=>{
    setIsOpen(!isOpen)
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText);
  }



   const getTask=async()=>{
    console.log("geldi")
    const {data}= await axios(url) 
    setTask(data);
    console.log(data)

  };

  useEffect(() => {
    getTask()
  },[])


  return (
    <div className='mt-4 d-flex justify-content-center flex-column'>
        <Button 
        onClick={()=>{toggle() }}
        variant='danger' size="lg">{text}</Button>

        {isOpen && <AddTask getTask={getTask}/>}
        <TaskList task={task} getTask={getTask}/>
    </div>
  )
}

export default Home;