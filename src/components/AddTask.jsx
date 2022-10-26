import React, {useState} from "react";
import { Form,Button } from "react-bootstrap";
import axios from "axios";




const AddTask = ({getTask}) => {
    
    const [task,setTask] = useState("");
    const [date,setDate] = useState("");


    const formSubmitHandler =(event)=>{
            event.preventDefault();
            console.log(task)
            const newTask ={task,date}
            addNewTask(newTask);
            setTask("")
            setDate("")

    }

    const addNewTask = async(newTask)=>{
        const url="https://63518e18dfe45bbd55c35972.mockapi.io/api/tasks"
        await axios.post(url,newTask)


        getTask();

    }

    

  return (
    <Form  onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Task</Form.Label>
        <Form.Control onChange={(event)=>setTask(event.target.value)} type="text" placeholder="Add Task" />{/*e.target.value inputu value si set et */}
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control onChange={(event)=>setDate(event.target.value)} type="date" placeholder="Add Day & Time" />
      </Form.Group>
    <div className="text-center">
      <Button  variant="danger w-50 " type="submit">
        SAVE
      </Button>
    </div>
      
    </Form>
  );
};

export default AddTask;
