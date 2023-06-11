import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter addValue={2} />
      {/* <Message /> */}
      {/* <Greet name="Mini" heroName="Superman">
        <button>Click me!</button>
      </Greet>
      <Greet name="Yummy" heroName="Wonder Woman"/>
      <Welcome name="Mickey" heroName="Hulk">
        <p>Testing</p>
      </Welcome>
      <Welcome name="Jennie" heroName="Iron Man"/>
      <Hello /> */}
    </div>
  )
}

export default App
