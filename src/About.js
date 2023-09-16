import React from "react";
import { NavLink } from "react-router-dom";


import './About.css'
function About (){
    return(
        <div className="about-main">
            <div className="about-div">
     <NavLink to='/' className='home-link'>Back Home</NavLink>
      <figure className="figure">
     <img src='https://i.pinimg.com/564x/20/e1/76/20e1765aad197299218219e14319202b.jpg'className="about-image"/>
      </figure>
      </div>

      <div className="about-paragraph">
        <p className="about">ABOUT US </p> <span className="div"></span>
        <h2 className="about-navy">REAL ESTATE LIMITED</h2>
         <p className="about-paragraph">Real Estate Limited was incorporated in 2022 as a private company limited by shares registered in Febuary. Our goal is provide clients wiyh superior long-term returns. We want to offer you the confidence that comes from a better understanig of your finantial situation and the options available to you. </p>

         <button className="about-btn">DIscover more + </button>
      </div>
        </div>
    )
}
export default About;