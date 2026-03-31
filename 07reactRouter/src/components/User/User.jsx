import React from 'react';
import { useParams } from 'react-router';

export default function User() {
  const {userId} = useParams()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      User : {userId}
    </div>
  );
}
//use http://localhost:5173/user/Mango12