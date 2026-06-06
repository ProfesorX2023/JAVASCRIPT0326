import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Titulo from './Titulo'
import Juego from './Juego'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Titulo></Titulo>
      <Juego limite='20'/>
    </div>
  )
}

export default App
