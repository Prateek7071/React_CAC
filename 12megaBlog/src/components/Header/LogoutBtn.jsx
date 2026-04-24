import React from 'react';
import  {useDispatch} from 'react-redux'
import { AuthService } from '../../appwrite/auth';
import { logout } from '../../store/authSlice'


export default function LogoutBtn() {
  
  const dispatch = new useDispatch()
  
  const logoutHandler = () => {
    AuthService.logout()
      .then(() => {
        dispatch(logout())
      })
      .catch(e=>console.log(e))
  }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-b-full'>
      Logout
    </button>
  );
}
