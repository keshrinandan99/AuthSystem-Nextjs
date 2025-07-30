import React from 'react'

function UserProfile({params}:any) {
  return (
    <div className='flex justify-center min-h-screen items-center '>
        <h1 className='text-xl'>User profile :  </h1>
        <br/>
        <span className='ml-4 text-xl bg-orange-400 rounded p-2 px-5'>{params.id}</span>
        
    </div>
  )
}

export default UserProfile