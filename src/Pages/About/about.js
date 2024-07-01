import React from "react";
import about1 from "../../Images/about1.svg";
import about2 from "../../Images/about2.svg"
import "./about.css"


export default function About(){
    return(
        <div className="about">
            <h1 className="text-6xl font-bold text-center ">About</h1>
            <section className="grid grid-cols-2 px-20 py-20">
                <div className="relative">
                    <img data-aos="fade-up" data-aos-once="true" data-aos-duration="300" src={about1} alt="a"/>
                    <img data-aos="fade-up" data-aos-once="true" data-aos-duration="500" src={about2} alt="b" className="absolute img"/>
                </div>
                <div data-aos="fade-left" data-aos-once="true" data-aos-duration="500" className="text-2xl font-light mr-auto">
                Welcome to Serenity Cove Club, a haven of peace and luxury nestled amidst nature's embrace. Indulge in our exclusive amenities, where serenity meets sophistication. Immerse yourself in a world of tranquility, where every moment is a soothing escape from the hustle and bustle of life. Discover the essence of true relaxation at Serenity Cove Club.
                <br />
                <br />
                Serenity Cove Club, nestled amidst the picturesque landscapes, is a luxurious retreat that captivates visitors with its idyllic charm. The club, located in a tranquil setting, offers a range of upscale amenities for its members and guests. Surrounded by lush greenery and overlooking serene water features, the resort boasts state-of-the-art facilities including a spa and wellness center for ultimate relaxation.
                </div>
            </section>
        </div>
    )
}