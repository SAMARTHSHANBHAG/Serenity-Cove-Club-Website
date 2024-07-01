import React from "react"
import "./packages.css"
import Card from "./packages.js"
import packData from "./packData.js"

export default function Main(){
    const cards = packData.map(item => {
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
            <h1 className="text-center text-6xl font-bold">Packages</h1>
            <div className="flex flex-wrap card-pack">
                {cards}
            </div>
        </div>
    )
}