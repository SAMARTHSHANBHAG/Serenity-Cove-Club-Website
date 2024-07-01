import React from "react"
import {Link} from "react-router-dom"
import "./packages.css"

export default function Packages(props){
    return(
        <div>
            <div data-aos="fade-up" data-aos-once="true" data-aos-duration="500" className=" w-[640px] p-5 text-white rounded-xl bg-black h-full">
                <div className="flex justify-center">
                    <img src={props.img} alt="img" className="rounded-lg mb-5"/>
                </div>
                <div className="text-3xl font-semibold head mb-2">
                    {props.title}
                </div>
                <div className="text-xl mb-6 font-extralight">
                    {props.description}
                </div>
                <Link to="/resv-pack" className="btn-book font-bold text-lg">Book now!</Link>
            </div>
        </div>
    )
}