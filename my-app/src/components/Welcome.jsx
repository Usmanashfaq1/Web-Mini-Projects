import { createContext,useContext } from "react";







function Welcome({name,role}) {
  
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <p>Your role is: {role}</p>
    </div>
  );
}

export default Welcome;
