
import { useState } from "react";

//writing a component

// this time writing it in arrow function form
const StudentList = () =>
{
// using use state for memory
const stateArray=useState(["Ali","Ahmad","Aisha","Eman"]);
// getting a acutal array index 0
const students=stateArray[0];
const setStudents=stateArray[1]; // basically a function to update  the students array

// can do the same thing using js concept called array destructing

//const [students,setStudents]=useState(["Ali","Ahmad","Aisha","Eman"]);

// here i am going to write the jsx (javascript xml the acutal ui which gonna render on screen of brownser)

return (
    <div className="student-list">
        <ul>
            {
          students.map(student=> <li key={student}>{}{student}</li>)
}
        </ul>
    </div>
);

}

export default StudentList;
