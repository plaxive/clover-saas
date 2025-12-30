

import "../Styles/Sections.css"

import review1 from "../assets/Image/review.jpg"
import review2 from "../assets/Image/review2.jpg"
import review3 from "../assets/Image/review3.jpg"
import review4 from "../assets/Image/review4.jpg"
import review5 from "../assets/Image/review5.jpg"
import name1 from "../assets/Image/company1.png"
import name2 from "../assets/Image/company2.png"
import name3 from "../assets/Image/company3.png"
import name4 from "../assets/Image/company4.png"
import name5 from "../assets/Image/company5.png"

const Review = () => {
  const review=[
    {
        img: review1,
        name: name1,
        details: "very good service, i was able to recieve booking notification on my social app in  seconds"
    },
    {
      img: review2,
        name: name2,
        details: "very good service, i was able to recieve booking notification on my social app in  seconds"
    },
    {
      img: review3,
        name: name3,
        details: "very good service, i was able to recieve booking notification on my social app in  seconds"
    },
    {
      img: review4,
        name: name4,
        details: "very good service, i was able to recieve booking notification on my social app in  seconds"
    },
    {
      img: review5,
        name: name5,
        details: "very good service, i was able to recieve booking notification on my social app in  seconds"
    },
    {
        img: review1,
        name: name1,
        details: "very good service, i was able to recieve booking notification on my social app in  seconds"
    },
    {
      img: review2,
        name: name2,
        details: "very good service, i was able to recieve booking notification on my social app in  seconds"
    },
    {
      img: review3,
        name: name3,
        details: "very good service, i was able to recieve booking notification on my social app in  seconds"
    },
    {
      img: review4,
        name: name4,
        details: "very good service, i was able to recieve booking notification on my social app in  seconds"
    },
    {
      img: review5,
        name: name5,
        details: "very good service, i was able to recieve booking notification on my social app in  seconds"
    },
  ]

  return (
    <div className="container reviews">
      <h3 >Trusted by millions of business Across Africa</h3>
      <p>These are the companies that are 100% satisfied with our services</p>
       <div className="review-wrapper">
        <div className="review-container">
          {review.map((item, i) => (
            <div className="review" key={i}>
              <img src={item.img} alt="" />
              <div className="overlay">
                <div className="data">
                  <img src={item.name} alt="" />
                <p>{item.details}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        </div>      
    </div>
  )
}

export default Review
