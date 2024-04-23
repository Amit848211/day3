import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import img1 from './image/1.avif'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
 


 
  return (
    <>
      <Navbar  />
     <Body img={img1}/>
      <Footer />

    
    </>
  )
}

export default App
