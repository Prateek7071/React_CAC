import { useState, } from "react";
import "./App.css";
import { TodoContext, TodoProvider } from "./contexts";
import { useEffect } from "react";

function App() {
  // const [todos, setTodos] = useState([]) affected due to re-writing to incorporate localStorage
  
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos")
      return savedTodos? JSON.parse(savedTodos) : []
    } catch (error) {
      console.log(error)
      return []
    }
  })
  
  const addTodo = (todo) => {
    setTodos((prev)=> [{id:Date.now, ...todo} , ...prev])
  }
  
  const updateTodo = (id,todo) => {
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id===id ? todo:prevTodo ))
  }
  
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter((prevTodo)=>prevTodo.id!== id))
  }
  
  const toggleComplete = (id) => {
    setTodos(prev => prev.map(prevTodo=> prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  
  //below is how sir told to get data from localstorage and render when we refresh or whenever website loads for the first time but now 2026 cant do useEffect(useState) cause of infinite render and all that so changing it above and calling it there.
  
  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"))
    
  //   if (todos && todos.length > 0) {
  //     setTodos(todos)
  //   }
    
  // },[])
  
  
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
