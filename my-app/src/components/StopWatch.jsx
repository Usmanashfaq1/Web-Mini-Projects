
import { useState } from "react";

import { useRef } from "react";

import { useTheme } from "./ThemeContext"; // basically a custom hook to use use context


const Watch= ()=>
{
    const {theme, setTheme}=useTheme(); // its returning an object
    const [time,setTime]=useState(0); // // its returning an array
    const intervalRef = useRef(null);

    // things its do
    // on start its start increamenting every sec

    //on stop increment stop and the time should display at which its stop

    const onStart= ()=>
    {
      intervalRef.current =   setInterval(()=>
            {

                setTime(time=>time+1);
            },1000);
    }

    const onStop = ()=>
    {
       
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }


    

    return (
        <div className="timer">
            <p className="time">{time.toPrecision(5)}</p>
          
            <button 
            style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
             onClick={onStart}>Start</button>
             
             <button onClick={onStop}>Stop</button>
        </div>

    );

}

export default Watch;