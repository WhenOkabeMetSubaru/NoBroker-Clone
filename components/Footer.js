import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='text-xl'>
                <h1>NoBroker Services</h1>
            </div>
            <div className='flex justify-between mt-3 ml-5 mr-5'>
                <div className='w-[875px]  '>
                    <h1 className='ml-10 text-xl'>Buy</h1>
                    <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-1 p-2">
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold  text-center mx-3 py-[2px] rounded-sm">Home Loan</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 rounded-sm">Property Legal Services</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Interiors</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Sale Agreement</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">NoBroker For NRI's</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">New Builder Project</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">EMI Calculator</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Home Loan Balance Transfer</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Home Loan Eligibility Check</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Apply Home Loan</div>
                    </div>
                </div>
                <div className='w-[875px]'>
                    <h1 className='ml-20 text-xl'>Rent</h1>
                    <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-3 p-2">
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold  text-center mx-3 py-[2px] rounded-sm">Rental Agreement</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 rounded-sm">Pay Rent</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Refer and Earn</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Home Services</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Packers and Movers</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Property Management in India</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Home Services Questions</div>
                        <div className="text-gray-500 bg-gray-100 text-[12px] font-bold text-center mx-3 py-[2px] rounded-sm">Rent Services Questions</div>

                    </div>
                </div>
            </div>

            <div className='flex justify-evenly mt-20 border-[1px] border-gray-300 bg-gray-100 py-10 text-center'>
                <div>
                    <h1 className='text-lg font-semibold'>Find Property</h1>
                    <p>Select from thousands of options,without brokerage</p>
                    <button className='mt-6 border-[1px] px-4 py-[3px] text-sm rounded-md text-white bg-slate-700'>Find Now</button>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>List Your Property</h1>
                    <p>For Free.Without any brokerage.</p>
                    <button className='mt-6 border-[1px] px-4 py-[4px] text-sm rounded-md text-white bg-slate-700'>Free Posting</button>
                </div>
            </div>
            <div>
                <div>
                    <ul className="flex justify-center">
                        <li className='m-4 font-semibold text-md'>About Us</li>
                        <li className='m-4 font-semibold text-md'>Careers</li>
                        <li className='m-4 font-semibold text-md'>Terms & Conditions</li>
                        <li className='m-4 font-semibold text-md'>Privacy Policy</li>
                        <li className='m-4 font-semibold text-md'>Testimonials</li>
                        <li className='m-4 font-semibold text-md'>Sitemap</li>
                        <li className='m-4 font-semibold text-md'>FAQS</li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <hr className='w-[700px] ' />
                    

                </div>
                <div className='flex justify-center mt-5'>
                    <img className='mr-10' src="https://assets.nobroker.in/nb-new/public/Common/android_download.svg"/>
                    <img src="https://assets.nobroker.in/nb-new/public/Common/IOS_download.svg"/>
                </div>
                <div className='socialicons'>

                </div>
                <div className='text-center mt-10 text-sm'>
                    <p>&copy;2013-22 NoBroker Technologies Solution Pvt.Ltd </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer