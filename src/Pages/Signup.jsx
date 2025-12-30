import Navbar from "../Sections/Navbar"

import "../Styles/Signup.css"
import { Link } from "react-router-dom"


const tracks = [
  {
    title: "Simple Automation",
    details: "Access to 500+ course from industry expert",
    icon: "bi bi-check-circle-fill"
  },
  {
    title: "Track progress",
    details: "Monitor your growth and detailed analtics",
    icon: "bi bi-graph-up-arrow"
  },
  {
    title: "Never miss a booking",
    details: "Access to 500+ course from industry expert",
    icon: "bi bi-git"
  },
]


const Signup = () => {
  return (
    <div>
      <Navbar/>
      <div className="signup-container container">
        <div className="signup">
        <div className="left">
         <h3>Create an account</h3>
         <p>create account to start automating</p>
         <form >
          <div className="full-name">
            <label>Full name</label>
            <div className="name">
              <i className="bi bi-person-fill"></i> <input type="text" name="" id="" />
            </div>
          </div>

          <div className="email">
            <label htmlFor="">Email</label>
            <div className="mail">
              <i className="bi bi-envelope-fill"></i> <input type="email" name="" id="" />
            </div>
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <div className="pass">
              <i className="bi bi-key-fill"></i>
              <input type="password" name="" id="" />
            </div>
          </div>

          <div className="btn">
            <Link to="/pricing">
            <button>Create Account</button>
            </Link>
          </div>
         </form>

         <div className="bottom">
          <p>Already have an account ? <Link to="/Login"><span> Sign in </span></Link> </p>
         </div>
        </div>
        <div className="right">
          <h3>Start your automation <span>journey Today</span></h3>
          <p>Transform your business with whatsapp appointment booking automation</p>
          <div className="tracks">
             {tracks.map((item, i) => (
              <div className="track" key={i}>
                <div className="left-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="right-icon">
                   <h4>{item.title}</h4>
                <p>{item.details}</p>
                </div>
              </div>
             ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
