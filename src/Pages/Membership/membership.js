import React from "react"
import {Link} from "react-router-dom"
import "./membership.css"

export default function Membership(props){
    
    return(
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
            <div className=" w-[620px] p-5 text-white rounded-xl bg-black h-full">
            <div className="flex justify-center">
                <img src={props.img} alt="img" className="rounded-lg mb-4"/>
            </div>
                <div className="text-3xl font-semibold head mb-2">
                    {props.title}
                </div>
                <div className="text-xl mb-6 font-extralight">
                    {props.description}
                </div>
                <Link to="/resv-mem" className="btn-know font-bold text-lg">Know more</Link>
            </div>
        </div>
    )
}