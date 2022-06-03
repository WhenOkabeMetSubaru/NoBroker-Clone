import React from 'react'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { GrServices } from 'react-icons/gr'
import { BiWallet } from 'react-icons/bi'
import { AiOutlineGift } from 'react-icons/ai'
const SmallDevice = () => {
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
             
             '>
        <div className=''>
          <div className='text-center flex justify-between w-full text-sm'>
            <div className=' w-1/4'>
              <div className='flex justify-center'>
                <div ><Link href="/"><a><AiFillHome className=' w-7 h-8 ' /></a></Link>
                </div>
              </div>
              <h1>Home</h1>

            </div>

            <div className=' w-1/4'>
              <div className='flex justify-center'>
                <div><Link href="/services"><a><GrServices
                  className='w-7 h-8' /></a></Link></div>
              </div>
              <h1>Services</h1>
            </div>

            <div className='w-1/4 '>
             <div className='flex justify-center'> <div><Link href="/rentMoney"><a><BiWallet
              className='w-7 h-8' /></a></Link></div></div>
                <h1>Rent Pay</h1>
              </div>
            <div className='w-1/4 '>
             <div className='flex justify-center'><div ><Link href="/rewards"><a><AiOutlineGift className='w-7 h-8' /></a></Link></div></div><h1>Rewards</h1> </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SmallDevice