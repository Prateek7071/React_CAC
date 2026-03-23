// import './App.css'


// // because we cant just create a function and update counter there cause it wont update the ui, React updates the ui
// function App() {
//   let counter =14
//   const upCount = () => {
//     counter++
//     console.log(counter)
//   }
//   return (
//     <>
//       <h1>This is a counter</h1>
//       <h2>Count {counter}</h2>
//       <button onClick={upCount}>Up Value { counter}</button>
//       <br />
//       <button>Down Value{ counter}</button>
//     </>
//   )
// }

// export default App

// the above method dont udpate so we use hooks

import { useState } from 'react'
import './App.css'


// because we cant just create a function and update counter there cause it wont update the ui, React updates the ui
function App() {
  let [counter, setCounter]=useState(14) // useState(put default value it could be anything variabel object and even function) it returns array with variable at 0th index and a function which controls that variable at the 1st index
  const upCount = () => {
    // counter++
    // setCounter(counter) // here you can give direct updated variable or
    if (counter < 20) {
      setCounter(counter + 1) //or update here
    }
    console.log(counter)
  }
  const downCounter = () => {
    if (counter > 0) {
    setCounter(counter-1)
    }
  }
  //for interview 
  const interview1 = () => {
    //what happens if you do this,given itital value is 14
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    //is the answer 15 or 20?
    // here it goes to 15 as its all just one job and react is sending the batch job 
  }
  
  const interview2 = () => {
    //here it shows 20 cause setCounter takes a callback func where the previous value is getting retrieved and updated
    // aka
    // "Each setCounter call uses an updater function which receives the most recent queued state as its argument, ensuring each update builds on the previous one rather than the stale state from the current render.
    // Automatic Batching: Mention that React "batches" these updates together. Even though you called it 6 times, React will usually only trigger one single re-render for performance.
    setCounter(prevValue => prevValue + 1)
    setCounter(prevValue => prevValue + 1)
    setCounter(prevValue => prevValue + 1)
    setCounter(prevValue => prevValue + 1)
    setCounter(prevValue => prevValue + 1)
    setCounter(prevValue => prevValue + 1)
  }
  return (
    <>
      <h1>This is a counter</h1>
      <h2>Count {counter}</h2>
      <button onClick={upCount}>Up Value { counter}</button>
      <br />
      <button onClick={downCounter}>Down Value{ counter}</button>
      <button onClick={interview1}>Question{ counter}</button>
      <button onClick={interview2}>Solution{ counter}</button>
    </>
  )
}

export default App