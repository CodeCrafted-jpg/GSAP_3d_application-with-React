import { useState } from 'react'

import './App.css'
import NavBar from './components/navbar'
import Hero from './components/hero'
import ProductViewer from './components/productView'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from './components/showcase'
import Performance from './components/Performece'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [count, setCount] = useState(0)

  return (
 <main>
 <NavBar />
 <Hero />
 <ProductViewer />
 <Showcase />
 <Performance />
 <Features />
 <Highlights/>
 <Footer />
</main> 
  )
}

export default App
