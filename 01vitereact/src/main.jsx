import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


export function Cobbler() {
  return (
    <div>
      Hi this is custom
    </div>
  )
}

// at the end of the day the content inside of the cobbler funtion just get converted to this:
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank'
//   },
//   children: "Click to visit google"
// }
// but directly this wont work as the .render has some predefined parameters it takes

// const anotherElement = (
//   <a href="https://www.google.com" target='_blank'>Visit Google</a>
// )

const anotherUser = " This is where the variables go"
const reactElem = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target:"_blank"
  },
  "Click me to visit google",
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  
  // Cobbler()
  // anotherElement
  reactElem
  // <App /> 
)

