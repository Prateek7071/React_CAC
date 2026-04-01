import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import { useLoaderData } from 'react-router';

export default function Github() {
  // const [data, setData] = useState()
  // useEffect(() => {
  //   fetch("https://api.github.com/users/prateek7071")
  //     .then((res)=>res.json())
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //     })
  // }, [])
  //
  
  const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data?.followers}
      <img src={data?.avatar_url} alt='Github avatar' width={300}/>
    </div>
  );
}

export const GithubInfo = async () => {
  const response = await fetch("https://api.github.com/users/prateek7071")
  if(!response.ok) throw new Error("Failed to fetch github data")
  return  response.json()//this is a promise that we are able to return here
}