import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  // some people do use <userContext.Provider value={}> directly here below return 
  return (
    <UserContextProvider> 
      <h1 className='m-4 text-3xl'> This is user context demo project</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
