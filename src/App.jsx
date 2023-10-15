import Footer from './components/Footer' 
import Home from './components/Home'
import React from 'react'
import './App.css'
import  Navbar from './components/Navbar'
import Event from './components/Event'
import Description from './components/Description';
import Slider from './components/slider'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Description/>
      <Event/>
      <Slider/>
      <Footer/>

    </div>
  )
}

export default App
