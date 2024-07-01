import React from "react";
import {Link} from "react-router-dom"
import pic1 from "../../Images/pic-1.svg"
import pic2 from "../../Images/pic-2.svg"
import pic3 from "../../Images/pic-3.svg"
import pic4 from "../../Images/pic-4.svg"
import pic5 from "../../Images/pic-5.svg"
import pic6 from "../../Images/pic-6.svg"

export default function View(){
    return(
        <div className="view grid grid-cols-2 py-8">
            <div className="ml-4">
                <h1 className="text-3xl font-semibold head py-3">
                    DISCOVER THE EXCITEMENT AND THRILL.
                </h1>
                <p className="mb-12">Welcome to Serenity Cove Club, a haven of peace and luxury nestled amidst nature's embrace. Indulge in our exclusive amenities, where serenity meets sophistication. Immerse yourself in a world of tranquility, where every moment is a soothing escape from the hustle and bustle of life. Discover the essence of true relaxation at Serenity Cove Club.</p>
                <Link to="/amenities" className="btn-view text-xl">View all amenities</Link>
            </div>
            <div className="grid grid-cols-3 mt-6">
                <img src={pic1} alt="pic" className="image ml-48"  />
                <img src={pic2} alt="pic" className="image ml-24" />
                <img src={pic3} alt="pic" className="image" width="215px" />
                <img src={pic4} alt="pic" className="image ml-48" width="150px" />
                <img src={pic5} alt="pic" className="image ml-24" width="150px" />
                <img src={pic6} alt="pic" className="image" width="215px" />
            </div>
        </div>
    )
}