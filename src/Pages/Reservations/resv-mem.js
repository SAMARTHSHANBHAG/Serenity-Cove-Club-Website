import React from "react";
import "./reservations.css";
import memData from "../Membership/memData";


export default function Reservations(){
    return(
        <div className="main bg-[#0C090A] text-white">
            <div className="flex flex-wrap px-4 justify-around">
            {/* Membership */}
            <section className="px-5 w-[70%] py-5 rounded-3xl">
                <h1 className="text-4xl font-semibold head mb-2 ml-2">Membership</h1>
                <h2 className="text-6xl font-bold ml-2">Become a Member!</h2>
                <form action="#1" className="py-4">
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
                        <label htmlFor="membershipType" className="my-2 font-semibold">Select Membership Type:</label>
                        <select id="membershipType" name="membershipType" className="bg-inherit">
                        <option value="none" className="bg-black">None</option>
                        {memData.map((membership) => (
                        <option key={membership.id} value={membership.title} className="bg-black">
                        {membership.title}
                        </option>
                        ))}
                        </select>

                        <div className="mt-9">
                                    <div className="btn-sub font-bold text-lg">
                                        <div className=""></div>
                                        <input type="submit" value="Submit" />
                                    </div>
                        </div>
                    </div>    
                </form>
            </section>

                





            
            </div>
        </div>
    )
}