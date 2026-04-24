import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authService } from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components/index'
import {Outlet} from 'react-router'

import './App.css'

function App() {

  const [loading, setLoading] = useState(true) // init true so that when we have data we can have it set to false.
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .catch(Error=>console.log(Error))
      .finally(()=>setLoading(false))
  }, [dispatch])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet/>
          
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
