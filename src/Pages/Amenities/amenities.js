import React from "react"
import { HashLink } from 'react-router-hash-link'

export default function Amenities(props){
    return(
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
            <div className=" relative w-[400px] card">
                <div className="flex justify-center">
                    <img src={props.img} alt="img" className="w-[400px] picture"/>
                </div>
                <div className="block">
                <HashLink smooth to={`/xinfo#${props.title}`} className="btn-link text-white font-semibold text-3xl">{props.title}</HashLink>
                </div>
            </div>
        </div>
    )
}