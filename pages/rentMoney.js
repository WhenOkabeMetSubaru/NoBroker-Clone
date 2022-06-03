import React from 'react'

const RentMoney = () => {
  return (
    <section>
      <div className='flex justify-center'>
        <div className='h-[150vh] text-white w-[87vw] bg-blue-800 flex justify-evenly '>

          <div className=' mt-48 w-1/2 grid grid-cols-1 gap-1 ml-10'>
            <div className='text-3xl'>Pay Rent and Fees With Credit Card</div>
          </div>

          {/*---------------------------------- */}
          <div className='mt-48 w-1/2 flex justify-center'>
            <div className='w-3/4 border-2 text-black h-1/2 rounded-lg bg-white'>
              <div className='ml-16 mt-5 w-3/5 h-24 border-2'>Offers</div>
              <div>
                <ul className='md:flex flex-rows justify-evenly text-sm mt-6 text-black'>
                  <li>House Rent</li>
                  <li>School/College Fees</li>
                  <li>Tution Fees</li>
                  <li>Society Maintenance</li>
                  <li>Office/Shop Rent</li>
                </ul>
              </div>
              <div><textarea  className="border-2 w-5/6 h-8 mt-5">Hello</textarea></div>
              <div><textarea  className="border-2 w-5/6 h-8 mt-5">Hello</textarea></div>
              <div><textarea  className="border-2 w-5/6 h-8 mt-5">Hello</textarea></div>
              <div><textarea  className="border-2 w-5/6 h-8 mt-5">Hello</textarea></div>
            </div>
          </div>


        </div>
      </div>


    </section>
  )
}

export default RentMoney