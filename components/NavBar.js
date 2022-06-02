import React from 'react'

const NavBar = () => {
  return (
    <div className='fixed  left-0 top-0 w-full z-[999px] bg-white'>
        <nav className= ' shadow-md p-[2px] ml-1 mr-1 lg:flex lg:justify-between flex justify-center  py-2' >
            <div>
                <img className='w-[170px]' src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg" alt="logo"/>
            </div>
            <div>
                <ul className='lg:flex lg:justify-evenly lg:mt-3 hidden text-sm'>
                    <li className='flex items-center mx-3 border-[1px] border-grey px-2  '><img className='h-5 mr-1' src='https://assets.nobroker.in/nb-new/public/myBooking.svg'/> My Bookings</li>
                    <li className='flex mx-3 items-center border-[1px] text-center  border-grey px-2 '><img className='w-5 h-4  mr-2 mb-1 mt-1' src='https://assets.nobroker.in/nb-new/public/payrent.png'/>Pay Rent</li>
                    <li className='bg-green-600 text-center py-1 w-40 text-white'>For Property owners</li>
                    <li className='flex mx-3'><img src="https://assets.nobroker.in/nb-new/public/nbCash.svg"/></li>
                    <li className='flex mx-3 border-[1px] border-grey px-2'><img/>User</li>
                    <li className='flex mx-3  px-2'>Noti</li>
                    <li className=''><img/>Menu</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar