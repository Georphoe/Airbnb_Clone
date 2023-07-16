import React from "react"
// import katie from "../images/katie-zaferes.png"
// import star from "./images/star.png"
export default function Card(props) {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <div className="card">
           
            {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} a conditional rendering statement using the logical AND (&&) operator. */}
            {badgeText != undefined && <div className="card--badge">{badgeText}</div>}  {/* Js 的 sytax 要在搞懂一下 */}
           <img src={`../Airbnb_Clone/images/${props.item.coverImg}`} className="card--image"/>
            <div className="card--stats">
                <img src="../Airbnb_Cloneㄥimages/star.png" className="card--star"/>
                <span>{props.item.stats.rating}</span> 
                <span className="gray">({props.item.stats.reviewCount}) • </span> 
                <span className="gray">{props.item.location}</span> 

            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-pritce"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}