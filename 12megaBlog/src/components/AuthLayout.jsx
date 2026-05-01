//mechanism to protect pages and routes
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


export default function Protected({children,authentication= true}) {

  //todo:make it more easy
  // 
  // if (authStatus ===true){
  //   navigate("/")
  // } else if (authStatus === false) {
  //   navigate("/login")
  // }

  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const authStatus = useSelector(state => state.auth.status)

  useEffect(() => { 
    if (authentication && authStatus !== authentication) {
      navigate("/login")
    } else if (!authentication && authStatus !== authentication) {
      navigate("/")
    }
    setLoader(false)
  },[authStatus, navigate, authentication])
  
  return loader ? <h1>Loading...</h1> : <>{ children }</>
}
