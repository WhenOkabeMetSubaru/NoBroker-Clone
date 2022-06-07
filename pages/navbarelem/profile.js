import React, { useState } from 'react'

const Profile = () => {

    const [value, setValue] = useState("profile");

    const togglemechanic = (name) => {
        setValue("");
        setValue(name);
    }
    console.log(value)
    return (
        <div className='mt-20 flex'>
            <div className='leftbox h-[50vh] w-1/5 bg-gray-100 border-[1px]'>
                <div className='m-10'>
                    <h1 className='text-sm font-semibold mb-5'>Manage Your Account</h1>
                    <h1 className='w-full  mb-5 bg-gray-300 h-[2px]'></h1>

                    <ul>
                        <li onClick={() => togglemechanic("profile")} className={`py-2 px-5 rounded-lg ${value == "profile" ? 'bg-gray-400' : ''} cursor-pointer`}>Basic Profile</li>
                        <li onClick={() => togglemechanic("shortlists")} className={`py-2 px-5 rounded-lg ${value == "shortlists" ? 'bg-gray-400' : ''} cursor-pointer`}>Your Shortlists</li>
                        <li onClick={() => togglemechanic("owners")} className={`py-2 px-5 rounded-lg ${value == "owners" ? 'bg-gray-400' : ''} cursor-pointer`}>Owners you Contacted</li>
                        <li onClick={() => togglemechanic("payments")} className={`py-2 px-5 rounded-lg ${value == "payments" ? 'bg-gray-400' : ''} cursor-pointer`}>Your Payments</li>
                        <li onClick={() => togglemechanic("properties")} className={`py-2 px-5 rounded-lg ${value == "properties" ? 'bg-gray-400' : ''} cursor-pointer`}>Your Properties</li>
                        <li onClick={() => togglemechanic("interested")} className={`py-2 px-5 rounded-lg ${value == "interested" ? 'bg-gray-400' : ''} cursor-pointer`}>Interested in your Properties</li>
                    </ul>
                </div>
            </div>
            <div className='rightbox w-4/5 h-[50vh] bg-white'>
                <div className={`${value !== "profile" ? "hidden" : ""} m-5`}>
                    <h1 className='text-sm font-semibold'>Edit Your profile</h1>
                    <h1 className='w-full h-[1px] bg-gray-400 mt-2 mb-2'></h1>
                    <div className='mb-7 mt-5'><label>Name</label><input className='ml-24 border-[1px] border-gray-400 px-32 py-2 rounded-sm' type="text"></input></div>
                    <div className='mb-7 mt-5'><label>Email</label><input className='ml-24 border-[1px] border-gray-400 px-32 py-2 rounded-sm' type="email"></input></div>
                    <div className='mb-7 mt-5'><label>Mobile Phone</label><input className='ml-10 border-[1px] border-gray-400 px-32 py-2 rounded-sm' type="text"></input></div>
                    <div className='mt-36 ml-96'><button className='bg-pink-600 text-gray-300 py-1 px-4 '>Save Profile</button></div>
                </div>

                <div className={`${value !== "shortlists" ? "hidden" : ""} m-5`}>
                    <h1 className='text-sm font-semibold'>Tenants who viewed your contact</h1>
                    <h1 className='w-full h-[1px] bg-gray-400 mt-2 mb-2'></h1>
                    <h1 className='text-lg'>No user has shown interet in your property yet!</h1>
                </div>

                <div className={`${value !== "owners" ? "hidden" : ""} m-5`}>
                    <h1 className='text-sm font-semibold'>Owners whom you contacted(0)</h1>
                    <h1 className='w-full h-[1px] bg-gray-400 mt-2 mb-2'></h1>
                    <h1 className='text-lg'>No owners are contacted yet!</h1>
                </div>
                <div className={`${value !== "payments" ? "hidden" : ""} m-5`}>
                    <h1 className='text-sm font-semibold'>Your payments</h1>
                    <h1 className='w-full h-[1px] bg-gray-400 mt-2 mb-2'></h1>
                    <h1 className='text-lg'>No Payments yet!</h1>
                </div>
                <div className={`${value !== "properties" ? "hidden" : ""} m-5`}>
                    <h1 className='text-sm font-semibold'>Properties</h1>
                    <h1 className='w-full h-[1px] bg-gray-400 mt-2 mb-2'></h1>
                    <h1 className='text-lg'>No owners are contacted yet!</h1>
                </div>
                <div className={`${value !== "interested" ? "hidden" : ""} m-5`}>
                    <h1 className='text-sm font-semibold'>Tenants who viewed your contact</h1>
                    <h1 className='w-full h-[1px] bg-gray-400 mt-2 mb-2'></h1>
                    <h1 className='text-lg'>No owners have shown interest in your property  yet!</h1>
                </div>
            </div>




        </div>
    )
}

export default Profile