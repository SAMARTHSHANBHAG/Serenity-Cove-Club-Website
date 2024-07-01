import React from "react";
import "./reservations.css";
import packData from "../Packages/packData";
import amenData from "../Amenities/amenData";


export default function Reservations(){
    return(
        <div className="main bg-[#0C090A] text-white">
            {/* <h1 className="text-center text-6xl font-bold heading">Reservations</h1> */}
            <div className="flex flex-wrap px-4 justify-around">
            {/* Package */}
            <section className="px-4 bg-inherit py-5 rounded-3xl">
                <h1 className="text-4xl font-semibold head mb-2">Packages</h1>
                <h2 className="text-6xl font-bold">Customize your Package here</h2>
                <form action="#2" className="py-4">
                    <div className="form-row grid grid-cols-2">
                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">First Name</label>
                            </div>

                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">Last Name</label>
                            </div>
                    </div>

                    <div className="form-row grid grid-cols-2">
                        <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label htmlFor="">Email Address</label>
                        </div>

                        <div className="input-data">
                            <input type="tel" required />
                            <div className="underline"></div>
                            <label htmlFor="">Phone</label>
                        </div>
                    </div>      

                    <div className="grid grid-rows-2 w-[50%] ml-4">
                        <label htmlFor="membershipType" className="my-2 font-semibold">Select Package Type:</label>
                        <select id="membershipType" name="membershipType" className="w-[100%] bg-inherit">
                        {packData.map((packages) => (
                        <option key={packages.id} value={packages.title} className="bg-black">
                        {packages.title}
                        </option>
                        ))}
                        </select>
                    </div>

                    <div className="grid grid-rows-2 w-[50%] ml-4 mt-8">
                            <label className="my-2 font-semibold">Choose a Date:</label>
                            <input type="date" id="date" name="date" min="2023-10-18" max="2030-10-18" required className="calendar my-2"/>
                    </div>

                    <div className="grid grid-rows-2 w-[94%] ml-4 mt-5">
                        <label htmlFor="guestType" className="my-2 font-semibold">No. of Guests:</label>
                        <select id="guestType" name="guestType" className="bg-inherit w-[96.3%]">
                        <option value="none" className="bg-black">1</option>
                        <option value="none" className="bg-black">2</option>
                        <option value="none" className="bg-black">3</option>
                        <option value="none" className="bg-black">4</option>
                        <option value="none" className="bg-black">5</option>
                        <option value="none" className="bg-black">6</option>
                        <option value="none" className="bg-black">7</option>
                        <option value="none" className="bg-black">8</option>
                        </select>
                    </div>

                    



                    
                    <div className="grid grid-rows-2 w-[94%] ml-4 mt-5">
                        <label htmlFor="amenityType" className="my-2 font-semibold">Select Amenity Type:</label>
                        <select id="amenityType" name="amenityType" className="bg-inherit w-[96.3%]">
                        <option value="none" className="bg-black">None</option> {/* Placeholder option */}
                        {amenData.map((amenity) => (
                        <option key={amenity.id} value={amenity.title} className="bg-black">
                        {amenity.title}
                        </option>
                        ))}
                        </select>
                    </div>

                    <div className="form-row grid">
                    <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label htmlFor="">Membership id(if any)</label>
                        </div>  
                    </div>
                    <div className="btn-sub font-bold text-lg mt-9 ml-4">
                            <div className="">
                                <div className=""></div>
                                <input type="submit" value="Submit" />
                            </div>
                    </div>
                </form>
            </section>
            </div>
        </div>
    )
}