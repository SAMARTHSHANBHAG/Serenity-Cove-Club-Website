import React from "react";
import photo from "../../Images/sect3.svg"
import "./Home.css"
import { Link } from "react-router-dom";

export default function OneOf(){
    return(
        <div className="flex flex-wrap text-xl mb-10 justify-evenly gap-y-40 mx-10 ">
            <section className="relative h-[700px] w-[480px]">
                <img data-aos="fade-up" data-aos-duration="300" data-aos-once="true" src={photo} alt="a" width="450px" />
                <span data-aos="fade-up" data-aos-duration="100" data-aos-once="true" className="textbox text-4xl">State-of-the-art <br /> Facilites</span>
                <Link to="/about" className="btn-more text-2xl">More About Us</Link>
            </section>
            <section className="w-[640px] ml-10 flex flex-col content-center">
                <h1 className="text-3xl font-semibold head py-3">ONE-OF-A-KIND EXPERIENCE</h1>
                <h2 className="text-6xl font-bold">Where Wellness Meets Luxury</h2>
                <h3 className="text-gray-400 mt-6">Serenity Cove Club has various elite class facilities,<br /> rooms for accommodation, F&B outlets,<br /> Banqueting facilities, Conference Rooms.</h3>
                <div className="divide-y-2 leading-8">
                    <p className="pointers">01. Banqueting Facilities</p>
                    <h1 className="pointers">02. Rooms for Accommodation</h1>
                    <p className="pointers">03. F&B Outlets</p>
                    <p className="pointers">04. Meeting Spaces</p>
                </div>
            </section>
        </div>
    )
}