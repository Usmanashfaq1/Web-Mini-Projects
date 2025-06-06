import './add-habits.css';
import { useState } from 'react';
const AddHabit= ({addTask})=>
{
    const [currentTask,setCurrentTask]=useState("");
    // use state return an array


   function handleInputChange(event)
   {
    
     setCurrentTask(event.target.value);


   }

    return (
        <div className="add-habits">
            <input type="text" placeholder='Add habits' value={currentTask}  onChange={handleInputChange}  />
            <button onClick={
                ()=> {
                    addTask(currentTask);
                    setCurrentTask("");
                }
            

            } >Add</button>
        </div>
    );
}

export default AddHabit;