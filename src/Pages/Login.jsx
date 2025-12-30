
import "../Styles/Login.css"
import Navbar from "../Sections/Navbar"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login-wrapper">
     <Navbar/>
      <div className="login-container container">
        <div className="login">
          <div className="left">
            <h2>Good to see you <span>Here!</span></h2>
            <p>Login to access your dashbard and start getting booked</p>
          </div>
          <div className="right">
            <h2>Login</h2>
            <p>Login to start automating booking</p>
            <form >
              <div className="email">
                 <label htmlFor="">Email address</label>
              <div className="mail">
                <i className="bi bi-envelope"></i><input type="email" name="" id="" />
              </div>
              </div>
              <div className="password">
                <label >Password</label>
                <div className="pass">
                  <i class="bi bi-key"></i><input type="password" name="" id="" />
                </div>
              </div>

              <div className="btn">
                <Link to="/Pricing">
                <button>Sign in</button>
                </Link>
              </div>
            </form>

            <div className="bottom">
              <p>Dont have an account ?<Link to="/Signup"> <span>Sign up</span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
