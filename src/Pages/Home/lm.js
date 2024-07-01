import React, { useEffect } from "react";
import "./Home.css"
import id1 from "../../Images/w-icon-1.svg"
import id2 from "../../Images/w-icon-2.svg"
import id3 from "../../Images/w-icon-3.svg"
import id4 from "../../Images/w-icon-4.svg"

export default function Main(){
    useEffect(() => {
        function scrollToHashSection() {
          const sectionId = window.location.hash.substring(1);
          const sectionElement = document.getElementById(sectionId);
    
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
          }
        }
    
        scrollToHashSection();
        window.addEventListener("hashchange", scrollToHashSection);
    
        return () => {
          window.removeEventListener("hashchange", scrollToHashSection);
        };
        }, []);    

      return(
            <div className="main">
                <section id="1" className="sect">
                    <div>
                        <img src={id1} width="200px" alt="img" className="py-8" />
                    </div>
                    <div className="textwrite">
                    <h1 className="texthead">6+ Indoor Sporting Amenities</h1>
                    <p>
                    Explore a wide range of indoor sporting amenities at Serenity Cove Club, where we offer more than six exceptional options for your leisure and fitness needs. Whether you're a sports enthusiast or just looking to stay active, our state-of-the-art facilities cater to all interests. From well-equipped gyms and basketball courts to tennis and racquetball facilities, we provide a diverse selection of indoor sporting options to help you maintain a healthy and active lifestyle. Join us and experience the convenience of having over six indoor sporting amenities at your fingertips, all within the serene and welcoming environment of Serenity Cove Club.
                    </p>
                    </div>
                </section>
                <section id="2" className="sect">
                    <div>
                        <img src={id2} width="200px" alt="img" className="py-8" />
                    </div>
                    <div className="textwrite">
                    <h1 className="texthead">Several Membership Options</h1>
                    <p>
                    Discover the versatility of our membership offerings at Serenity Cove Club, where we present several distinctive options to suit your individual preferences and needs. We understand that every member is unique, and that's why we provide a variety of membership choices to accommodate different lifestyles and goals. Whether you're seeking full access to all our amenities, a more tailored membership, or a flexible plan, we have you covered. Our several membership options ensure that you can find the perfect fit to enjoy the exclusive privileges and services at Serenity Cove Club. Join us today and explore the diverse range of membership choices designed to enhance your experience and make your stay truly exceptional.
                    </p>
                    </div>
                </section>
                <section id="3" className="sect">
                    <div>
                        <img src={id3} width="200px" alt="img" className="py-8" />
                    </div>
                    <div className="textwrite">
                    <h1 className="texthead">Customize your Packages</h1>
                    <p>
                    Tailor your experience to your exact specifications with our 'Customize Your Packages' feature at Serenity Cove Club. We understand that every member has unique desires and needs, and that's why we offer the flexibility to create a package that's perfect for you. Whether you want to focus on specific amenities, duration, or additional services, our customization option empowers you to craft a membership package that aligns with your lifestyle and aspirations. At Serenity Cove Club, we believe in putting you in control, allowing you to enjoy a truly personalized and tailored experience. Join us and explore the freedom to design your own package, ensuring that your journey with us is as unique as you are
                    </p>
                    </div>
                </section>
                <section id="4" className="sect">
                    <div>
                        <img src={id4} width="200px" alt="img" className="py-8" />
                    </div>
                    <div className="textwrite">
                    <h1 className="texthead">Fine Dine Restaurants & Cafes</h1>
                    <p>
                    Savor an exquisite culinary experience at Serenity Cove Club with our 'Fine Dine Restaurants & Cafes.' Indulge in a world of gastronomic delight where our diverse dining establishments cater to your every craving. From elegant fine dining venues offering gourmet cuisine to cozy cafes perfect for a quick coffee or casual meal, our selection of dining options ensures that every taste bud is satisfied. Our commitment to culinary excellence and the art of hospitality is the hallmark of every dish served. Join us to embark on a culinary journey and discover the pleasure of our fine dine restaurants and cafes, where every meal is a delightful and memorable experience.
                    </p>
                    </div>
                </section>
            </div>
      )
}