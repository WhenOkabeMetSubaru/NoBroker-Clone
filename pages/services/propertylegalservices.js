import React from 'react'

const PropertyLegalServices = () => {
    return (
        <section className='mt-20'>
            <div className='firstbox flex justify-center'>
                <div className='leftside text-center mr-10'>
                    <h1 className='text-4xl text-gray-500'>
                        From sale agreement to home loan application, get<br /> end to end legal assistance in finalising your dream<br /> home</h1>
                <p>With NoBroker Buyer Assist Plan, get end-to-end assistance in your property purchase. We help you with property title<br/> check, sale agreement/deed drafting, registration and more!</p>
                <div className="m-10">
                    <h1 className='m-2'>&#x2713;Lowest Prices Pre Negotiated</h1>
                <h1 className='m-2'> &#x2713; Dedicated Property Counseler</h1>
                <h1 className='m-2'>&#x2713; 5 Star Rated Professional</h1>
                <h1 className='m-2'>&#x2713;At Home Service</h1>
                </div>
                
                </div>
                <div className='rightside text-center m-5'>
                    Leave your house buying worries to us!Get No Broker Buyer<br/> Assist Plan
                    <div className='mt-10'>
                        <input placeholder='Name' className='border-[1px] py-2 focus:outline-none mt-5 pl-2 pr-64'/><br/>
                        <input placeholder='Mobile Number' className='border-[1px] focus:outline-none pl-2 py-2 mt-5 pr-64'/><br/>
                        <input type="emai" placeholder='Email' className='border-[1px] focus:outline-none mt-5 py-2 pl-2 pr-64'/><br/>
                        <select className='m-5 py-2 pr-80 pl-2 bg-white border-[1px]'>
                            <option value="bangalore">Bangalore</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="chennai">Chennai</option>
                            <option value="hyderabad">Hyderabad</option>
                            <option value="delhi-ncr">Delhi-NCR</option>
                        
                        </select><br/>
                        <div className='flex pl-5 text-gray-500 mb-5'>
                            <input type="radio" className='mr-2 mt-1'/>I have finalised a house
                        </div>
                        <div className='flex pl-5 text-gray-500 mb-5'>
                            <input type="radio" className='mr-2 mt-1'/>I am still searching for a house
                        </div>
                        <button className='px-48 border-[1px] rounded-lg bg-red-500 py-3 text-white font-semibold'>See Plans</button>
                        <h1 className='font-semibold text-2xl mt-5'>+918068530745</h1>
                    </div>
                </div>
            </div>
            <div className='w-full mt-10 h-[45vh] bg-gray-100 border-[1px]'>
                <div className='text-center text-gray-400 p-10'>
                    <h1 className='text-red-500 mb-3 text-4xl font-semibold'>Get end to end assistance in buying a property</h1>
                    <p>We know buying a property can be a nightmare given the paperwork involved, that's why NoBroker Buyer Assist Plan makes it easy for you</p>
                    <div className='flex justify-evenly mt-16'>
                        <div>
                            <h1 className='text-xl p-3 font-semibold'>1.Sale Agreement Drafting and Execution</h1>
                            <p>Drafted by a team of expert lawyers</p>
                        </div>
                        <div>
                            <h1 className='text-xl p-3 font-semibold'>2.Home Loan Application & <br/>Execution</h1>
                            <p>Seamless process with a Dedicated Manager<br/> who ensures quick approval</p>
                        </div>
                        <div>
                            <h1 className='text-xl p-3 font-semibold'>3.Sale Deed Execution & Property<br/> Registration</h1>
                            <p>Everything from the comfort of your home</p>
                        </div>
                    </div>
                    <br/>
                    <p>and more on demand services like Property Title Check, Missing Documents Assistance, Khata Transfer, Occupancy Certificate & Encumberance Certificate Check, Enroachment Check<br/>, Property Valuation, Guidance Value, Gift Deed, Power of Attorney, etc.</p>
                </div>
            </div>
        </section>
    )
}

export default PropertyLegalServices