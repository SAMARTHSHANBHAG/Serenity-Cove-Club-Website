import React from "react"
import icon1 from "../../Images/w-icon-1.svg"
import icon2 from "../../Images/w-icon-2.svg"
import icon3 from "../../Images/w-icon-3.svg"
import icon4 from "../../Images/w-icon-4.svg"
import { HashLink } from "react-router-hash-link"

export default function Welcome(){
    return(
        <div className="px-4 py-4">
            <h1 className="text-3xl font-semibold head py-3">Relax, Recharge, Renew.</h1>
            <section className="grid grid-cols-10 py-10">
                <h1 className="text-7xl font-bold col-span-6">Welcome To Serenity Cove Club</h1>
                <h2 className="text-xl text-gray-400 font-light col-span-4 text-justify">Welcome to Serenity Cove Club, a haven of peace and luxury nestled amidst nature's embrace. Indulge in our exclusive amenities, where serenity meets sophistication.<br /> Immerse yourself in a world of tranquility, where every moment is a soothing escape from the hustle and bustle of life. Discover the essence of true relaxation at Serenity Cove Club.</h2>
            </section>

            <section className="flex py-20 gap-x-2 divide-x divide-black">
                <div data-aos="fade-right" data-aos-once="true" data-aos-duration="200" className="mt-3 px-1 basis-1/4">
                    <div className="flex justify-center">
                        <img src={icon1} alt="icon" width="100px" className="icon h-[150px]" />
                    </div>
                    <h1 className="text-4xl font-semibold py-10 h-[200px] ml-1">6+ Indoor Sporting Amenities</h1>
                    <HashLink smooth to={`/lm#1`} className="btn-lm text-2xl">➜</HashLink>
                </div>
                
                <div data-aos="fade-right" data-aos-once="true" data-aos-duration="600" className="mt-3 px-1 basis-1/4">
                    <div className="flex justify-center">
                        <img src={icon2} alt="icon" width="100px" className="icon h-[150px]" />
                    </div>
                    <h1 className="text-4xl font-semibold py-10 h-[200px] ml-1">Several Membership Options</h1>
                    <HashLink smooth to={`/lm#2`} className="btn-lm text-2xl">➜</HashLink>
                </div>

                <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" className="mt-3 px-1 basis-1/4">
                    <div className="flex justify-center">
                        <img src={icon3} alt="icon" width="100px" className="icon h-[150px]"/>
                    </div>
                    <h1 className="text-4xl font-semibold py-10 h-[200px] ml-1">Customize your Packages</h1>
                    <HashLink smooth to={`/lm#3`} className="btn-lm text-2xl">➜</HashLink>
                </div>
                    
                <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1400" className="mt-3 px-1 basis-1/4">
                    <div className="flex justify-center">
                        <img src={icon4} alt="icon" width="100px" className="icon h-[150px]"/>
                    </div>
                    <h1 className="text-4xl font-semibold py-10 h-[200px] ml-1">Fine Dine Restaurants & Cafes</h1>
                    <HashLink smooth to={`/lm#4`} className="btn-lm text-2xl">➜</HashLink>
                </div>
            </section>
        </div>
    )
}
