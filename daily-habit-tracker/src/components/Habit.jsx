import './habit.css';

const Habit= ({tasklist ,deleteTask})=>
{

    return (
       <div className='habit'>
       <ol>

       
        
        {
        tasklist.map((task,i)=>
        (
            
            <li key={i}> 
             <span className='tick'>
            ✔️
        </span>
        <span className="task-list">{task}</span>

        <button onClick={()=>deleteTask(i)} className='delete-btn'>
            ❌
        </button>

            </li>
        )
    )

}

        </ol>
        
       </div>
    );

}

export default Habit;