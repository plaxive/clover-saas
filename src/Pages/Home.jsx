

import Brands from "../Sections/Brands"
import BusinessBuilt from "../Sections/BusinessBuilt"
import Faq from "../Sections/Faq"
import Footer from "../Sections/Footer"
import Header from "../Sections/Header"
import Navbar from "../Sections/Navbar"
import Problem from "../Sections/Problem"
import Review from "../Sections/Review"
import Work from "../Sections/Work"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Brands/>
      <Problem/>
      <Work/>
      <BusinessBuilt/>
      <Review/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home
