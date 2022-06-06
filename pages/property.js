import React,{useEffect,useState} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
const Property = (props) => {
    
    const [data,setData]=useState([]);

    useEffect(()=>{
        console.log(props)

        setData(props.allproperty)
        console.log(data)
        console.log(data.headline)
    },[])
    return (
        <section>
            <div className='flex justify-center'>
                <div className='flex justify-center w-[95vw] md:w-[85vw] bg-white h-full'>
                    <div className='lg:w-1/2   md:w-full mt-24 bg-white'>
                        

                        {
                            data.map((elem,i)=>{

                            
                         return  <div key={i} className='w-full  h-[75vh] md:h-[400px] border-2 text-xs md:text-[15px] bg-white my-5'>
                               <div className=' pl-3 text-xs flex  text-gray-500'>
                                <div>
                                    <h1 className='text-sm hover:text-pink-700 text-gray-600 font-semibold'>{elem.headline}</h1>
                                   <p>{elem.address}<a>Explore Nearby</a></p>
                                </div>
                                <div className='text-black md:hidden h-14  border-2  px-4 md:px-6'><AiOutlineHeart className='w-7 h-12'/></div>
                                <div className='text-black md:hidden h-14 px-4 md:px-6 border-2'><BiPhoneCall className='w-7 h-12'/></div>
                                
                            </div>
                            <ul className='md:flex hidden  justify-evenly ' >
                                <li>{elem.builtuparea}<h1>Builtup</h1></li>
                                <li>{elem.EMI}<h1>Estimated EMI</h1></li>
                                <li>{elem.cost}<h1>Rs.17,143 per sq.ft.</h1></li>
                            </ul>
                            <div className='md:flex flex-rows justify-evenly mt-1 md:mt-5'>
                                <img className='w-full md:w-[400px]  px-2 h-[190px] md:h-[200px]' src={elem.image} />
                                <div className='border-gray-400 hidden  mt-12 md:mt-0 h-6 md:h-32 grid-cols-4  md:gap-0 md:grid md:grid-cols-2 w-full md:w-full text-center'>
                                    <div className='border-[1px] md:p-2 border-black'>East<h1 className='text-xs text-gray-500'>Facing</h1></div>
                                    <div className='border-[1px] md:p-2 border-black'>1 BHK<h1 className='text-xs text-gray-500'>Apartment Type</h1></div>
                                    <div className='border-[1px] md:p-2 border-black'>1<h1 className='text-xs text-gray-500'>Bathrooms</h1></div>
                                    <div className='border-[1px]  md:p-2 border-black'>Bike and Car<h1 className='text-xs text-gray-500'>Parking</h1></div>
                                    <div className='hidden md:flex w-full mt-10  text-white '><button className='bg-pink-600 p-2' >Get Owner Details</button></div>
                                    <div className=' hidden md:flex justify-evenly mt-10'><div className='text-black  border-2 py-2 px-4 md:px-6'>X</div><div className='text-black px-4 md:px-6 py-2 border-2'>Y</div></div>
                                </div>
                                <div>
                                    <ul className='flex justify-between border-2 md:hidden text-center p-4 mt-5' >
                                        <li>{elem.cost}<h1 className='text-[11px]'>Rs.17,143 per sq.ft.</h1></li>
                                        <li>{elem.EMI}<h1>Estimated EMI</h1></li>
                                        <li>{elem.builtuparea}<h1>Builtup Area</h1></li>
                                        
                                    </ul>
                                </div>
                                <div className='w-full mt-5 md:hidden text-center  text-white '><button className='bg-pink-600 p-2' >Get Owner Details</button></div>
                            </div>
                            <div className='flex justify-start   mt-8 md:mt-8 ' >
                                <h1 className='ml-2 '>Nearby:</h1>
                                <ul className='md:flex md:justify-evenly mb-32 grid grid-cols-3 gap-1'>
                                    {
                                        elem.nearby_landmarks.map((val,idx)=>{

                                       
                                       return <li key={idx} className='px-3  bg-gray-100'>{val}</li>
                                    }) }
                                    
                                   
                                </ul>
                            </div>

                        </div>
                       }) }


                    </div>
                </div>
            </div>


        </section>
    )
}

export async function getServerSideProps(context){
    let data = await fetch('http://localhost:3000/api/propertyindividual');
    let allproperty  = await data.json();
    
    return {
        props:{allproperty}
    }
}
export default Property