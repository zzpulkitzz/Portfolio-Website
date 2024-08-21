import { useState } from 'react'
import Root from './components/Root'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="base h-[900px] w-[100vw]  ">
          
          <Root/>
        </div>
    </>
  )
}

export default App
