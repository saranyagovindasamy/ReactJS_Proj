import React from 'react'
import Images from '../images/about.jpg';
function About() {
    return (
        
            <div className="about container mb-5 rounded d-flex flex-column flex-lg-row">
                <div className="d-flex flex-column justify-content-center align-items-center pl-10 pr-10 " >
                    <h1>Our Story</h1>
                    <p>Welcome to Team Karthik Developers.We're dedicated to giving you the very best Software Application Projects, with a focus on customer service, satisfaction and uniquness.</p>
                    <p>Founded in 2020 by Mr.Karthik. We now serve customers all over world and are thrilled to be a part of the friendly wing of the Software Industry.</p>
                </div>
                    <img src={Images} className="img-fluid" alt="about"/>
            </div>
        
    )
}

export default About
