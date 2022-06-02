import React,{useState} from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { CgMenu } from 'react-icons/cg'
const NavBar = () => {
    const [open,setOpen] = useState("close");
    const toggledropdown=()=>{
        if(open==='open'){
            setOpen("close")
        }
        else if(open=="close"){
            setOpen("open")
        }
    }
    return (
        <div className='fixed  left-0 top-0 w-full z-[999px] bg-white'>
            <nav className=' shadow-md p-[2px] ml-1 mr-1 lg:flex lg:justify-between flex justify-center  py-2' >
                <div>
                    <img className='w-[170px]' src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg" alt="logo" />
                </div>
                
                <div>
                    <ul className='mb-1 lg:flex lg:justify-evenly lg:mt-3 hidden text-sm'>
                        <li className='flex items-center mx-3 border-[1px] border-grey px-2  '><img className='h-5 mr-1' src='https://assets.nobroker.in/nb-new/public/myBooking.svg' /> My Bookings</li>
                        <li className='flex mx-3 items-center border-[1px] text-center  border-grey px-2 '><img className='w-5 h-4  mr-2 mb-1 mt-1' src='https://assets.nobroker.in/nb-new/public/payrent.png' />Pay Rent</li>
                        <li className='bg-green-600 text-center py-1 w-40 text-white'>For Property owners</li>
                        <li className='flex mx-1 ml-4'><img src="https://assets.nobroker.in/nb-new/public/nbCash.svg" /></li>
                        <li className='flex mx-5 text-gray-500  border-[2px] rounded-full h-8 w-8 border-gray-300 '>
                            <div className='flex '><FaUserCircle className='w-7 mr-2 h-7 text-gray-500' />
                            {
                                
                               <div className={`relative  inline-block text-left`}>
                                <div>
                                  <button type="button" onClick={toggledropdown}  className={`inline-flex  justify-center w-full  py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`} id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    User
                                   
                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                  </button>
                               </div>
                              
                                
                               <div className={`origin-top-right ${open==="close"?'hidden':''} absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                  <div className="py-1" role="none">
                                   
                                    <a href="/easy" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                                    <form method="POST" action="#" role="none">
                                      <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            }
                            </div>
                        </li>
                        <li className='flex text-gray-500 ml-10 mr-4  px-2'><IoIosNotificationsOutline className='h-8 w-6' /></li>
                        <li className='flex mx-3 text-gray-500'><img /><CgMenu className='h-7 w-4 mx-1' /><h1 className='mt-[3px]'>Menu</h1></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar