import "../css/card.css";
import podcastImage from '../assets/bbc.jpg';
import { useState, useMemo, useCallback } from "react";

const PodcastCard = ({ title, headline, length }) => {
  const [theme, setTheme] = useState(true);
  const [count, setCount] = useState(0);

  const magicalNumber =  useMemo( () => {
    console.log("magical generated!");
    return 2343242 * 32422342343;
  },[]);

  // here usememo hooks memozied the return vvalue of the function and store it in magical number

  // here now gonna use usecallback to save this function from redefining
  const toggleTheme = useCallback( () => {
    console.log("hmmm its calling!");
    setTheme(prev => !prev);
  },[]);
  //This helps if you pass toggleTheme as a prop 
  // to child components or use it in hooks like
  //  useEffect to avoid unnecessary re-renders or re-executions.

  return (
    <div
      className="PodcastCard"
      style={{ backgroundColor: theme ? "#020101" : "white" }}
    >
      <div className="content">
        <div className="title">{title}</div>
        <div className="headline">{headline}</div>
        <div className="length">
          <div>{length}</div>
          <div>{magicalNumber}</div>
        </div>
        <button onClick={toggleTheme}>Change theme!</button>
        <button onClick={()=>{setCount(count=>count+1)}}>increaseCount {count}</button>
      </div>

      <img className="podcast-image" src={podcastImage} alt="image!" />
    </div>
  );
};

export default PodcastCard;
