import React from 'react'

const Mybooking = () => {
    return (
        <div className='h-[100vh] flex-col '>
            <div className='bg-pink-900 h-56 w-full'>
                Hello
                <div className='flex justify-center mt-32 '>
                    <div className=' h-[65vh] w-[45vw] rounded-xl shadow-lg  bg-white font-bold '>
                        <ul className='border-[1px] flex justify-start text-sm h-20'>
                            <li className='ml-12 mt-7  underline decoration-red-500'>ONGOING BOOKING</li>
                            <li className='ml-12 mt-7'>QUOTATIONS</li>
                            <li className='ml-12 mt-7'>BOOKING HISTORY</li>
                        </ul>
                        <div className='flex justify-center items-center'>
                            <div className='text-center mt-40 text-gray-400 text-sm'>

                           
                            <img className='ml-28 mb-4' src="https://assets.nobroker.in/nb-new/public/Common/noData.svg"/>
                            <p>Looks like you don't have any bookings here but you<br/> you can request for a service now</p>
                            <button className='bg-green-700 mt-4 text-md text-white px-5 py-2 font-semibold'>Book Now</button></div> 
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Mybooking