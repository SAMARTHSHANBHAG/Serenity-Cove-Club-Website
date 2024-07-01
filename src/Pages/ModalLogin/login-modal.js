import React from "react";
import {Link} from "react-router-dom";
import cross from "../../Images/cross.png"

export default function Login({ closeModal }){
    return(
        <div className="ml-[500px]">
        <div className="bg-[#1d181a] w-[500px] h-[500px] fixed text-white rounded-xl">
            <div className="flex flex-wrap justify-around mt-6">
            {/* Membership */}
            <section className="px-5 rounded-3xl">
                <span className="flex">
                <h1 className="text-3xl font-semibold head mb-2 ml-2">Sign in</h1>
                <button onClick={() => closeModal(false)} className="ml-[330px]"><img src={cross} alt="cross" /></button>
                </span>
                <h2 className="text-5xl font-bold ml-2">Welcome Back!</h2>
                <form action="#1" className="py-4">
                    <div className="form-row grid">
                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">Email Address or Membership Id</label>
                            </div>
                    </div>

                    <div className="form-row grid">
                        <div className="input-data">
                            <input type="password" required />
                            <div className="underline"></div>
                            <label htmlFor="">Password</label>
                        </div>
                    </div>

                    <div className="mt-3 mb-4 ml-4">
                                <div className="btn-sub font-bold text-lg">
                                    <div className=""></div>
                                    <input type="submit" value="Submit" />
                                </div>
                    </div>
                    <Link to="/resv-mem" className="text-xl ml-6 btn-abc" onClick={() => closeModal(false)}>Not a Member yet?</Link>
                </form>
            </section>
            </div>
            </div>
        </div>
    )
}