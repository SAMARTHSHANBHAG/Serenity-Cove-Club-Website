import React, { useState } from "react"
import logo from "../../Images/logo-12.jpg"
import {Link} from "react-router-dom";
import "./navbar.css";
import "../Home/Home.css";
import login from "../../Images/user.png"
import Modal from "../ModalLogin/login-modal.js"

export default function Navbar(){
    const [openLogin, setOpenLogin] = useState(false);


    return(
        <div className="nav" >
            <div className="flex py-5 navbar justify-between">
                <img src={logo} alt="logo" className="px-10 content-end" width="225px"  />
                    <div className="flex">
                    <Link to="/" className="navbar-items self-center px-10">Home</Link>
                    <Link to="/about" className="navbar-items self-center px-10">About</Link>
                    <Link to="/membership" className="navbar-items self-center px-10">Membership</Link>
                    <Link to="/amenities" className="navbar-items self-center px-10">Amenities</Link>
                    <Link to="/packages" className="navbar-items self-center px-10">Packages</Link>
                    <button onClick={() => {setOpenLogin(true)}}  className="self-center px-10"><img src={login} alt="login" /></button>
                    </div>
            </div>
            {openLogin && <Modal closeModal={setOpenLogin} />}
        </div>
        
    )
}