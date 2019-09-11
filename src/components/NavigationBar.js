import React from 'react';
import { Link } from 'react-router-dom'
export default () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
    <div className="collapse navbar-collapse" >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
       
        <li className="nav-item">
            <Link to ="/" className="nav-link" >Home</Link>
        </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
            <Link  to='/signup' className="nav-link "  tabindex="-1" aria-disabled="true">SignUp</Link>
        </li>
        </ul>
    
    </div>
        </nav>
    )
}