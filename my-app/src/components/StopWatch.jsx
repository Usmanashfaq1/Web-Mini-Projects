
import { useState } from "react";

import { useRef } from "react";


const Watch= ()=>
{
    const [time,setTime]=useState(0);
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
            <button onClick={onStart}>Start</button>
             <button onClick={onStop}>Stop</button>
        </div>

    );

}

export default Watch;