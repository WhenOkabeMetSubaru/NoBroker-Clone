import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { CgMenu } from 'react-icons/cg'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { AiFillCamera, AiFillHome, AiOutlineGooglePlus } from 'react-icons/ai'
import Link from 'next/link'
const NavBar = () => {
  const [open, setOpen] = useState("close");
  const [menu, setMenu] = useState("close")
  const [mylist1, setMyList1] = useState("close")
  const [mymenu, setMyMenu] = useState("close")
  const [mylist2, setMyList2] = useState("close")
  const [mylist3, setMyList3] = useState("close")
  const [mylist4, setMyList4] = useState("close")
  const [mylist5, setMyList5] = useState("close")
  const [mylist6, setMyList6] = useState("close")
  const [mylist7, setMyList7] = useState("close")
  const [mylist8, setMyList8] = useState("close")
  const [mylist9, setMyList9] = useState("close")

  const toggledropdown = () => {
    if (open === 'open') {
      setOpen("close")
    }
    else if (open == "close") {
      setOpen("open")
    }
  }
  const togglemenu = () => {
    if (menu === 'open') {
      setMenu("close")
    }
    else if (menu == "close") {
      setMenu("open")
    }
  }
  const togglemenubar = () => {
    if (mymenu === 'open') {
      setMyMenu("close")
    }
    else if (mymenu == "close") {
      setMyMenu("open")
    }
  }

  /*-------------------------------------------------------*/
  const togglelist1=()=>{
    if (mylist1 === 'open') {
      setMyList1("close")
    }
    else if (mylist1 == "close") {
      setMyList1("open")
    }
  }
  const togglelist2=()=>{
    if (mylist2 === 'open') {
      setMyList2("close")
    }
    else if (mylist2 == "close") {
      setMyList2("open")
    }
  }

  const togglelist3=()=>{
    if (mylist3 === 'open') {
      setMyList3("close")
    }
    else if (mylist3 == "close") {
      setMyList3("open")
    }
  }
  const togglelist4=()=>{
    if (mylist4 === 'open') {
      setMyList4("close")
    }
    else if (mylist4 == "close") {
      setMyList4("open")
    }
  }
  const togglelist5=()=>{
    if (mylist5 === 'open') {
      setMyList5("close")
    }
    else if (mylist5 == "close") {
      setMyList5("open")
    }
  }
  const togglelist6=()=>{
    if (mylist6 === 'open') {
      setMyList6("close")
    }
    else if (mylist6 == "close") {
      setMyList6("open")
    }
  }
  const togglelist7=()=>{
    if (mylist7 === 'open') {
      setMyList7("close")
    }
    else if (mylist7 == "close") {
      setMyList7("open")
    }
  }
  const togglelist8=()=>{
    if (mylist8 === 'open') {
      setMyList8("close")
    }
    else if (mylist8 == "close") {
      setMyList8("open")
    }
  }
  const togglelist9=()=>{
    if (mylist9 === 'open') {
      setMyList9("close")
    }
    else if (mylist9 == "close") {
      setMyList9("open")
    }
  }
  /*--------------------------------------------------------*/
  return (
    <>

      <div className='fixed  left-0 top-0 w-full  bg-white'>

        <nav className=' shadow-md p-[2px] ml-1 mr-1 lg:flex lg:justify-between flex justify-between  py-2' >

          <div className='md:hidden mt-1 flex justify-start '>
            <div className=''>
              <CgMenu onClick={togglemenubar} className='h-7 w-7 ' />

            </div>

          </div>
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
                        <button type="button" onClick={toggledropdown} className={`inline-flex  justify-center w-full  py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`} id="menu-button" aria-expanded="true" aria-haspopup="true">
                          User

                          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>


                      <div className={`origin-top-right ${open === "close" ? 'hidden' : ''} absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
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
                      <button type="button" onClick={togglemenu} className={`inline-flex  justify-center w-full  py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`} id="menu-button" aria-expanded="true" aria-haspopup="true">


                        <CgMenu className='mt-[3px] w-7 h-4' />
                        Menu
                      </button>
                    </div>


                    <div className={`origin-top-right ${menu === "close" ? 'hidden' : ''} absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
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
                            <RiFacebookCircleLine className='w-10 h-10 text-black' />
                            <TiSocialTwitterCircular className='w-10 h-10 text-black' />
                            <AiOutlineGooglePlus className='w-10 h-10 text-black' />
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
      <div className={`bg-white z-10 h-[100vh] border-[1px] border-black top-0 fixed w-[80vw] ${mymenu == "open" ? 'block' : 'hidden'}  `}>
        <div onClick={togglemenubar} className='bg-red-600 font-semibold text-white py-8 text-center'>
          User
        </div>
        <div className='flex justify-start mt-2'>
          <AiFillHome className='mx-5 text-gray-500 w-6 h-6 mt-1' /><h1>Home</h1>
        </div>
        <div className='flex justify-start'>
          <AiFillCamera className='mx-5 text-gray-500 w-6 h-6 mt-1' /><h1>Post Free Property  ads</h1>
        </div>
        <div>
          <div className="w-full overflow-y-scroll h-full shadow-md bg-white px-1 absolute" id="sidenavExample">
            <ul className="relative">
              <li className="relative" id="sidenavEx1">
                <a onClick={togglelist1} className={`flex mt-3 bg-gray-100   items-center text-sm py-1 px-6 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer`} data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                  
                  <span>My Services</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </a>
                <ul className={`relative ${mylist1==="close"?'hidden':'block'} accordion-collapse collapse`} id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">My Bookings</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">My Appointments</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">My Shortlists</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">My Chats</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">My Contacted Properties</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">My Property Listings</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Interest Shown</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">My Payments</a>
                  </li>

                </ul>
              </li>
              <li className="relative" id="sidenavEx1">
                <a onClick={togglelist2} className={`flex mt-3 bg-gray-100   items-center text-sm py-1 px-6 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer`} data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                  
                  <span>NBcash Wallet</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </a>
                <ul className={`relative ${mylist2==="close"?'hidden':'block'} accordion-collapse collapse`} id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Wallet Summary</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Rewards</a>
                  </li>
                </ul>
              </li>
              <li className="relative" id="sidenavEx1">
                <a onClick={togglelist3} className={`flex mt-3 bg-gray-100   items-center text-sm py-1 px-6 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer`} data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                  
                  <span>Residential Plans</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </a>
                <ul className={`relative ${mylist3==="close"?'hidden':'block'} accordion-collapse collapse`} id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Owner</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Sellers</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Tenants</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Buyers</a>
                  </li>
                </ul>
              </li>
              <li className="relative" id="sidenavEx1">
                <a onClick={togglelist4} className={`flex mt-3 bg-gray-100   items-center text-sm py-1 px-6 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer`} data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                  
                  <span>Commercial Plans</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </a>
                <ul className={`relative ${mylist4==="close"?'hidden':'block'} accordion-collapse collapse`} id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Owner</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Sellers</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Tenants</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Buyers</a>
                  </li>
                </ul>
              </li>
              <li className="relative" id="sidenavEx1">
                <a onClick={togglelist5} className={`flex mt-3 bg-gray-100   items-center text-sm py-1 px-6 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer`} data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                  
                  <span>Home Services</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </a>
                <ul className={`relative ${mylist5==="close"?'hidden':'block'} accordion-collapse collapse`} id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Packers and Movers</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Painting</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Clearning</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Interiors</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Furniture</a>
                  </li>
                </ul>
              </li>
              <li className="relative" id="sidenavEx1">
                <a onClick={togglelist6} className={`flex mt-3 bg-gray-100   items-center text-sm py-1 px-6 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer`} data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                  
                  <span>NoBroker Pay</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </a>
                <ul className={`relative ${mylist6==="close"?'hidden':'block'} accordion-collapse collapse`} id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Pay Your Rent</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Deposit Payment</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Maintainance Payments</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Electricity & Gas Payments</a>
                  </li>
                </ul>
              </li>
              <li className="relative" id="sidenavEx1">
                <a onClick={togglelist7} className={`flex mt-3 bg-gray-100   items-center text-sm py-1 px-6 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer`} data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                  
                  <span>Legal Assitance & Loan</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </a>
                <ul className={`relative ${mylist7==="close"?'hidden':'block'} accordion-collapse collapse`} id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Rental Agreement</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Police Intimation</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Tenant Verification</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Home Loan</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Home Deposit Loan</a>
                  </li>
                </ul>
              </li>
              <li className="relative" id="sidenavEx1">
                <a onClick={togglelist8} className={`flex mt-3 bg-gray-100   items-center text-sm py-1 px-6 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer`} data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                  
                  <span>Utilities</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </a>
                <ul className={`relative ${mylist8==="close"?'hidden':'block'} accordion-collapse collapse`} id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Know Your Rent</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Create Rent Receipts</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Click & Earn</a>
                  </li>
                </ul>
              </li>
              <li className="relative" id="sidenavEx1">
                <a onClick={togglelist9} className={`flex mt-3 bg-gray-100   items-center text-sm py-1 px-6 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer`} data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                  
                  <span>Help & Support </span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </a>
                <ul className={`relative ${mylist9==="close"?'hidden':'block'} accordion-collapse collapse`} id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Support Topics</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Blog</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Feedback</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">About Us</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Sellers</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Sellers</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Sellers</a>
                  </li>
                  <li className="relative">
                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">For Sellers</a>
                  </li>
                  
                </ul>
              </li>
             
              
             
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default NavBar