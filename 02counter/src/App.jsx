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
  return (
    <>
      <h1>This is a counter</h1>
      <h2>Count {counter}</h2>
      <button onClick={upCount}>Up Value { counter}</button>
      <br />
      <button onClick={downCounter}>Down Value{ counter}</button>
    </>
  )
}

export default App