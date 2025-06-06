import './habit-tracker-card.css';

import AddHabit from './AddHabits';
import HabitList from './HabitList';
import { useState } from 'react';




const HabitTracker= ()=>
{

    const [tasks,setTasks]=useState([]);
    // the above thing is array destructing tasks is value at index 0 and function is 
    // at index 1 of the array return by use state method
    // use state returns an array not object



    function addTask(task)
    {
        if(task.trim() !=="")
        {
          setTasks(old=>[...old,task]); //dont add empty tasks
        }
        
    }

    function deleteTask(index)
    {
        const updatedTaskList=tasks.filter((_,id)=>id!==index);
        setTasks(updatedTaskList);

    }

    


    return (

        <div className='habit-tracker-card'>
        <AddHabit addTask={addTask} />
        <HabitList habitlist={tasks} deleteTask={deleteTask} />


        </div>
    );
}



export default HabitTracker;