
import { useState } from "react";

import { useRef } from "react";

//component
const Foucs = () =>
{
    const inputRef=useRef(null); // here its acutally now pointing to input element


   console.log( inputRef.current);

   const inputHandler= ()=>
   {
    // now i can do anything with the dom elements
    inputRef.current.style.backgroundColor="red";
    
   }

    return (
<div className="input-box">
    <input ref={inputRef} placeholder="Click the button to foucs on me!" />
    <button onClick={inputHandler} >Foucs</button>

</div>
    );


}


export default Foucs;