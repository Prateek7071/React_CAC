import { useEffect } from 'react'
import { useState,useCallback, useRef } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setNumAll] = useState(false)
  const [charAllowed, setCharAll] = useState(false)
  const [pass, setPass] = useState("")
  
  //useRef
  const passRef = useRef(null)
  
  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*~`;:|"
    
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }
    setPass(pass)
  }, [length, numAllowed, charAllowed, setPass])
  
  const copyToCbrd = useCallback(() => {
    passRef.current?.select() // we can do thhe copy thing without this but good to use annd also helps in highlighting and all that 
    passRef.current?.setSelectionRange(0,98)
    window.navigator.clipboard.writeText(pass)
  },[pass])
  
  useEffect(()=>{passGen()},[length,numAllowed,charAllowed,setPass])
  
  return (
      <div className='fixed inset-x-0 top-10 flex justify-center '>
          <div className='flex flex-col gap-6 grid-cols-3 w-fit rounded-xl pl-8 pr-8 pt-2 pb-2 bg-gray-800'>
            <div className='flex justify-center'>
              <h1 className='text-blue-300 text-3xl'>Password Generator</h1>
            </div>
          <div>
          <input className='bg-white text-orange-400 rounded-l-xl rounded-bl-xl pl-4 pr-4 pt-2 pb-2 outline-none w-xl text-2xl'
            type="text" value={pass} readOnly ref={passRef} />
          <button
            onClick={copyToCbrd}
            className='text-white bg-blue-500 pl-4 pr-4 pt-2 pb-2 rounded-r-xl rounded-br-xl text-2xl shrink-0 '>copy</button>
          </div>
          <div className='flex items-center justify-center gap-x-8 pb-1'>
            <div className='flex items-center gap-x-2'>
              <input type="range" min={6} max={100} value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
              />
                <label className='text-xl text-orange-400'> Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id="numAllow"
              onChange={() => { setNumAll((prev) => !prev) }}
              />
                <label htmlFor='numAllow' className='text-xl text-orange-400'> Numbers</label>
            </div>
            <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charAllow'
              onChange={() => { setCharAll((prev) => !prev) }}
            />
                <label htmlFor='charAllow' className='text-xl text-orange-400'>Special Characters</label>
            </div>  
          </div>
          
        </div>
      </div>
  )
}

export default App
