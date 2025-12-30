

import "../Styles/Sections.css"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper container" >
        <footer>
            <div className="left">
              <div className="logo">
                <h3>clo<span>ver</span> </h3>
                <p>Never miss a booking section</p>
              </div>
            </div>
            <div className="right">
               <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Pricing">Pricing</Link></li>
                <li><Link to="/Blog">Home</Link></li>
                <li><Link to="/Dashboard">contact</Link></li>
               </ul>
            </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
