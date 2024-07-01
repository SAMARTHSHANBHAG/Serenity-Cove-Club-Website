import React from "react"
import "./form.css"

export default function Form(){
    const spacing = 2;
    const iframeStyles = {
    marginRight: spacing + 'em',
    };
    return(
        <div className="flex flex-row flex-wrap justify-center">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.983347746447!2d72.8332852748013!3d19.064469752335242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e0!3m2!1sen!2sin!4v1696659212608!5m2!1sen!2sin" 
                title="map" 
                width=""
                height="720" 
                style={iframeStyles} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[50%]">
            </iframe> 

            <form action="#" className="my-20 w-[47%]">
                <h1 className="text-2xl font-semibold head py-3 ml-4">CONTACT US</h1>
                <h2 className="text-5xl font-bold ml-4">Have Any Questions? <br /> Get in Touch!</h2>
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

                <div className="form-row">
                        <div className="input-data textarea">
                            <textarea rows="8" cols="10" required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label htmlFor="">Write your message</label>
                            
                            <div className="submit-btn">
                                <div className="input-data">
                                    <div className="inner"></div>
                                    <input type="submit" value="submit" />
                                </div>
                            </div>
                        </div>
                </div>
            </form>
        </div>
    )
}