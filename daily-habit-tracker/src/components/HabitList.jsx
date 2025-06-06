import Habit from './Habit';
import './habit-list.css';


const HabitList= ({habitlist,deleteTask})=>
{

    return (
       <div className='habit-list'>
        <Habit tasklist={habitlist}  deleteTask={deleteTask} />
       </div>
    );

}

export default HabitList;