import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Person from './components/profile/Person'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Person fullName='Dotun' bio='I am  Front-End Dev' profession='Software Engineer'/>
    </div>
  )
}

export default App

