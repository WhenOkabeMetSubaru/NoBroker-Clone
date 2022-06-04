import React from 'react'
import { useRouter } from 'next/router'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BsFillChatLeftFill } from 'react-icons/bs'
import {AiOutlineFormatPainter} from 'react-icons/ai'
import {FaHandHoldingUsd,FaFireExtinguisher} from 'react-icons/fa'
import {SiAirtable} from 'react-icons/si'
import {ImHammer2} from 'react-icons/im'
import {GrCertificate} from 'react-icons/gr'
import {GiSteelDoor,GiWifiRouter,GiStrong} from 'react-icons/gi'
import {RiParkingBoxLine} from 'react-icons/ri'

const Slug = () => {
  const router = useRouter();
  console.log(router)
  const { slug } = router.query;
  return (
    <section className='mt-10'>

      <div className='mainbox flex justify-between h-[80vh] bg-gray-200'>
        <div className='imagepart p-5 ml-16  h-[60vh] mt-32 text-white w-4/5 bg-black'>
          hello
        </div>
        <div className='detailspart h-[60vh] mr-14 mt-32 mb-5 w-2/5 bg-white'>
          <div className='grid grid-cols-2 w-[550px] ml-5 mt-4 font-semibold text-[13px] '>
            <div className='detailsgrid'>1 Bedroom<h1>No. of Bedroom</h1></div>
            <div className='detailsgrid'>Apr 24,2022<h1>Posted On</h1></div>
            <div className='detailsgrid'>1 Bathroom<h1>No. of Bathroom</h1></div>
            <div className='detailsgrid'>Immediately<h1>Possession</h1></div>
            <div className='detailsgrid'>1<h1>Balcony</h1></div>
            <div className='detailsgrid'>Sanjivani Sra Chs<h1>Apartment</h1></div>
            <div className='detailsgrid'>Bike and Car<h1>Parking</h1></div>
            <div className='detailsgrid'>None<h1>Power Backup</h1></div>
          </div>

          <div className='bg-gray-100 p-2 m-5 flex justify-between mt-8'>
            <button className='bg-red-500 font-semibold px-10 py-[7px] w-full text-white'>Get Owner Details</button>

            <AiOutlineCalendar className='w-14 bg-green-400 px-1 h-10 mx-8' />
            <BsFillChatLeftFill className='w-12 bg-green-400 h-10 px-2 mx-5' />
          </div>

          <div className='checknow p-2  bg-gray-50 flex justify-between m-8'>
            <h1>Price Trends by NBEstimates</h1>
            <button className='bg-green-600 px-3 py-2 text-sm font-bold text-white'>Check Now</button>
          </div>
          <div className='m-8 bg-gray-50 p-3 text-gray-700'>
            <h1>Report that was not correct in this property</h1>
            <div className='flex justify-start space-x-4 mt-2 text-sm font-semibold'>
              <h1 className='border-[1px] hover:bg-gray-200 border-gray-400 p-[6px]'>Listed by Broker</h1>
              <h1 className='border-[1px] hover:bg-gray-200 border-gray-400 p-[6px]'>Sold Out</h1>
              <h1 className='border-[1px] hover:bg-gray-200 border-gray-400 p-[6px]'>Wrong Info</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='cols2 '>
        <div className='area1'>
          <div className='1box m-10 w-3/5  h-[320px] border-[1px] border-gray-300 bg-white shadow-sm'>
            <h1 className='text-xl font-semibold pl-10 pt-5'>OverView</h1>
            <div className='overviewbox flex justify-between mt-10 text-center text-sm'>
              <div className='flex mx-20 mt-2 justify-between'>
                <div className='mr-20 space-y-3'>
                  <h1>Age of Building</h1>
                  <h1>Maintenance Charges</h1>
                  <h1>Builtup Area</h1>
                  <h1>Facing</h1>
                  <h1>Parking</h1>
                </div>
                <div className='space-y-3'>
                  <h1>Age of Building</h1>
                  <h1>Maintenance Charges</h1>
                  <h1>Builtup Area</h1>
                  <h1>Facing</h1>
                  <h1>Parking</h1>
                </div>
              </div>
              <div className='flex justify-between mt-1'>
                <div className='mr-20 space-y-3'>
                  <h1>Age of Building</h1>
                  <h1>Maintenance Charges</h1>
                  <h1>Builtup Area</h1>
                  <h1>Facing</h1>
                  <h1>Parking</h1>
                </div>
                <div className='mr-20 space-y-3'>
                  <h1>Age of Building</h1>
                  <h1>Maintenance Charges</h1>
                  <h1>Builtup Area</h1>
                  <h1>Facing</h1>
                  <h1>Parking</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='2box bg-white border-[1px] border-gray-300 shadow-sm w-3/5 m-10 h-[200px]'>
              <h1 className='text-xl ml-10 py-3'>NoBroker Services</h1>
              <div>
                <ul className='flex justify-evenly mt-10 text-center'>
                  <li><AiOutlineFormatPainter className='w-14 h-7'/>Painting</li>
                  <li><FaHandHoldingUsd className='w-14 h-7 ml-5'/>Check <br/>Loan Eligibility</li>
                  <li><SiAirtable className='w-14 h-7 ml-4'/>Estimate<br/> Interior Cost</li>
                  <li><ImHammer2 className='w-14 h-7 ml-5'/>Book<br/>Legal Services</li>
                  <li><GrCertificate className='w-14 h-7 ml-4'/>Create<br/> Agreement</li>
                </ul>
              </div>
          </div>
          <div className='3box p-8 m-10 w-3/5 h-[300px]  border-[1px] border-grey-300 bg-white shadow-sm'>
              <h1 className='ml-5 mb-5 text-xl '>Description</h1>
              <p className='text-sm ml-5'>loan is not availabe<br/>
              An affordable one bedroom for sale in Khar East is now available, without any brokerage. This home is over 350 sqft. & even comes with ample space for parking of car and bike. This East facing home is on the 13th floor.<br/>
              <br/>
              You are viewing the right home if you would prefer a house with visitor parking & fire security. If you are looking for a home with security, elevator & internet, this home is just right for you.<br/>
              <br/>
              If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house. Being less than 30 minutes from airport makes this home ideal for frequent flyers


              </p>
          </div>
          <div className='4box bg-white border-[1px] p-5  border-gray-300 shadow-sm w-3/5 m-10 h-[200px]'>
            <h1 className='text-xl'>Amenities</h1>
            <div className='flex justify-evenly mt-10'>
              <GiSteelDoor  className='amenities'/>
              <GiWifiRouter className='amenities'/>
              <FaFireExtinguisher className='amenities'/>
              <GiStrong className='amenities'/>
              <RiParkingBoxLine className='amenities'/>
            </div>
            <div className='flex justify-evenly text-center ml-7'>
              <h1>Lift</h1>
              <h2>Internet Services</h2>
              <h1>Fire Services</h1>
              <h1>Security Guard</h1>
              <h1>Parking</h1>
            </div>
          </div>
        </div>
        {/*----------------Area - 2-----------------*/}
      </div>


    </section>
  )
}

export default Slug