import { useState } from 'react'

import './App.css'
import NavBar from './components/navbar'
import Hero from './components/hero'
import ProductViewer from './components/productView'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <NavBar />
 <Hero />
 <ProductViewer />
    </>
  )
}

export default App
