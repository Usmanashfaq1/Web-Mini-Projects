import './add-habits.css';
const AddHabit= ()=>
{


    return (
        <div className="add-habits">
            <input  placeholder='Add habits' size="30" required/>
            <button>Add</button>
        </div>
    );
}

export default AddHabit;