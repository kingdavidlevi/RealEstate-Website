
import './Header.css'
import { NavLink,  } from "react-router-dom";
import {FaHome, FaTimes, FaBars, FaAddressBook } from "react-icons/fa"


function Header ({handleBurger, hamburger, sethambuger, setSignOut,signOut}){



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
     }

    return (
      <main className='hidden' >
     
      <nav className="nav-links">
      <div> <h3 className="real">Real Estate <span><FaHome className="home"/></span></h3></div> 
      <ul className="ul-links">
        <li><NavLink to='/'className="link">Home</NavLink></li>
        <li><NavLink to='Product'className="link">Products</NavLink></li>
        <li><NavLink to='Services'className="link">services</NavLink></li>
        <li><NavLink to='About'className="link">About</NavLink></li>
        <li><button className="sign-out"onClick={handleSignOut}><strong>Sign out</strong></button></li>   
        
      </ul>
      </nav>


      <nav className="nav-links1" onMouseDown={handleMain}>
      <div> <h3 className="real">Real Estate <span><FaHome className="home"/></span></h3></div> 
      <div>
      {hamburger ? <FaTimes className="times" onClick={handleBurger}/> :<FaBars className="bars" onClick={handleBurger} />  }
      </div>
      </nav>
      
        </main>
    )
}


export default Header;