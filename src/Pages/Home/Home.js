import React from "react"
import Hero from "./hero.js"
import Welcome from "./welcome.js"
import OneOf from "./oneOf.js"
import View from "./view.js"
import Form from "../Form/form.js"
import "./Home.css"

export default function Home(){
    return(
        <div>
            <section className="home">
                <Hero />
            </section>
            <section>
                <Welcome />
                <OneOf />
                <View />
                <Form />
            </section>
        </div>
    )
}
