import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Main from './components/main-content'
import Footer from './components/footer'


function App() 
{
  

  return (
    <div className="app-layout">
    <Header />
    <Main />
    <Footer />
   
  </div>
  )
}

export default App


// always make niche components do not make components which doing work of 2-3 components
