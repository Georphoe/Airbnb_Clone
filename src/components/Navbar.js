import React from "react"
// import airbnbLogo from "../images/airbnb-logo.png" /* Needed for styles and images with CRA when using "Create React App"*/

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src="../Airbnb_Clone/images/airbnb-logo.png" /> 
            <h4 className="nav--title">React Course - Project 2</h4>
        </nav>
    )
}