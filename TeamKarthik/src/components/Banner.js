import React from 'react'
import './App.js';
import Images from '../images/hero.jpg';

function Banner() {
    return (
        
        <div className="mt-5 mb-5 pt-5 pb-5 banner container d-flex flex-column flex-lg-row justify-content-lg-center">
            <div className=" mt-5 mb-5 d-flex flex-column justify-content-center align-items-center ">
                <h1 className="text-white">OUR VISION, YOUR FUTURE</h1>
                <button className="btn text-white btn-primary btn-lg">What We Do</button>
            </div>
            <div className="flex-lg-grow-0">
            <img src={Images} className=" d-block" alt="hero-image" />
            </div>
        </div>
    )
}

export default Banner
