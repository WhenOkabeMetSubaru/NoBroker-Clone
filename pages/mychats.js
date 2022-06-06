import React from 'react'

const MyChats = () => {
  return (
    <div className='mt-16'>
        <div className='ml-3 border-[1px] w-1/3 h-[100vh]'>
            <h1>Welcome back,</h1>
            <h1 className='text-2xl'>User!</h1>
            <button className='bg-green-600 font-semibold mt-10 text-white py-1 px-3'>Start New Chat</button>
            <h1 className='h-[1px] w-full mt-10 bg-gray-300'></h1>
            <input type="text" className='w-[500px] border-[1px] p-2 m-14 ' placeholder='Search for Message'/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default MyChats