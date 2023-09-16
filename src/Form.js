import React, {useState} from "react";
import {FaGoogle} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import './Form.css'
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";


function Form (){
const [icons, setIcons] = useState(false);      
const [err, setErr] = useState('')
const [hamburger, sethambuger] = useState(false)
const [firstPassword, setfirstPassword] = useState('')
const [secondPassword, setSecondPassword] = useState('')
const navigate = useNavigate()
const [formData, setFormData] = useState({
    firstname:'',
    email: '',
    agreement: false,
})



const handleInput = (e) => {
   const {name,type,value,checked} = e.target
   setFormData((prevdata) => ({
    ...prevdata,
    [name] : type === 'checkbox' ? checked : value
    
   }))
}

const handlepassword = (e) =>{
 setfirstPassword(e.target.value)
}

 const handleVisibility = () => {
   setIcons(previcons => !previcons)

 }
  const handlecomfirmpassword = (e) =>{
    setSecondPassword (e.target.value)
  
  }
    const button = () =>{
      if (firstPassword !== secondPassword){
        setErr('password does not match !')
        
       }
       else{
        setErr('')
       }
    }
    

    const handlesubmit = (e) => {
     e.preventDefault()

     if(firstPassword === secondPassword){
     navigate('/')
    } 
     
    }
 
    
   const handleMain = () =>{
    if (hamburger === true){
      sethambuger(false)
    }
    else{
      sethambuger(null)
    }
   }

    return (
      
     
       <div className='navy'>

               
   
    <nav className="form-nav-links">
      <div className="center"> <h3 className="real">Real Estate <span><FaHome className="home"/></span></h3></div> 
    
      </nav>
    

          <div className='navy2' onMouseOver={handleMain}>
           <h2 className="welcome">Welcome</h2>
           <p className="achieve">Achieving more together</p>
            <h3 className="register">Register here</h3>
            <form className="form" onSubmit={handlesubmit} >
        
           <input type="text"className="input" onChange={handleInput} name="fullname" required  placeholder="First Name" value={formData.fullname} autoFocus autoComplete="on"/> <br/>
           <input type="email" className="input" onChange={handleInput} name="email" required  placeholder="Email" value={formData.email} autoComplete="on"/> <br/>
           <input type={icons ? 'text' : 'password' } className="input" onChange={handlepassword} name="password" required placeholder="Password" value={formData.password} maxLength={10} /> <br/>
         {icons ? <FaEyeSlash className="position" onClick={handleVisibility} /> : <FaEye className="position" onClick={handleVisibility}/> }
         <input type={icons ? 'text' : 'password' } className="input1" onChange={handlecomfirmpassword} name="comfirmpassword" required placeholder="Comfirm password" value={formData.comfirmpassword} maxLength={10} /> <br/>
         <p className="red">{err}</p>

           <input type="checkbox" className="checked" onChange={handleInput} name="agreement" required checked={formData.agreement} id="agreement" />
           <label htmlFor='agreement'  className="agreement">I Agree to <span className="colored">Terms of service</span> & <span className="colored">Privacy policy</span></label> <br/>
           <button type="submit" className="submit"onClick={button}>Sign in</button>
           <p className="or">or</p> 
           <a href="https://gmail.com"><button type="button" className="btn"><FaGoogle className="google"/> Sign up with Google</button></a> <br/>
          <a href="https://facebook.com" > <button type="button" className="btn1"><FaFacebook className="facebook"/> Sign up with Facebook</button> </a>
            </form>
            </div>
        </div>
        
    )
}


export default Form;