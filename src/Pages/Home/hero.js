import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"

export default function Hero() {
    return(
        <div className="hero px-1">
            <h1 data-aos="fade-right" data-aos-once="true" className="text-6xl font-semibold py-3">Discover Serenity and <br /> Sophistication</h1>
            <Link to="/membership" data-aos="fade-right" data-aos-once="true" className="btn-hero">Join our club</Link>
        </div>
    )
}