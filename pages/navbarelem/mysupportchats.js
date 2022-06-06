import React from 'react'

const MySupportChat = () => {
  return (
    <div className='mt-16 flex '>
        <div className='w-1/5 h-[100vh]'>
         <h1 className='m-5 text-lg font-semibold'>Messaging</h1>
         <h1 className='h-[1px] w-full border-[1px]'></h1>
         <div className='flex justify-center mt-48 text-center'>
             <div> 
                 <h1>No Messages,Yet.</h1>
             <p>Your conversatins will appear here.</p>
            </div>
            
         </div>
        </div>
        <div className='w-4/5 h-[100vh] text-center bg-green-50 flex justify-center'>
                <div className='mt-[50vh]'>
                    <h1>
                        Start a Conversation Now.

                    </h1>
                    <p>Select a conversation to start chatting</p>
                </div>
        </div>
    </div>
  )
}

export default MySupportChat