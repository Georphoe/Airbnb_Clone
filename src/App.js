import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
// import katie from "./images/katie-zaferes.png"
import allData from "./data"



export default function App() {

    const cardElement = allData.map(data => {
        return (
            <Card 
                // 因為想不到pass in 圖片地址的辦法 所以把images folder 移到publci(下下策)
                // key={data.id}
                // img={data.coverImg} 
                // rating={data.stats.rating}
                // reviewCount={data.stats.reviewCount}
                // location={data.location}
                // title={data.title}
                // price={data.price}
                // openSpots={data.openSpots}
                key={data.id}
                item={data}
            />
        )
    })
    return (
        <div>        
            <Navbar />
            <Hero />
            <section className="cards-list">   
            {cardElement}
            {/* <Card 
            img={katie}
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
            /> */}

            </section>

        </div>
    )
}