
import { useState, useEffect } from 'react';
// react component for hello and counter 
// its have no props
function Hello()   
{
  const [count, setCount] = useState(0); // this is plain javascript

 

  useEffect(() => 
    {
    console.log('Component rendered!');
  },[count]);

  // the thing inside the return is jsx (which is the stuff (html and js)react 
  //gonna render)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Hello;