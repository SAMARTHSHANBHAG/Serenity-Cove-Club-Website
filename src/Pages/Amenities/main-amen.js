import React from "react";
import Card from "./amenities.js"
import amenData from "./amenData.js"
import "./amenities.css"

export default function Main(){
    const cards = amenData.map(item => {
        return (
          <Card 
            img={item.img}            
            title= {item.title}
          />
        )
      })

      return(
        <div className="main px-20">
            <h1 className="text-center text-6xl font-bold mb-[92px]">Amenities</h1>
            <div className="flex flex-wrap card2">
                {cards}
            </div>
        </div>
      )
}