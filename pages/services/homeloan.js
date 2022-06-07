import React from 'react'

const HomeLoan = () => {
  return (
    <div className='mt-16 flex justify-evenly'>
        <div className='leftside w-2/3'>
            <div className=' h-[50vh] bg-purple-800 flex'>
                <img className='w-48 h-48' src="https://www.nobroker.in/prophub/wp-content/uploads/2022/05/Group-14772-1.svg"/>
                <img src="https://www.nobroker.in/prophub/wp-content/uploads/2022/01/Group-15074-4.png"/>
            </div>
            <section className=' h-[33vh] bg-gray-200 m-14'>
                <h1 className='text-3xl p-8'>How It Works</h1>
                <div className='ml-8'>
                    <div className='p-1' >
                        <img/>
                        <span>
                         <h1>Fill Details</h1>
                        <p>Check your loan amount eligibility and provide your contact details using the contact from on this page</p>
                        </span>
                       
                    </div>
                    <div className='p-1' >
                        <img/>
                        <span>
                         <h1>Fill Details</h1>
                        <p>Check your loan amount eligibility and provide your contact details using the contact from on this page</p>
                        </span>
                       
                    </div>
                    <div className='p-1' >
                        <img/>
                        <span>
                         <h1>Fill Details</h1>
                        <p>Check your loan amount eligibility and provide your contact details using the contact from on this page</p>
                        </span>
                       
                    </div>
                </div>
            </section>
            <section className=' h-[50vh] bg-gray-200 m-14'>
                <h1 className='ml-10 mt-2 text-3xl'>Our Banking Services</h1>
                <div className='flex justify-evenly pt-12'>
                    <div className='bg-white p-2 w-2/5 shadow-lg rounded-sm'>
                        <h1>Bob Home Loan<br/> Advantage</h1>
                        <h1>&#x2713; Interest rate: 7.15%</h1>
                        <h1>&#x2713; Max tenure:30 Years</h1>
                        <h1>&#x2713; Prcoessing Fee: Flat fee of Rs. 10030+GST</h1>
                    </div>
                    <div className='bg-white p-2 w-2/5 shadow-lg rounded-sm'>
                        <h1>HDFC Reach Home Loan</h1>
                        <h1>&#x2713; Interest rate: 10.5%</h1>
                        <h1>&#x2713; Max tenure:30 Years</h1>
                        <h1>&#x2713; Prcoessing Fee: 1% + 18% GST Extra</h1>
                    </div>
                </div>
                <div className='flex justify-evenly pt-10 '>
                    <div className='bg-white p-2 w-2/5 shadow-lg rounded-sm'>
                        <h1>SBI Regular Home Loan</h1>
                        <h1>&#x2713; Interest rate: 7.05%</h1>
                        <h1>&#x2713; Max tenure:30 Years</h1>
                        <h1>&#x2713; Prcoessing Fee: 0.35% upto max Rs.10000 + 18% <br/>GST</h1>
                    </div>
                    <div className='bg-white p-2 w-2/5 shadow-lg rounded-sm'>
                        <h1>BoB Regular Home Loan</h1>
                        <h1>&#x2713; Interest rate: 6.9% onwars</h1>
                        <h1>&#x2713; Max tenure:30 Years</h1>
                        <h1>&#x2713; No processing fee. L & T Charges<br/> Flat fee of Rs.10030</h1>
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='bg-white font-semibold px-4 mr-3 py-2 border-red-600 border-[1px] text-red-500'>View More</button>
                    <button className='text-white px-4 py-2 bg-red-600 font-semibold'>Contact Us</button>
                </div>
            </section>
        </div>
        <div className='rightside w-1/3'>
            <div className='bg-gray-100 space-y-3 p-3 w-[500px] fixed border-[1px] ml-20 mt-10 mr-10 h-[68vh]'>
                <h1>Leave Your House buying worries to us!</h1>
                <h1 className='font-semibold text-xl pb-3'>Check your Eligiblity Instantly</h1>
                <label>Name<br/></label>
                <input type="text" className='w-4/5 border-[1px] py-2 px-2' placeholder="Enter Your Name"/>
                <label><br/>Mobile Number<br/></label>
                <input type="text" className='w-4/5 border-[1px] py-2 px-2' placeholder="Enter Your Mobile Number"/>
                <label><br/>Loan Amount<br/></label>
                <select className='border-[1px] py-3 w-4/5  bg-white'>
                    <option value="">Select Loan Amount</option>
                    <option value="upto15">Upto 15 Lacs</option>
                    <option value="15-20">15-20 Lacs</option>
                    <option value="20-30">20-30 Lacs</option>
                    <option value="30-50">30-50 Lacs</option>
                    <option value="50-70">50-70 Lacs</option>
                    <option value="75">75+ Lacs</option>
                    
                </select>
                <label><br/>When are you planning to take Loan?<br/></label>
                <select className='border-[1px] py-3  w-4/5 bg-white'>
                    <option value="">Select Timeline</option>
                    <option value="30">Within 30 Days</option>
                    <option value="30-90">30-90 Days</option>
                    <option value="90-180">90-180 Days</option>
                    <option value="180">180+ Days</option>
                </select><br/>
                <input type="checkbox"/>You hereby consent to NBroker receiving your Credit Information<br/>
                from Experian for facilitating such credit
                <h1><br/>By continuing you authorize NoBroker & its representatives to call or<br/> SMS regarding your application</h1>
                <button className='bg-gray-200 font-semibold border-[1px] ml-32 w-[200px] py-2'>Check Credit Score</button>
            </div>
        </div>


    </div>
  )
}

export default HomeLoan