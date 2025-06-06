import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

const container = document.getElementById('root')  // Get the HTML element with id="root"

const root = createRoot(container)  // Create a React root for concurrent rendering

root.render(
  <StrictMode>
    <App />  
     {/* Render your App component inside StrictMode for extra checks */}
  </StrictMode>
)
