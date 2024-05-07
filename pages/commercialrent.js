import React from 'react'
import {FaSearch} from 'react-icons/fa'
import Link from 'next/link'
const Commercial = () => {
  return (
    <div className=''>
    

    <div className='mt-24'>
      <div className='flex justify-center text-lg md:text-3xl  text-gray-500'>
        <h1>World's Largest NoBrokerage Property Site</h1>
      </div>
      <div className='flex justify-center mt-7 font-semibold  text-sm '>
        <h3 className='flex justify-center bg-orange-100  py-2 px-4 rounded-md'><img src="https://assets.nobroker.in/nb-new/public/nbCash.svg" />Payrent with Credit Card!</h3>
      </div>
      <div className='buyrent mt-8'>
        <ul className='flex justify-center '>
          <Link href="/buy"><a><li className='border-[1px] border-gray-200 px-11 py-[9px]'>Buy</li></a></Link>
          <Link href="/rent"><a><li className='border-[1px] border-gray-200 px-10 py-[9px]'>Rent</li></a></Link>
          <Link href="/commercialrent"><a><li className='border-[1px]  border-gray-200 px-4 py-[9px] '>Commercial</li></a></Link>
        </ul>
        <div className="field flex justify-center">

          <select id="sites" className="dropdown4  py-3 px-[1px] md:px-5 border-[1px] font-semibold text-gray-500 bg-white ">
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="pune">Pune</option>
            <option value="chennai">Chennai</option>
            <option value="gurgaon">Gurgaon</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="delhi">Delhi</option>
            <option value="noida">Noida</option>
            <option value="greaternoida">Greater Noida</option>
            <option value="ghaziabad">Ghaziabad</option>
            <option value="faridabad">Faridabad</option>
          </select>
          <input className='px-2 md:px-48 border-[1px] ' type="text" id="demo" name="demo" placeholder="Search upto 3 localities" />
          <button className='px-1 md:px-14 flex py-3 border-1 bg-red-500 font-semibold text-white border-gray-200'><FaSearch className='mr-[3px] mt-[7px]' />Search</button>
        </div>

        {/* ----------------------------------------------------------*/}


      </div>
      <div className='selectcontainer flex justify-center'>
        <div className='grid grid-cols-1 gap-1 md:flex   md:justify-start   w-[870px]  py-2 bg-gray-50 border-[1px]'>
          <div className='apartmentdropdown ml-[5px] px-1'>
            <select id="sites" className="dropdown  text-gray-500 text-xs py-[10px] px-10 border-[1px] bg-white ">
              <option value="" >Apartment Type</option>
             <option value="1RK">1 RK</option>
              <option value="1bhk">1 BHK</option>
              <option value="2bhk">2 BHK</option>
              <option value="3bhk">3 BHK</option>
              <option value="4bhk">4 BHK</option>
              <option value="4+bhk">4+ BHK</option>
            </select>
          </div>
          <div className='propertystatus px-1'>
            <select id="sites" className="dropdown text-gray-500 text-xs py-[10px] px-10 border-[1px] bg-white ">
              <option value="">Property Status</option>
              <option value="underconstruction">Under Construction</option>
              <option value="ready">Ready</option>
             
            </select>
          </div>
          <div className='newbuilderprojects md:px-2'>
            <div className='text-gray-500 text-xs py-[10px] px-1 md:px-4 border-[1px] bg-white'><input className='mr-[7px]' type="checkbox" />New Builder Projects</div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-14 font-semibold '>
        <div><hr className='w-24 mt-3 mr-3 border-gray-400' /></div>
        <div>Are you a Property Owner?</div>
        <div><hr className='w-24 mt-3 ml-3 border-gray-400' /></div>
      </div>

      <div className='freepropertybutton flex justify-center mt-20 md:mt-6'>
        <Link href="/postproperty"><a><button type="button" className='border-[1px] py-2 px-6 bg-green-600 text-white font-semibold'>Post Free Property ad</button></a></Link>

      </div>
      <div className='items-center flex justify-center mt-10 md:mt-4 text-sm py-3 text-white bg-indigo-900'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAABGdBTUEAALGPC/xhBQAAAwtJREFUSA2dlm1ojlEYx92zPWazyLxnU971UEiGfBhmIfENX0haSk+RvKy8JCXxxQc+IG9LUZuSjKUkHxSSTLHGHjNbXpKXsKlp1uP3f7Zzd9rut8dVv65zrvt/Xee+zzn3uW9nQAaWSqUc5HnQ7ThOZwap0aQMUATV8BXa4Q98hIswPEqVrDARhbagqYfHEOdJCmAQ7YXwHr6hWYr/f6PABvgFM/2qcK0UZKV+msA4ieOgC2ZLiM+CsRZjTAFiq6AFhphYZE9SFVSaBBWB4/AQasC9Jg3903DY6Pv6oDUqQ1xjJWjHxaABNJUjwLZqOsvtQGibO3NAO2ugEasNcTgACRM3nlgxtJh+ZE9SJww2CbRzoB7WmJjtiU+H13bMbgdNXRNCd7expbvor4MEBXPsIr3tOP6NRzwdChqoDkWFnchgSfoXYJsdZ2Ctn7S1djxSm+RcaIL1YQloDsID0ICZG4nzQLbXK5u4Ns1+CbChXhoTyzYNL89UPaXAeK7V4kvwV6EZtM2nwWZIwQS0P/G+5vmoFB1GxhRIUuAHfd2Q1qUMiqAb3sIdqEKjwaKZisMOaIQOeAKfoDysAhq9Y8WBOgRa9EugO78CmqK00Z4DH+AI9NuhxGKwHaSRPQJ9PmQlUAj5ptgkOnug75Firkt8C1Rkas8tpM+2TfTb4AboZR0JX2AR7AaZbl7m5pl8X494K3yGe3ANWuFsL+kXmHb6qfGj4BBoSq/DOc/NYI+GaAaL3agYbX3Gl8Es0M7TAPugA00B3jW0hXROwlpQO9hISMJtKAf77Mujrw+j1uSyXYX+RtDTn4CeNbIFXm2EMagAvfm/4QU0w3fQDbjHEe2JcBeewVyvepFiJOdDHLSB3JOAdjZUgv4fdoH7eTGF3TXi4gKCi0FzrVP4JTwPexnJm4/uPLRBAn0rvp/Z78Zoruo/4C+sBM273o8zsAJy6btGX/8UpwjchKMMsNpvEDfJr0GhybAT7kM71IG2awPoH+8Y6LgKNXfqwpQU1O5ZAjr33sErnqATH8n+AUpctG5RzxqlAAAAAElFTkSuQmCC" />
        <h3 className='ml-2 mr-2'>Do you know how much <strong>loan</strong> you can get?Get maximum with <strong>NoBroker</strong></h3>
        <button className='border-[1px] bg-white text-black rounded-md px-1 py-1 text-xs'>Check Eligibility</button>
      </div>
      {/*------------------------Items div--------------------------------------------*/}

      <div>
        <div className='mt-10'>
            <ul className='md:flex grid grid-cols-3 gap-1    md:justify-around text-sm pl-8'>
              <Link href="/services/homeloan"><a><li className=''><img className='w-[60px] h-[60px] md:ml-2 mb-1' src="/homeLoan.png" /><h1 className=''>Home Loan</h1></li></a></Link>
              <Link href="/services/propertylegalservices"><a> <li className='items-center '><img className='w-[50px] h-[60px] mb-1 md:ml-10 ' src="/legalServices.png" />Property Legal Services</li></a></Link>
              <li className=''><img className='w-[60px] h-[60px] mb-1 md:ml-5 ' src="/saleAgreeemnt.png" />Sale Agreement</li>
              <li className='items-center '><img className='w-[60px] h-[60px] mb-2 md:ml-7 ' src="/newbuilder.png" />New Builder Projects</li>
              <li className='items-center '><img className='w-[60px] h-[60px] mb-2' src="/interiors.png" />Interiors</li>
              <li className='items-center '><img className='w-[60px] h-[60px] mb-2 md:ml-6 ' src="/brokernri.png" />NoBroker for NRI's</li>

            </ul>
        </div>
        <div className='whybox flex justify-center mt-10'>
          <div className=''>
            <hr className='md:w-[100px] md:mt-3 hidden md:block   border-gray-400 ' />
          </div>
          <div className='px-10'>
            <h1 className='text-3xl text-slate-500 '>Why Use NoBroker</h1>
          </div>
          <div className=''>
            <hr className='md:w-[100px] md:mt-3 hidden md:block  border-gray-400' />
          </div>
        </div>
        <div className='mt-16'>
            <ul className='flex justify-between text-center md:ml-16 md:mr-16'>
              <li className='flex-column '><img className='md:ml-20 ml-6' src="/avoidbrokers.png" /><h1 className=' text-sm md:text-lg'>Avoid Brokers</h1><p>We directly connect you to verified<br /> owners to sav brokerage</p></li>
              <li className='flex-column '><img className='md:ml-16' src="/legalServices.png" /><h1 className='text-sm md:text-lg'>Free Listing</h1><p>Easy listing process.Also<br /> using WhatsApp</p></li>
              <li className='flex-column '><img className='md:ml-12' src="/homeLoan.png" /><h1 className='text-sm md:text-lg'>Shortlist Without Visit</h1><p>Extensive Information<br />makes it easy</p></li>
              <li className='flex-column '><img className='md:ml-16 ml-8' src="/saleagreeemnt.png" /><h1 className='text-sm md:text-lg'>Rental Agreement</h1><p>Assitance in creating Rental<br /> agreement & Paper work</p></li>
            </ul>
        </div>
      </div>

      {/*-----------------------------NoBrokerAssist Plan-----------------------------------------------*/}

      <div className='bg-gray-100 mt-20 py-12'>
        <div className='whybox flex justify-center'>
          <div>
            <hr className='md:w-[100px] md:mt-3 hidden md:block  border-gray-400 ' />
          </div>
          <div className='px-10 '>
            <h1 className='text-xl md:text-3xl text-slate-500 '>NoBroker Business Assist Plan for Builders</h1>
          </div>
          <div className=''>
            <hr className='md:w-[100px] md:mt-3 hidden md:block  border-gray-400' />
          </div>
        </div>
        <div className='flex justify-center mt-20'>
          <img className='mr-6 md:mr-32 md:w-[300px] md:h-[250px] w-[120px] h-[125px]' src="data:image/png;base64,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" />
          <div>
            <h1 className='md:mt-10 text-sm md:text-md text-slate-500'>Get in touch with us to Sell or Rent Your Projects</h1>
            <button className='bg-red-500 mt-10 md:px-5 px-2 py-1 md:py-3 text-sm text-white'>Enquire Now</button>
            <div>
              <hr className='w-84 border-[1px] border-gray-300' />
            </div>
            <h3 className='text-xs md:text-sm'>For Builder Enquiries: +91 91080 50400</h3>
          </div>
        </div>
      </div>


      {/*------------------------------We Make difference----------------------------------*/}

      <div className='mt-12'>
        <div className='whybox flex justify-center'>
          <div>
            <hr className='md:w-[100px] hidden md:block  md:mt-3  border-gray-400 ' />
          </div>
          <div className='px-10'>
            <h1 className='md:text-3xl text-2xl text-slate-500 '>We Make A Difference</h1>
          </div>
          <div className=''>
            <hr className=' md:mt-3 md:w-[100px] hidden md:block  border-gray-400' />
          </div>
        </div>
        <ul className='flex justify-evenly text-center mt-20'>
          <li className='border-red-600 text-xl md:text-3xl border-2 text-red-500 font-semibold rounded-full md:py-[62px] py-[30px] px-[20px] md:px-[20px]' >Rs.130 cr+</li>
          <li className='border-red-600 text-xl md:text-3xl border-2 text-red-500 font-semibold rounded-full md:py-[62px] py-[30px] px-[20px] md:px-[20px]' >30 Lakh+</li>
          <li className='border-red-600 text-xl md:text-3xl border-2 text-red-500 font-semibold rounded-full md:py-[62px] py-[30px] px-[20px] md:px-[20px]' >2  -Lakh+</li>
        </ul>
        <ul className='flex justify-evenly'>
          <li className='mt-5 ml-10 md:ml-7 font-semibold  text-md md:text-lg text-gray-700'>Brokerage Saved Monthly</li>
          <li className='mt-5 font-semibold text-md md:text-lg text-gray-700'>Customers Connected Monthly</li>
          <li className='mt-5 mr-2 md:mr-10 font-semibold md:text-lg text-md text-gray-700'>New Listings Monthly</li>
        </ul>
      </div>

      {/*----------------------------Our Customers Love Us---------------------------------------------------- */}

      <div className='items-center text-center bg-blue-600 mt-10 py-8' >
        <div className='text-2xl md:text-3xl text-white'>
          <h1 >Our Customers Love us</h1>
        </div>

        <div className=' md:w-full flex justify-center mt-10 '>
          <div className='border-2 bg-gray-200 border-white md:py-[150px] py-[100px] px-[100px] md:px-[275px]' >
            <h1>Youtube</h1>
          </div>
        </div>
        <div>
          <div className='rows'></div>
          <div className='rows'></div>
          <div className='rows'></div>
        </div>

      </div>

      {/*---------------------------------------------------------------------------- */}

      <div className='flex justify-center mt-10'>
        <div>
          <img className='w-[250px]  md:w-72' src="https://assets.nobroker.in/nb-new/public/Home/homeAppPromotion.png" />
        </div>
        <div className='ml-8 md:ml-48'>
          <h1 className='text-xl md:text-3xl font-semibold text-red-500'>Find A New Home On The Go</h1>
          <h2 className='mt-10 text-xl text-gray-600'>Download our app</h2>
          <h3>Where convenience is at your fingertip</h3>
          <div className='md:flex mt-20'>
            <img className='w-[125px]  mb-2 md:mb-0 md:w-[165px]' src="https://tinyurl.com/ypfc3sm2" />
            <img src="https://tinyurl.com/mr2xe95e" className='ml-5 w-[125px] md:w-[165px]' />
          </div>
        </div>
      </div>



      {/*--------------------------------------------------------------------- */}




      <div className='mt-10 border-[1px]'>
        <div>
          <ul className='flex items-center bg-gray-100 justify-between text-xs md:text-md  border-[1px] py-3 border-gray-300'>
            <li className='md:ml-10' >Flats for Sale</li>
            <li>Flats for Rent</li>
            <li>PG/Hostels</li>
            <li>Flatmates</li>
            <li>Miscellaneous</li>
            <li>Commercial</li>
            <li className='md:mr-10'>New Projects</li>
          </ul>
        </div>
        <div className='flex justify-evenly md:text-sm text-[10px]'>
          <div>
            <h1 className='ml-8 mt-2 text-sm md:text-xl'>Property for sail in Bangalore</h1>
            <ul className='ml-10'>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>

            </ul>
          </div>
          <div>
            <h1 className='ml-8 mt-2 text-sm md:text-xl'>Property for sail in Bangalore</h1>
            <ul className='ml-10'>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>

            </ul>
          </div>
          <div>
            <h1 className='md:ml-8 mt-2 text-md md:text-xl'>Property for sail in Bangalore</h1>
            <ul className='ml-10'>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>
              <li>Flats for Sale in Koramangala</li>

            </ul>
          </div>


        </div>
      </div>



      {/*------------------------------------------------------------------------------ */}
    </div>

   
  </div>


   
  )
}

export default Commercial
