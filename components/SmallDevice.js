import React,{useState} from 'react'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { GrServices } from 'react-icons/gr'
import {MdOpenInNewOff} from 'react-icons/md'
import { BiWallet } from 'react-icons/bi'
import { AiOutlineGift } from 'react-icons/ai'
const SmallDevice = () => {

  const [active,setActive] = useState("home");
  const toggleactive=(name)=>{
    setActive("");
    setActive(name);
  }
  return (
    <div>
 <div className='
            md:hidden block
             text-s  
             bg-gray-400
             text-white
             fixed
             inset-x-0
             bottom-0
             left-0
             right-0
             
             '>
        <div className=''>
          <div className='text-center flex justify-between w-full text-sm'>
            <div className=' w-1/4'>
              <div className='flex justify-center'>
                <div ><Link  href="/"><a><AiFillHome onClick={()=>(toggleactive("home"))} className={` w-7 h-8 ${active=="home"?"text-red-500":""}`} /></a></Link>
                </div>
              </div>
              <h1 className='mb-3'>Home</h1>

            </div>

            <div className=' w-1/4'>
              <div className='flex justify-center'>
                <div><Link href="/services"><a><MdOpenInNewOff onClick={()=>(toggleactive("services"))}
                  className={` w-7 h-8 ${active=="services"?"text-red-500":""}`} /></a></Link></div>
              </div>
              <h1>Services</h1>
            </div>

            <div className='w-1/4 '>
             <div className='flex justify-center'> <div><Link href="/rentMoney"><a><BiWallet onClick={()=>(toggleactive("rentpay"))}
              className={` w-7 h-8 ${active=="rentpay"?"text-red-500":""}`} /></a></Link></div></div>
                <h1>Rent Pay</h1>
              </div>
            <div className='w-1/4 '>
             <div className='flex justify-center'><div ><Link href="/rewards"><a><AiOutlineGift onClick={()=>(toggleactive("rewards"))} className={` w-7 h-8 ${active=="rewards"?"text-red-500":""}`}/></a></Link></div></div><h1>Rewards</h1> </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SmallDevice