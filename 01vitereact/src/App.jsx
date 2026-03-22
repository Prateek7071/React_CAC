import Mikser from "./Miks"

function App() {
  const username = "this is a variable"
  return (
    <>
      <h1>Hello Vite App {username}</h1> // this {username} is called as evaluated expression, here we write the final evaluated value, you cant do evaluation here
    <Mikser />
    </>
  )
}
export default App