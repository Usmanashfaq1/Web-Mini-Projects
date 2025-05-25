
import { useState } from 'react';


function Fruit()
{
//js code

const [fruits,setFruit]=useState(["Apple","Banana","Oranges"]);


//jsx code
    return(
<div className="fruit-list">
<ul>
{
    fruits.map(fruit=> <li key={fruit}> {fruit} </li>) // here key is important 
    // its makes the elements unique which helps react to Efficently update ui when something 
    // changes// without application can become slow

    // v dom compare old vdom (only update real dom part which vdom have changes)
    //making minimun ui re rendering and robust web app
}    

</ul>

</div>
    );
   
}


export default Fruit;