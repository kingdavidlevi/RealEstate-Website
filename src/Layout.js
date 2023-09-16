import React, { useState } from "react"
import { Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function Layout(){
  const [hamburger,sethambuger] = useState(false)
  const [signOut,setSignOut] = useState(false)
  const handleBurger = ()=>{
    sethambuger(prevstate => !prevstate)

  }

  const [houses, setHouses] = useState ([
    {
        'name': 'Bungalow',
        'location':'New-York City',
        'images':'https://i.pinimg.com/564x/0e/58/3f/0e583f5b695d3d7641371348094205a5.jpg ',
        'description': 'This is an apartment located at the centre of the city,with assesible major roads,it is cheap and affordable. We offer the best and your confort is our top priority. we also offer services like rental, halls for birthday parties, wedding ceremonies. we also have a lounge for our guests and a cool bar for relaxation ',
        
        id:'1'
    },

    {
      id:'2',
      'name': 'Duplex',
      'location':'Paris',
      'images':' https://i.pinimg.com/564x/2d/bb/e5/2dbbe519dbf1abb34d8cd824dbf07b33.jpg ',
      'description': 'A beautiful home is a happy home, according to georgia andrew "Home is the starting place of love,hope and dreams", we offer the best and your confort is our top priority. we also offer services like rental, halls for birthday parties, wedding ceremonies. we also have a lounge for our guests and a cool bar for relaxation ',
      
    },
      {
       id:'3', 
      'name': 'Semi-detached house',
      'location':'Congo',
      'images':' https://i.pinimg.com/236x/16/56/4b/16564b990cb5117d80ad81914831d1ca.jpg  ',
      'description': 'A beautiful home is a happy home, according to georgia andrew "Home is the starting place of love,hope and dreams", we offer the best and your confort is our top priority. we also offer services like rental, halls for birthday parties, wedding ceremonies. we also have a lounge for our guests and a cool bar for relaxation ',
      
    },
      {
       id:'4', 
      'name': 'Detached-house',
      'location':'Switzerland',
      'images':'  https://i.pinimg.com/564x/8d/77/72/8d7772de8eb5a89bdccedecaa9a15f1e.jpg ',
      'description': 'A beautiful home is a happy home, according to georgia andrew "Home is the starting place of love,hope and dreams", we offer the best and your confort is our top priority. we also offer services like rental, halls for birthday parties, wedding ceremonies. we also have a lounge for our guests and a cool bar for relaxation ',
      
    },
      {
       id:'5', 
      'name': 'Duplex',
      'location':'Belgium',
      'images':' https://i.pinimg.com/736x/c4/b0/49/c4b0494b878ee25d2b5db84bcf84470c.jpg  ',
      'description': 'A beautiful home is a happy home, according to georgia andrew "Home is the starting place of love,hope and dreams", we offer the best and your confort is our top priority. we also offer services like rental, halls for birthday parties, wedding ceremonies. we also have a lounge for our guests and a cool bar for relaxation '
      
    },
      {
      id:'6', 
      'name': 'Bungalow',
      'location':'America',
      'images':'https://i.pinimg.com/564x/2d/bb/e5/2dbbe519dbf1abb34d8cd824dbf07b33.jpg ',
      'description': 'A beautiful home is a happy home, according to georgia andrew "Home is the starting place of love,hope and dreams", we offer the best and your confort is our top priority. we also offer services like rental, halls for birthday parties, wedding ceremonies. we also have a lounge for our guests and a cool bar for relaxation '
      

    }

])

    return(
      <div>
        <Header handleBurger = {handleBurger} hamburger = {hamburger}  sethambuger = {sethambuger} setSignOut ={ setSignOut} signOut={signOut} />
        <Outlet context={{hamburger,sethambuger,handleBurger,houses,setHouses,signOut,setSignOut}} />
        <Footer sethambuger={sethambuger} hamburger={hamburger} setSignOut={setSignOut} signOut={signOut}/>
      </div>
    )
}

export default Layout;