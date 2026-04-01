import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import UserContext from '../context/UserContext';

export default function Login() {
  const [username,setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Login'></input>
      <input type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
