import React, { useState } from 'react'

const Postproperty = () => {

    const [val, setVal] = useState("propertydetails");
    const toggleresponse = (name) => {
        setVal("");
        setVal(name)

    }
    console.log(val)

    return (
        <section className='mt-20'>
            <div className='flex justify-center'>
                <div className='leftcol w-[175px] text-center bg-white h-[100vh]'>
                    <ul >
                        <li onClick={() => toggleresponse("propertydetails")} className={`py-5 cursor-pointer ${val == "propertydetails" ? "border-green-600 text-green-500 font-semibold border-[1.95px] " : ""} border-[1px] border-gray-200`}>Property Details</li>
                        <li onClick={() => toggleresponse("localitydetails")} className={`py-5 cursor-pointer ${val == "localitydetails" ? "border-green-600 text-green-500 font-semibold border-[1.95px] " : ""} border-[1px] border-gray-200`}>Locality Details</li>
                        <li onClick={() => toggleresponse("rentaldetails")} className={`py-5 cursor-pointer ${val == "rentaldetails" ? "border-green-600 text-green-500 font-semibold border-[1.95px] " : ""} border-[1px] border-gray-200`}>Rental Details</li>
                        <li onClick={() => toggleresponse("amenities")} className={`py-5 cursor-pointer ${val == "amenities" ? "border-green-600 text-green-500 font-semibold border-[1.95px] " : ""} border-[1px] border-gray-200`}>Amenities</li>
                        <li onClick={() => toggleresponse("gallery")} className={`py-5 cursor-pointer ${val == "gallery" ? "border-green-600 text-green-500 font-semibold border-[1.95px] " : ""} border-[1px] border-gray-200`}>Gallery</li>
                        <li onClick={() => toggleresponse("schedule")} className={`py-5 cursor-pointer ${val == "schedule" ? "border-green-600 text-green-500 font-semibold border-[1.95px] " : ""} border-[1px] border-gray-200`}>Schedule</li>
                    </ul>
                </div>
                <div className='midcol w-2/5 mx-5 bg-green-100 h-[100vh]'>
                    {val == "propertydetails" && <div className='page1 '>
                        <div className='p-5 ml-5 text-lg text-gray-600'>Property Details</div>
                        <div className='' >
                            <div className='row1 flex justify-between w-full'>
                                <div className="field p-7 ml-5 text-gray-500 ">
                                    <label htmlFor="apartment">Apartment Type*</label><br />
                                    <select id="roles" className="dropdown1  mt-2 w-[275px] border-gray-300 border-[1px] py-2 bg-white">
                                        <option value="" >Select:</option>
                                        <option value="Duplex/Triplex">Apartment</option>
                                        <option value="Garden Apartment">Independent House/Villa</option>
                                        <option value="Railroad Apartment:">Gated Community Villa</option>

                                    </select>
                                </div>

                            </div>
                            <div className='row2 flex justify-evenly'>
                                <div className="field p-7 ml-5 text-gray-500 ">
                                    <label htmlFor="apartment">BHK Type*</label><br />
                                    <select id="roles" className="dropdown1  mt-2 w-[225px] border-gray-300 border-[1px] py-2 bg-white">
                                        <option value="" >Select:</option>
                                        <option value="1RK">1RK</option>
                                        <option value="1BHK">1 BHK</option>
                                        <option value="2BHK">2 BHK</option>
                                        <option value="3BHK">3 BHK</option>
                                        <option value="4BHK">4 BHK</option>
                                        <option value="4+BHK">4+ BHK</option>

                                    </select>
                                </div>
                                <div className="field p-7 ml-5 text-gray-500 ">
                                    <label htmlFor="apartment">Floor*</label><br />
                                    <select id="roles" className={`dropdown1  mt-2 w-[150px]  border-gray-300 border-[1px] py-2 bg-white`}>
                                        <option value="" >Select:</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="22">22</option>
                                        <option value="24">24</option>
                                        <option value="30">30</option>
                                        <option value="35">35</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>





                                    </select>
                                </div>
                                <div className="field p-7 ml-5 text-gray-500 ">
                                    <label htmlFor="apartment">Total Floors*</label><br />
                                    <select id="roles" className="dropdown1  mt-2 w-[150px] border-gray-300 border-[1px] py-2 bg-white">
                                        <option value="" >Select:</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="22">22</option>
                                        <option value="24">24</option>
                                        <option value="30">30</option>
                                        <option value="35">35</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>

                                    </select>
                                </div>
                            </div>
                            <div className='row3 flex justify-start'>
                                <div className="field p-7 ml-5 text-gray-500 ">
                                    <label htmlFor="propertyage">Property Age*</label><br />
                                    <select id="roles" className="dropdown1  mt-2 w-[275px] border-gray-300 border-[1px] py-2 bg-white">
                                        <option value="" >Select:</option>
                                        <option value="lessthanayear">Less than a year</option>
                                        <option value="1to3">1 to 3 year</option>
                                        <option value="3to5">3 to 5 year</option>
                                        <option value="5to10">5 to 10 year</option>
                                        <option value="Morethan10">More than 10 year</option>
                                    </select>
                                </div>
                                <div className="field p-7 ml-5 text-gray-500 ">
                                    <label htmlFor="facing">Facing*</label><br />
                                    <select id="roles" className="dropdown1  mt-2 w-[275px] border-gray-300 border-[1px] py-2 bg-white">
                                        <option value="" >Select:</option>
                                        <option value="North">North</option>
                                        <option value="South">South</option>
                                        <option value="East">East</option>
                                        <option value="West">West</option>
                                        <option value="North-East">North-East</option>
                                        <option value="South-East">South-East</option>
                                        <option value="North-West">North-West</option>
                                        <option value="South-West">South-West</option>

                                    </select>

                                </div>
                            </div>
                            <div className='row4'>
                                <div className="field p-7 ml-5 text-gray-500 ">
                                    <label htmlFor="builtuparea">Built Up Area*</label><br />
                                    <input placeholder='Built Up Area' className='w-[275px] mt-2 py-2 border-gray-300 border-[1px] ' />
                                    <h1 className='hover:bg-gray-900 absolute mt-3 px-2 rounded-lg  text-transparent bg-transparent hover:text-white'>Provide the Built-up Area in Sq.ft</h1>
                                </div>
                            </div>
                        </div>

                    </div>}
                    {val == "localitydetails" && <div className='page2'>
                        <div className='w-full h-[1px] mt-16 bg-gray-300'></div>
                        <div className='flex justify-evenly'>
                            <div className="field p-7 ml-5 text-gray-500 ">
                                <label htmlFor="city">City*</label><br />
                                <select id="roles" className="text-sm dropdown1  mt-2 w-[275px] border-gray-300 border-[1px] py-2 bg-white">
                                    <option value="bangalore" >Bangalore</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="pune">Pune</option>
                                    <option value="chennai">Chennai</option>
                                    <option value="gurgaon">Gurgaon</option>
                                    <option value="hyderabad">Hyderabad</option>
                                    <option value="delhi">Delhi</option>
                                    <option value="faridabad">Faridabad</option>
                                    <option value="ghaziabad">Ghaziabad</option>
                                    <option value="noida">Noida</option>
                                    <option value="greaternoida">Greater Noida</option>

                                </select>
                            </div>
                            <div className='mt-9'>
                                <label htmlFor="locality">Locality*</label><br />
                                <input className='text-xs py-2 px-1 w-[245px] border-gray-300 border-[1px]' placeholder='Enter location / society name' />
                            </div>
                        </div>
                        <div>
                            <div className='mt-9 ml-[103px]'>
                                <label htmlFor="locality">Landmark / Street*</label><br />
                                <input className='text-xs py-2 px-1 w-[245px] border-gray-300 border-[1px]' placeholder='e.g. Evergreen-street' />
                            </div>
                        </div>
                    </div>}
                    {val == "rentaldetails" && <div className='page3'>
                        <div className='m-5 text-green-600 font-semibold'>Provide rental details about your property</div>
                        <h1 className='w-full h-[1px] bg-gray-300'></h1>
                        <div className='m-10'>
                            <h1>Property available for </h1>
                            <span className='space-x-16'><input type="radio" />Only Rent<input type="radio" />Only Lease</span>
                            <div className='flex justify-start'>
                                <div className='mt-9'>
                                    <label htmlFor="expectedrent">Expected Rent*</label><br />
                                    <input className='text-xs py-2 px-1 w-[245px] border-gray-300 border-[1px]' placeholder=' Enter Amount' />
                                    <div> <input type='checkbox' /> Rent Negotiable</div>
                                </div>
                                <div className='mt-9 ml-32'>
                                    <label htmlFor="expected deposit">Expected Deposit*</label><br />
                                    <input className='text-xs py-2 px-1 w-[245px] border-gray-300 border-[1px]' placeholder='Enter Amount' />
                                </div>
                            </div>
                            <div className="field   text-gray-500 ">
                                <label htmlFor="city">Monthly Maintenance*</label><br />
                                <select id="roles" className="text-sm dropdown1  mt-2 w-[275px] border-gray-300 border-[1px] py-2 bg-white">
                                    <option value="" >Select</option>
                                    <option value="maintainanceincluded" >Maintenance Included</option>
                                    <option value="maintainanceextra">Maintainance Extra</option>
                                </select>
                            </div>
                            <div className='flex justify-start'>
                                <div className='mt-2'>
                                    <label htmlFor="available from">Available From*</label><br />
                                    <input className='text-xs py-2 px-1 w-[245px] border-gray-300 border-[1px]' placeholder='dd/mm/yyyy' />
                                </div>
                                <div className="field ml-20  text-gray-500 ">
                                    <label htmlFor="preferredtenants">Preferred Tenants*</label><br />
                                    <select id="roles" className="text-sm dropdown1  mt-2 w-[275px] border-gray-300 border-[1px] py-2 bg-white">
                                        <option value="">Select</option>
                                        <option value="doesntmatter" >Doesn't Matter</option>
                                        <option value="family" >Family</option>
                                        <option value="bachelors">Bachelors</option>
                                        <option value="company">Company</option>
                                    </select>
                                </div>

                            </div>
                            <div className='flex justify-start mt-3'>
                                <div className="field  text-gray-500 ">
                                    <label htmlFor="furnishing">Furnishing*</label><br />
                                    <select id="roles" className="text-sm dropdown1  mt-1 w-[275px] border-gray-300 border-[1px] py-2 bg-white">
                                        <option value="">Select</option>
                                        <option value="fullyfurnished" >Full-Furnished</option>
                                        <option value="semifurnished" >Semi-Furnished</option>
                                        <option value="unfurnished">Unfurnished</option>

                                    </select>
                                </div>
                                <div className="field ml-20  text-gray-500 ">
                                    <label htmlFor="parking">Parking*</label><br />
                                    <select id="roles" className="text-sm dropdown1  mt-1 w-[275px] border-gray-300 border-[1px] py-2 bg-white">
                                        <option value="">Select</option>
                                        <option value="bike" >Bike</option>
                                        <option value="car" >Car</option>
                                        <option value="both">Both</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>

                            </div>
                            <div className='mt-10'>
                                <label htmlFor="description">Description*</label><br />
                                <textarea cols={100} rows={5} placeholder="Write a few lines about your property something which is special and makes your property stand out 
                            Please do not mention your contact details in any format." className='text-sm text-gray-500'></textarea>
                            </div>


                        </div>
                    </div>}
                    {val == "amenities" && <div className='page4'>
                        <div className='mt-5 ml-10 text-green-600 font-semibold'>Provide additional details about your property to get maximum visibility</div>
                        <h1 className='mt-5 mb-5 w-full h-[1px] bg-gray-400'></h1>
                        <div className='upperbox'>
                            <div className='flex justify-evenly'>
                                <div className='flex justify-between border-[1px] mt-6 w-1/4 bg-white'>
                                    <h1 className='px-3 m-1 border-gray-400 bg-gray-200'>-</h1>
                                    <h1 >0</h1>
                                    <h1 className='px-2 m-1 border-gray-400 bg-gray-200'>+</h1>
                                </div>
                                <div className='flex justify-between border-[1px] mt-6 w-1/4 bg-white'>
                                    <h1 className='px-3 m-1 border-gray-400 bg-gray-200'>-</h1>
                                    <h1 >0</h1>
                                    <h1 className='px-2 m-1 border-gray-400 bg-gray-200'>+</h1>
                                </div>
                                <div className="field   text-gray-500 ">
                                    <label htmlFor="watersupply">Water Supply*</label><br />
                                    <select id="roles" className="text-sm dropdown1   w-[275px] border-gray-300 border-[1px] py-2 bg-white">
                                        <option value="">Select</option>
                                        <option value="corporation" >Corporation</option>
                                        <option value="borewell" >Borewell</option>
                                        <option value="both">Both</option>
                                    </select>
                                </div>

                            </div>
                            <div className='2row flex justify-evenly mt-5'>
                                <div className='w-1/4 border-[1px] flex justify-between p-1 rounded-md '>
                                    <h1>Gym*</h1>
                                    <span className='flex'>
                                        <h1 className='border-[1px] p-1 border-gray-400 rounded-lg mr-1  font-semibold'>No</h1>
                                        <h1 className='border-[1px] p-1 border-gray-400 rounded-lg font-semibold'>Yes</h1>
                                    </span>

                                </div>
                                <div className='w-1/4 border-[1px] flex justify-between p-1 rounded-md '>
                                    <h1>Non-Veg*</h1>
                                    <span className='flex'>
                                        <h1 className='border-[1px] p-1 border-gray-400 rounded-lg mr-1  font-semibold'>No</h1>
                                        <h1 className='border-[1px] p-1 border-gray-400 rounded-lg font-semibold'>Yes</h1>
                                    </span>

                                </div>
                                <div className='w-1/4 border-[1px] flex justify-between p-1 rounded-md '>
                                    <h1>Gated-Security*</h1>
                                    <span className='flex'>
                                        <h1 className='border-[1px] p-1 border-gray-400 rounded-lg mr-1  font-semibold'>No</h1>
                                        <h1 className='border-[1px] p-1 border-gray-400 rounded-lg font-semibold'>Yes</h1>
                                    </span>

                                </div>

                            </div>
                            <div className='3row m-8 flex justify-start'>
                                <div className="field   text-gray-500 ">
                                    <label htmlFor="showproperty">Who will show the property*</label><br />
                                    <select id="roles" className="text-sm dropdown1   w-[275px] border-gray-300 border-[1px] py-2 bg-white">
                                        <option value="">Select</option>
                                        <option value="needhelp" >Need help</option>
                                        <option value="iwillshow" >I will show</option>
                                        <option value="neighbours">Neighbours</option>
                                        <option value="friends">Friends/Relatives</option>
                                        <option value="relatives">Relatives</option>
                                        <option value="tenants">Tenants</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className=' ml-10 '>
                                    <label htmlFor="secondarynumber">Secondary Number*</label><br />
                                    <input className='text-xs py-2 px-1 w-[245px] border-gray-300 border-[1px]' placeholder='Secondary Number' />
                                </div>

                            </div>
                            <h1 className='w-full h-[1px] bg-gray-400'></h1>
                            <h1 className='m-5'>Select the available amenities </h1>
                            <div className='4row flex justify-evenly'>
                                <div className='left m-9'>
                                    <ul className='space-y-6'>
                                        <li><input type="checkbox" />Lift</li>
                                        <li><input type="checkbox" />Air Conditioner</li>
                                        <li><input type="checkbox" />Intercom</li>
                                        <li><input type="checkbox" />Children Play Area</li>
                                        <li><input type="checkbox" />Servant Room</li>
                                        <li><input type="checkbox" />Gas Pipeline</li>
                                        <li><input type="checkbox" />Rain Water Harvesting</li>
                                        <li><input type="checkbox" />House Keeping</li>
                                        <li><input type="checkbox" />Visitor Parking</li>
                                    </ul>
                                </div>
                                <div className='left m-9'>
                                    <ul className='space-y-6'>
                                        <li><input type="checkbox" />Internet Services</li>
                                        <li><input type="checkbox" />Club House</li>
                                        <li><input type="checkbox" />Swimming Pool</li>
                                        <li><input type="checkbox" />Fire Safety</li>
                                        <li><input type="checkbox" />Shopping Center</li>
                                        <li><input type="checkbox" />Park</li>
                                        <li><input type="checkbox" />Sewage Treatment Plant</li>
                                        <li><input type="checkbox" />Power Backup</li>

                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>}
                    {
                        val == "gallery" &&
                        <div className='page-5'>
                            <div>
                                <div className='m-5 text-green-600 font-semibold'>Upload photos & videos</div>
                                <h1 className='w-full h-[1px] bg-gray-300'></h1>
                                <div className='ml-14 mt-10 bg-gray-100 rounded-md border-[1px] w-[650px] h-[20vh] flex justify-center'>
                                    <div className=' h-full w-1/2 text-center '>
                                        <h1 className='mt-14 font-semibold'>Add photos to get 5X more responses</h1>
                                        <p>90% tenants contact on properties with photos</p>
                                        <button className='bg-green-600 text-white rounded-md px-4 mt-6 py-1'>Add Photos</button>
                                    </div>
                                </div>
                            </div>

                        </div>



                    }
                </div>

                <div className='rightcol w-[175px] bg-yellow-100 h-[100vh]'>
                    right
                </div>
            </div>
        </section>
    )
}

export default Postproperty