import { useState } from 'react'

import './App.css'
import NavBar from './components/navbar'
import Hero from './components/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <NavBar />
 <Hero />
    </>
  )
}

export default App
