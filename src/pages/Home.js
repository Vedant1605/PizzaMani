import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'>
                <h1>Pizzaa Mania</h1>
                <p>PIZZA TO MY TASTE</p>
                <Link to="/menu">
                    <button>
                        Order Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;