import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Pricing from "./Pages/Pricing"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Blog from "./Pages/Blog"





const App = () => {
  return (
    <div>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Blog" element={<Blog/>}/>
         </Routes>
    </div>
  )
}

export default App
