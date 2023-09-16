import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Component (){
    const [hamburger,sethambuger] = useState(false)
    const [signOut,setSignOut] = useState(false)
    
    return(
        <div>
            <Outlet hamburger = {hamburger}  sethambuger = {sethambuger} setSignOut ={ setSignOut} signOut={signOut} />
            <Footer sethambuger={sethambuger} hamburger={hamburger} setSignOut={setSignOut} signOut={signOut} />
        </div>
    )
}

export default Component;

