import React from "react";
import Card from "./membership.js"
import memData from "./memData.js"
import "./membership.css"

export default function Main(){
    const cards = memData.map(item => {
        return (
          <Card 
            img={item.img}            
            title= {item.title}
            description= {item.description}
          />
        )
      })

      return(
        <div className="main">
            <h1 className="text-center text-6xl font-bold">Membership</h1>
            <div className="flex flex-wrap card1">
                {cards}
            </div>
        </div>
      )
}