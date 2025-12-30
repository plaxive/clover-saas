
import "../Styles/Sections.css"
import point from "../assets/Image/point.jpg"
import { Link } from "react-router-dom"
const Problem = () => {
  return (
    <div className="container">
      <div className="pain-point ">
        <h3>One platform to Recieve order right on your social accont <i className="bi bi-meta"></i></h3>
      </div>

    <div className="pain">
       <div className="img">
        <img src={point} alt="" />
       </div>
       <div className="text">
        <h4>Get Booked. <br /> Never miss a section</h4>
         <p>Recieve a booking section without breaking your social life</p>
         <div className="button button-accent">
            <Link to="/Signup" className="link">find out more</Link>
         </div>
       </div>
    </div>
    </div>
  )
}

export default Problem
