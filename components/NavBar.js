import React,{useState} from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { CgMenu } from 'react-icons/cg'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import Link from 'next/link'
const NavBar = () => {
    const [open,setOpen] = useState("close");
    const [menu,setMenu]=useState("close")
    const toggledropdown=()=>{
        if(open==='open'){
            setOpen("close")
        }
        else if(open=="close"){
            setOpen("open")
        }
    }
    const togglemenu =()=>{
      if(menu==='open'){
        setMenu("close")
    }
    else if(menu=="close"){
        setMenu("open")
    }
    }
    return (
        <div className='fixed  left-0 top-0 w-full z-[999px] bg-white'>
            <nav className=' shadow-md p-[2px] ml-1 mr-1 lg:flex lg:justify-between flex justify-center  py-2' >
                <div>
                    <Link href="/"><a><img className='w-[140px] lg:w-[170px]' src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg" alt="logo" /></a></Link>
                </div>
                
                <div>
                    <ul className='mb-1 lg:flex lg:justify-evenly lg:mt-3 hidden text-sm'>
                        <li className='flex cursor-pointer items-center mx-3 border-[1px] border-grey px-2  '><img className='h-5 mr-1' src='https://assets.nobroker.in/nb-new/public/myBooking.svg' /><Link href="/mybooking"><a> My Bookings</a></Link></li>
                        <li className='flex mx-3 items-center border-[1px] text-center  border-grey px-2 cursor-pointer'><img className='w-5 h-4  mr-2 mb-1 mt-1' src='https://assets.nobroker.in/nb-new/public/payrent.png' /><Link href="/payrent"><a>Pay Rent</a></Link></li>
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
                                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                  </button>
                               </div>
                              
                                
                               <div className={`origin-top-right ${open==="close"?'hidden':''} absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                  <div className="py-1" role="none">
                                   
                                    <a href="/easy" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Profile</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">My Chats</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">My Support Charts</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">My Residential Plans</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">My Commercial Plans</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">My Dashboard</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">My Listing</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">My Rental Agreements</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">My Sign Out</a>
                                    <form method="POST" action="#" role="none">
                                      <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            }
                            </div>
                        </li>
                        <li className='flex text-gray-500 ml-10 mr-4  px-2'><IoIosNotificationsOutline className='h-8 w-6' /></li>
                        <li className='flex mx-3 text-gray-500'>
                        {
                                
                                <div className={`relative  inline-block text-left`}>
                                 <div>
                                   <button type="button" onClick={togglemenu}  className={`inline-flex  justify-center w-full  py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`} id="menu-button" aria-expanded="true" aria-haspopup="true">
                                     
                                    
                                     <CgMenu className='mt-[3px] w-7 h-4'/>
                                     Menu
                                   </button>
                                </div>
                               
                                 
                                <div className={`origin-top-right ${menu==="close"?'hidden':''} absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                   <div className="py-1" role="none">
                                    
                                     <a href="/easy" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Post Your Property</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Rental Agreement</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Painting & Clearning</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Refer & Earn</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Rent Receipts</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Tenant Plans</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Owner Plans</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Buyer Plans</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Seller Plans</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Commercial Plans</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Carrers</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Corporate Enquiry</a>
                                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Contact Us</a>
                                     <div className='ml-5'>
                                       <h1>Email</h1>
                                     <h2>hello@nobroker.in</h2>

                                     <div className='flex justify-between p-2 mr-1'>
                                       <RiFacebookCircleLine className='w-10 h-10 text-black'/>
                                       <TiSocialTwitterCircular className='w-10 h-10 text-black'/>
                                       <AiOutlineGooglePlus className='w-10 h-10 text-black'/>
                                     </div>
                                     </div>
                                     
                                     
                                   </div>
                                 </div>
                               </div>
                             }


                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar