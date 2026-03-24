// import './App.css'

// function App() {
//   function changer(e) {
//     const body = document.querySelector('body')
//     body.style.background = e.target.id;
//   }
//   return (
//     <div className='fixed inset-x-0 bottom-12 flex justify-center'>
//     <div className='w-fit space-x-2 rounded-4xl bg-white p-2'>
      
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-red-600 text-white px-5 py-1' id='red'>Red</button>
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-green-600 text-white px-5 py-1' id='green'>Green</button>
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-blue-600 text-white px-5 py-1' id='blue'>Blue</button>
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-olive-600 text-white px-5 py-1' id='olive'>Olive</button>
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-gray-600 text-white px-5 py-1' id='gray'>Gray</button>
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-yellow-600 text-black px-5 py-1' id='yellow'>Yellow</button>
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-pink-600 text-black px-5 py-1' id='pink'>Pink</button>
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-purple-600 text-black px-5 py-1' id='purple'>Purple</button>
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-purple-200 text-black px-5 py-1' id='#967bb6'>Lavender</button>
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-white text-black px-5 py-1 shadow-2xl' id='white'>White</button>
//         <button onClick={(e) => { changer(e)}} className='rounded-4xl bg-black text-white px-5 py-1 shadow-2xl' id='black'>Black</button>
      
//       </div>
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'

function App() {
  
  let [color, setColor] = useState('black')
  
  return (
    <div className='h-screen w-full' style={{backgroundColor: color}}>
      <div className='fixed inset-x-0 bottom-12 flex justify-center'>
      <div className='w-fit space-x-2 rounded-4xl bg-white p-2'>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-red-600 text-white px-5 py-1' id='red'>Red</button>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-green-600 text-white px-5 py-1' id='green'>Green</button>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-blue-600 text-white px-5 py-1' id='blue'>Blue</button>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-olive-600 text-white px-5 py-1' id='olive'>Olive</button>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-gray-600 text-white px-5 py-1' id='gray'>Gray</button>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-yellow-600 text-black px-5 py-1' id='yellow'>Yellow</button>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-pink-600 text-black px-5 py-1' id='pink'>Pink</button>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-purple-600 text-black px-5 py-1' id='purple'>Purple</button>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-purple-200 text-black px-5 py-1' id='#967bb6'>Lavender</button>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-white text-black px-5 py-1 shadow-2xl' id='white'>White</button>
        <button onClick={(e) => { setColor(e.target.id)}} className='rounded-4xl bg-black text-white px-5 py-1 shadow-2xl' id='black'>Black</button> 
        </div>
    </div>
    </div>
  )
}

export default App
