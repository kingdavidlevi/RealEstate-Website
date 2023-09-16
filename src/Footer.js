import React from "react";
import { FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,FaApple, FaPlay } from "react-icons/fa";
import './Footer.css'
function Footer ({hamburger,sethambuger,signOut,setSignOut}){

    
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
    return(
        <footer className="footer" onMouseDown={handleMain}>
            <div>
                <ul className="footer-links">
                    <li className="links" ><FaFacebook className="links-icon"/></li>
                    <li className="links"><FaTwitter className="links-icon"/></li>
                    <li className="links"><FaInstagram className="links-icon"/></li>
                    <li className="links"><FaPinterest className="links-icon"/></li>
                    <li className="links"><FaYoutube className="links-icon"/></li>
                </ul>
                <p className="accessible"><span>About us</span><span> Carreers</span> <span>Accessibility</span> <span>Feedback</span>  <span>Media room </span> <span>Ad Choices</span> <span>Advertise with us</span> <span> Agent support</span> <span>Privacy</span> <span> Terms</span> <span>  Home </span> <span>  Made Tech Blog</span> <span> Agent Blog</span> <span>  Sitemap </span> </p>
                
                
                <p className="orange">Do Not Sell or Share My Personal Information</p>

                <p className="get"><strong>Get The App</strong></p>

                <div className="download">
                    <div className="appstore" > <p className="paragraph"> Download on the</p> <h4 className="h4">App Store</h4></div>
                   <div className="apple"><FaApple className="apple"/></div>
                    <div className="googlestore" ><p className="paragraph">Get it on</p> <h4 className="h4">Google Play</h4></div>
                    <div className="play"><FaPlay className="play"/></div>
                </div>
                
            </div>
        </footer>
       // <h4>PRODUCTS</h4>
       // <p><span>Leads & Branding</span><span>ListHub</span><span>Moving.com</span><span>intrnational</span><span>Doorstep</span></p>
    )

}


export default Footer;