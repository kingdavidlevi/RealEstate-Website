import React from "react";
import { useParams,useOutletContext,NavLink } from "react-router-dom";
import './Information.css'

function Information (){
    const {id} = useParams();
  const {houses,setHouses} = useOutletContext();
    const info = houses.filter((house) => house.id === id);
    return(
       <div className="info-line">
        {info.map((house) => {
           const {id,name,location,description,images} = house
            return(
                <div key={id} className="info-div">
                   <NavLink to='/' className='home-link'>Back Home</NavLink>
                  <figure>
              <img src={images} className="info-images" />
              <figcaption className="info-location"> Location :<span className="info"> {location}</span></figcaption>
              </figure>
                <p className="info-paragraph">{description}</p>
                <button className="info-btn">Buy</button>
                </div>
            )
        })}
       </div>
    )

}

export default Information;