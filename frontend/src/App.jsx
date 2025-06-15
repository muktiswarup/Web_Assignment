import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Welcome from './Component/Welcome'
import FloorPlans from './Component/Floorplans'
import Amenities from './Component/Amenities'

function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Welcome/>
        <FloorPlans/>
        <Amenities/>
      </div>
    </>
  )
}

export default App
