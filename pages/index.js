import Head from 'next/head'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { GrServices } from 'react-icons/gr'
import { BiWallet } from 'react-icons/bi'
import { AiOutlineGift } from 'react-icons/ai'
export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>No Broker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
' mr-[3px] mt-[7px]' />Search</button>
            <button className='px-3 md' mr-
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
            <div className='newbuilderprojects md:px-1'>
              <div className='text-gray-500 text-xs py-[10px] px-1 md:px-4 border-[1px] bg-white'><input className='mr-[7px]' type="checkbox" />New Builder Projects</div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-14 font-semibold '>
          <div><hr className='w-24 mt-3 mr-3 border-gray-400' /></div>
          <div>Are you a Property Owner?</div>
          <div><hr className='w-24 mt-3 ml-3 border-gray-400' /></div>
        </div>

        <div className='freepropertybutton flex justify-center mt-20 md:mt-7'>
          <Link href="/postproperty"><a><button type="button" className='border-[1px] py-2 px-6 bg-green-600 text-white font-semibold'>Post Free Property ad</button></a></Link>

        </div>
        <div className='items-center flex justify-center mt-10 md:mt-4 text-sm py-3 text-white bg-indigo-900'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAABGdBTUEAALGPC/xhBQAAAwtJREFUSA2dlm1ojlEYx92zPWazyLxnU971UEiGfBhmIfENX0haSk+RvKy8JCXxxQc+IG9LUZuSjKUkHxSSTLHGHjNbXpKXsKlp1uP3f7Zzd9rut8dVv65zrvt/Xee+zzn3uW9nQAaWSqUc5HnQ7ThOZwap0aQMUATV8BXa4Q98hIswPEqVrDARhbagqYfHEOdJCmAQ7YXwHr6hWYr/f6PABvgFM/2qcK0UZKV+msA4ieOgC2ZLiM+CsRZjTAFiq6AFhphYZE9SFVSaBBWB4/AQasC9Jg3903DY6Pv6oDUqQ1xjJWjHxaABNJUjwLZqOsvtQGibO3NAO2ugEasNcTgACRM3nlgxtJh+ZE9SJww2CbRzoB7WmJjtiU+H13bMbgdNXRNCd7expbvor4MEBXPsIr3tOP6NRzwdChqoDkWFnchgSfoXYJsdZ2Ctn7S1djxSm+RcaIL1YQloDsID0ICZG4nzQLbXK5u4Ns1+CbChXhoTyzYNL89UPaXAeK7V4kvwV6EZtM2nwWZIwQS0P/G+5vmoFB1GxhRIUuAHfd2Q1qUMiqAb3sIdqEKjwaKZisMOaIQOeAKfoDysAhq9Y8WBOgRa9EugO78CmqK00Z4DH+AI9NuhxGKwHaSRPQJ9PmQlUAj5ptgkOnug75Firkt8C1Rkas8tpM+2TfTb4AboZR0JX2AR7AaZbl7m5pl8X494K3yGe3ANWuFsL+kXmHb6qfGj4BBoSq/DOc/NYI+GaAaL3agYbX3Gl8Es0M7TAPugA00B3jW0hXROwlpQO9hISMJtKAf77Mujrw+j1uSyXYX+RtDTn4CeNbIFXm2EMagAvfm/4QU0w3fQDbjHEe2JcBeewVyvepFiJOdDHLSB3JOAdjZUgv4fdoH7eTGF3TXi4gKCi0FzrVP4JTwPexnJm4/uPLRBAn0rvp/Z78Zoruo/4C+sBM273o8zsAJy6btGX/8UpwjchKMMsNpvEDfJr0GhybAT7kM71IG2awPoH+8Y6LgKNXfqwpQU1O5ZAjr33sErnqATH8n+AUpctG5RzxqlAAAAAElFTkSuQmCC" />
          <h3 className='ml-2 mr-2'>Do you know how much <strong>loan</strong> you can get?Get maximum with <strong>NoBroker</strong></h3>
          <button className='border-[1px] bg-white text-black rounded-md px-1 py-1 text-xs'>Check Eligibility</button>
        </div>
        {/*------------------------Items div--------------------------------------------*/}

        

          </div>
        </div>



        {/*------------------------------------------------------------------------------ */}
      </div>

     
    </div>
  )
}
