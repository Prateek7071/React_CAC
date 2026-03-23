import './App.css'
import Card4 from './components/Card'

function App() {
  const someobj = {
    name: "Jack",
    id: 14
  }
  return (
    <>
      <h1 className='bg-amber-500 text-black p-4 rounded-xl '>This is Tailwind</h1>
      <Card4 subject="Physics" obj = {someobj} />
      <Card4 subject="Chemistry" obj = {someobj} />
      <Card4 subject="Maths" obj = {someobj} />
      <Card4  />
    </>
  )
}

export default App
