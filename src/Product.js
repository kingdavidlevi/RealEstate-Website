import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome,FaLandmark } from "react-icons/fa";
import './Product.css'

function Product (){
    return(
        <div className="product-main">

        <div className="product-div">
            
      <NavLink to='/' className='product-link'>Back Home</NavLink>
                 
        <h2 className="products">Discover the Best</h2>
        <h2 className="products1"> Properties in Surulere  </h2>
        <h2 className="products2"> with Real Estate Limited</h2>
        <p>Find your dream home <br/> with ease- Explore ourdiverse range of properties and dsiscover the product one for you</p>
        <div><button className="orange-btn">Get Started</button></div>
        </div>

        <div className="product-orange">
      <h3 >We offer a variety of  properties,<br/>including houses, <FaHome/> apartments,and land <FaLandmark/> for sale or rent,and provide personalized service. </h3>
        </div>

        </div>
    )
}

export default Product;