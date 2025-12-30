
import { Link } from "react-router-dom"
import * as motion from "motion/react-client"


const Header = () => {
  return (
    <div className="header-container">
      <div className="header container">
        <h1>Get and sort Lead from your customer in <span>click!</span> </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, fuga.</p>
        <div className="btn">
         <Link to="/Login">    
          <button className="button button-primary">Get started</button>
          </Link>
        </div>
     {/*<div className="img">
          <img src={header} alt="" />
        </div> */}   
      </div>
    </div>
  )
}

export default Header
