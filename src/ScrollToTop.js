import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";


function ScrollToTop (){
    const location = useLocation();
 useEffect(() =>{
  window.scrollTo(0,0);

 },[location]);

    
return (
    <Outlet/>
)


}



export default ScrollToTop;