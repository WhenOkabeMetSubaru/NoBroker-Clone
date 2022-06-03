import React, { useState } from 'react'

const Services = () => {



  return (

    <section className='mt-20'>
      <div className='bg-pink-800 h-[35vh]'>
        <div className='flex justify-between bg-pink-800'>
          <select id="sites" className="dropdown4 overflow-y-scroll   py-3 w-[275px] mx-16 md:px-5 border-[1px] font-semibold text-gray-500 bg-white ">
            <option value="">Search for a service</option>
            <option value="Home Painting">Home Painting</option>
            <option value="Home Cleaning">Home Cleaning</option>
            <option value="Home Sanitization">Home Sanitization</option>
            <option value="Appliance Repair">Appliance Repair</option>
            <option value="AC Repair">AC Repair</option>
            <option value="Pest Control">Pest Control</option>
            <option value="Electrician">Electrician</option>
            <option value="Carpenter">Carpenter</option>
            <option value="Plumber">Plumber</option>
          </select>
          <select id="sites" className="dropdown4  py-3 px-[1px] md:px-5 mr-5 rounded-lg border-[1px] font-semibold text-gray-500 bg-white ">
            <option value="Mumbai">Mumbai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
        <div className='flex justify-center mt-16'>
          <div className='bg-white h-48  w-3/4 md:w-1/3 shadow-md text-center'>
            Demo
          </div>
        </div>

      </div>
      <div className='mt-48'>
          <ul className='grid grid-cols-3 gap-1  md:flex md:justify-evenly text-center'>
            <li><img alt="imagedemo"/>Painting</li>
            <li><img alt="imagedemo"/>Cleaning</li>
            <li><img alt="imagedemo"/>Home Sanitization</li>
            <li><img alt="imagedemo"/>AC Service & Repair</li>
            <li><img alt="imagedemo"/>Electrician</li>
            <li><img alt="imagedemo"/>Carpentry</li>
            <li><img alt="imagedemo"/>Plumbing</li>
            <li><img alt="imagedemo"/>Home Renovation</li>
          </ul>
      </div>


    </section>
  )
}

export default Services