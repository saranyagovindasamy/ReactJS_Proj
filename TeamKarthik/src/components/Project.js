import React from 'react'
import Logo from '../images/logo.jpg'
import Mobile from '../images/mobileapp.jpg'

import Ecommerce from '../images/ecommerce.jpg'

import Portfolio from '../images/portfolio.jpg'

import Digital from '../images/digitalmarketing.jpg'

import Web from '../images/websitedesign.jpg'


function Project() {
    const Cards = [
    {imgSrc:Logo,title:'Logo Design',description:"WE are good at logo designing"},
    {imgSrc:Mobile,title:'E-commerce',description:"WE are good at logo designing"},
    {imgSrc:Ecommerce,title:'Digital Marketing',description:"WE are good at logo designing"},
    {imgSrc:Portfolio,title:'Web Design ',description:"WE are good at logo designing"},
    {imgSrc:Digital,title:'Application Design',description:"WE are good at logo designing"},
    {imgSrc:Web,title:'Content Design',description:"WE are good at logo designing"},
]
    return (
        <div className=" project container">
            <div className="row">
                {
                Cards.map((data,index) => (
                   
                    <div key={index} className="col-6 col-md-4" >
                        <img src={data.imgSrc} className="img-fluid img-thumbnail" alt="logo"/>
                   <h2>{data.title}</h2> 
                   <p>{data.description}</p> 
                    </div>
                   
                ))}
                
           </div>
        </div>
    )
}

export default Project
