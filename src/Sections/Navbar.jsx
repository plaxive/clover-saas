import { Link } from "react-router-dom"

import { useState } from "react"
import "../Styles/Sections.css"



const Navbar = () => {

  const [open, setOpen] = useState(false)


  return (
    <div className="nav-wrapper ">
      <div className="nav-bar">
        <nav>
            <div className="logo">
                <h3>clo<span>ver</span></h3>
            </div>
            <div className="nav-icon" onClick={() => setOpen(!open)}>
              <i class="bi bi-list"></i>
            </div>
            <div className={`mobile animate__animated animate__slideInDown ${open ? "open": ""}`}>

              <div className="close" onClick={() => setOpen(!open)}>
                <i className="bi bi-x"></i>
              </div>

           
            <div className="list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Pricing">Pricing</Link></li>
                    <li><Link to="/Dashboard">Blog</Link></li>
                    <li><Link to="/Blog">contact</Link></li>
                    
                </ul>
            </div>
            <div className="login-btn">
              
                <button><Link to="/Signup" className="link">Try for free</Link></button>
                
            </div>
             </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
