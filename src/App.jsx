import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NebBer from './Compontent/NebBar/NebBer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NebBer></NebBer>
    </>
  )
}

export default App
