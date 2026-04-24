import React from 'react';

export default function Container( {children} ) { 
  return <div className='w-full max-w-7xl mx-auto p-4 '> {children} </div>;
}


// accepts properties as children 
// in container we define styling properties and display values as it is, its just used in places when say we wanna adjust width or bg color etc..
//  as it sounds it is just a container