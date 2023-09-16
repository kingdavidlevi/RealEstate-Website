import React from "react";
import { NavLink } from "react-router-dom";
import './Service.css'

function Services () {
   return(
  <div>
      <div className="service">
      <NavLink to='/' className='product-link'>Back Home</NavLink>
        <h2 className="service-h2">We offer the best services,<br/>we deliver nationwide.<br/> Contact us with the information below.   </h2>
      </div>

      </div>
   )
}


export default Services;