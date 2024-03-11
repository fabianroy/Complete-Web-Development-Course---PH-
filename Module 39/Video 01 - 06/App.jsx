import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {

  function handleClick () {
    alert('Button Clicked');
  }

  const click2 = () => {
    alert('Button Clicked Through Arrow Function');
  }

  const addToFive = (number) => {
    alert (number + 5);
  }

  return (
    <>
      <h3>React Core Cocenpt 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Counter></Counter>

      <Team></Team>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={click2}>Click Me 2</button>
      <button onClick={() => {alert('Button Clicked Again')}}></button>

      {/* Vejailla Event Handler */}
      <button onClick={() => addToFive(10)}>Add 5 with 10</button>
    </>
  )
}

export default App
