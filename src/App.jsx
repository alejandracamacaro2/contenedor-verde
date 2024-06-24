import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import verde from './assets/verde.png'
import Verde from './Componentes/Verde'
import Vidrio from './Componentes/Vidrio'
import vidrio from './assets/vidrio.png'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
 < Vidrio imagen={vidrio} />
 <Verde imagen={verde} />

       </div>
  )
}

export default App
