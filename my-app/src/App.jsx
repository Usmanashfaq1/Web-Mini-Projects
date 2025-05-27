import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Fruit from './components/fruits';
import StudentList from './components/StudentList';
import Togggle from './components/RenderProp';
import Foucs from './components/FoucsInput';
import Watch from './components/StopWatch';
import Toolbar from './components/Button';
import PropagationBox from './components/Propagation';
import { ThemeProvider } from './components/ThemeContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Welcome name="Usman Ashfaq" role="Frontend Developer" />
    <Hello />

    <Fruit />
    {/* here is student list */}
    {/* its does not have any props (input) */}
    <StudentList /> 
    {/* render prop here */}
    
    <Togggle render={({ on, toggle }) => (
  <div>
    <p>The toggle is {on ? "ON" : "OFF"}</p>
    <button onClick={toggle}>Toggle</button>
  </div>
)} />
<Foucs />
{/* here i am wrapping the watch inside the theme provider so its going to go deep inside
the watch component and update button html element and change its style
*/}
<ThemeProvider > 
<Watch />
</ThemeProvider>


<Toolbar onPlayMovie={()=>alert("movie playing")} onUploadImage={()=> alert(
  "uploading image"
)} />

<br />
<PropagationBox />






      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
