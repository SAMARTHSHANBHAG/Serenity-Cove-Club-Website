import React from "react"
import {Link} from "react-router-dom"
import logo from "../../Images/logo-12.jpg"
import "./footer.css"

export default function Footer(){
    return(
        <div className="footer">
        <div className=" grid grid-cols-4">
            <div className="col-span-2 px-10 mt-10">
                <img src={logo} alt="img" width="450px" />
            </div>
            <div className="mt-10">
                <h1 className="text-2xl">Address</h1>
                <p>SCC – Serenity Cove Club, 456 Serene Street, Blissful Gardens, Harmonyville, Peaceful Suburb, Landmark: Next to Tranquil Park,<br />Mumbai - 400012</p>
                <br />
                <p>022-35359191 <br /> Extensions: 274 (Sales & Marketing) |<br /> 9 (Reservations) | 280 (Banquets)</p>
            </div>
            <div className="mt-10">
                <h1 className="text-2xl ">Important Links</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/membership">Membership</Link></li>
                    <li><Link to="/amenities">Amenities</Link></li>
                    <li><Link to="/packages">Packages</Link></li>
                </ul>
            </div>
        </div>
                <div className="grid grid-cols-2 ml-10 text-xl py-8 ">
                <h1 className="">
                Copyright © 2023 SCC – Serenity Cove Club   . All Rights Reserved.
                </h1>
                <h1 className="ml-20">
                Terms of Service
                </h1>
                <h1 className="mt-2">
                Made with ❤ by Rugved Mairal.
                </h1>
                </div>
        </div>
    )
}