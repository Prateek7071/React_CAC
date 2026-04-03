import { createSlice, nanoid } from '@reduxjs/toolkit'

//to make a slice we need 3 things name, initialState and reducers

const initialState = {
  todos: [{ id: 1, text: "Hello World!" }]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: { //isme aati hai properties and function
    //this is how its different from useContext, in useContext we were declaring and not writing the definition but but here we are writing definition
    addTodo: (state, action) => { //example property // here you'll always get access to  state and action just like useState where you get add and setAdd
      const todo = { //state is the updates state value we get in the store
        id: nanoid(),
        text: action.payload //here althought you should write action.payload.text but because both names are same you can get away with not writing text 
      }
      state.todos.push(todo) //in context api we were taking out the value then spreading it then updating which we can do here directly because here state is preserved
    },
    
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo)=>todo.id!== action.payload)
    },
    
    updateTodo: (state, action) => {
      const { id, text } = action.payload //destructing id and new text from payload
      
      const existingTodo = state.todos.find((todo) => todo.id === id)
      
      if (existingTodo) {
        existingTodo.text=text
      }  
    }
    
  }  
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer // exporting here to import to store as the store only updates values from registered reducers
