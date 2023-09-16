import React, { useState, useEffect } from "react";
import './Home.css'
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";


function Home () {
   const [search, setSearch] = useState("")
   const navigate = useNavigate()
   const {hamburger,sethambuger,houses,setHouses,signOut,setSignOut} = useOutletContext()

  

  useEffect(() =>{
    const results = houses.filter((result) => (result.location).toLowerCase().includes(search.toLowerCase()));
    setHouses(results)
  },[search])



  const handleInput = (e) =>{
    const values = e.target.value
    setSearch (values)
   }
 
   const removeSearch = () =>{
     setSearch("")
   }

   

   const handleMain = () => {
    if (hamburger === true){
      sethambuger(false)
    }
    else{
      sethambuger(null)
    }

      if (signOut=== true){
        setSignOut(false)
      }
      else{
        setSignOut(null)
      }
    }

    const handleSignOut = () =>{
      setSignOut(prevSignout => !prevSignout)
    

      if(signOut === true){
        sethambuger(false)
      }
       else{
        sethambuger(null)
       }

    }

    
    const mobileSignOut = () =>{
           navigate('Form')
        
      }
   
     
     
    
   
    return(
        
        <main className="main-links">   
{hamburger && (
      <div className="mobile-div2">
        
        <ul className="mobile-links2">
          
      <li><NavLink to='/'className="link-mobile"><strong>Home</strong> <FaHome /></NavLink></li>
      <li><NavLink to='Product'className="link-mobile" > <strong>Products</strong> </NavLink></li>
      <li><NavLink to='Services'className="link-mobile"><strong>Services</strong></NavLink></li>
      <li><NavLink to='About'className="link-mobile"><strong>About</strong> <FaAddressBook/></NavLink></li>
      <li><NavLink to='/'className="link-mobile"><strong>Settings</strong> </NavLink></li>
      <li className="link-mobile"><button onClick={handleSignOut} className="red-btn"><strong>Sign out</strong></button></li>
      </ul>
          </div>)}

          {signOut && (
            <div className="logout" >
            <p className="logout-p"><strong>Sign out of <br/> your account?</strong></p>
            <li className="li"  onClick={mobileSignOut}><Link className="link-sign-out"  ><strong>Sign Out </strong></Link></li>
            <li className="li" onClick={handleSignOut}><strong>Cancel</strong></li>
            </div>
          )}

         <div className="main-div" onMouseDown={handleMain}>
        <h1 className="discover"><strong>Discover Your New Home</strong></h1>
      <div className="input-div"> <form> <input type="text" value={search} placeholder="Search City..." onChange={handleInput} className="mobile-input"/> <div/>
   
    {search.length > 0 ? (
     <FaTimes className="fasearch1" onClick={removeSearch}/> ) :  <FaSearch className="fasearch"/> } </form></div> 
      
        <h2 className="tour"><strong>Agents. Tours. Loans. Homes.</strong></h2>
        <p className="help">Helping 100 million renters find their perfect fit.</p>

            </div> 
            
       {houses.length > 0 ?(

         <section className="section" onMouseDown={handleMain}>
          <div className="main-element" >
           {houses.map((house)=>{
            const {name,id,location,images} = house;
            return(
            <div key={id} className="mobile-image-style">
              <figure>
            <img src={images} className="mobile-images" />
            
            <p className="location"><span className="blue">Location</span>: {location}</p>
            </figure>
            <p className="details">For more details <span><NavLink className='information' to={`${id}`}>Click here</NavLink></span></p>
            </div>
            )

           })}

          </div>  </section>):

         
          <div className="result" onMouseDown={handleMain}> <p className="result1"><strong> Opps No Results Found! Refresh Page</strong></p></div>
         

          }

         
        </main>
        
        
    )
}

export default Home;