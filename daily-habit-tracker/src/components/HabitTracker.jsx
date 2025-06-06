import './habit-tracker-card.css';

import AddHabit from './AddHabits';
import HabitList from './HabitList';



const HabitTracker= ()=>
{

    return (

        <div className='habit-tracker-card'>
        <AddHabit />
        <HabitList />


        </div>
    );
}



export default HabitTracker;