import React from "react";
import { Link } from "react-router-dom";
import './Error.css'
function Error (){
    return(
        <div className="error">
            <p>
                Page not found
            </p>
      <Link to='/'>Back to home</Link>

        </div>
    )
}

export default Error;