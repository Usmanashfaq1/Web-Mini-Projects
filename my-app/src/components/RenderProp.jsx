
//here is the basic render prop concept

import { useState } from "react";

//component

const Togggle = ({render})=>
{
    // this component only contains logic not ui
    // ui is gonna provided by render prop

    const [on,setOn]=useState("false");

    // function

    const toggle = ()=>(setOn(!on));
    
    
         // basically passing On opposite value 

    
// jsx
return (
    
 <div>{render({ on, toggle })}</div> // basically the UI is here its gonna render here (which is provided by render prop)
); 


}

export default Togggle;