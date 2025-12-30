


import "../Styles/Sections.css"
import business1 from "../assets/Image/business1.jpg"
import business2 from "../assets/Image/business2.jpg"
import business3 from "../assets/Image/business3.jpg"
import business4 from "../assets/Image/business4.jpg"

const BusinessBuilt = () => {

    const business = [
        {
            img: business2,
            title: "Restaurants & Food Vendors",
            span: "two",
            
        },
        {
            img: business4,
            title: "Barbing & salon",
            span: "one"
        },
        { 
            img: business3,
            title: "Logistic Business",
            span: "one"
        }

    ]
  return (
    <div className="container business-wrapper">
        <h3>Built for local businesses</h3>
        <p>Built for local business across the continent, to recieve booking without breaking social life</p>
      <div className="business-container">
         {business.map((item, i) => (
            <div className={`business ${item.span}`} key={i}>
                <div className="img-container">
                   <img src={item.img} alt={item.title} />
                </div>
                
                <div className="text">
                    <h4>{item.title}</h4>
                    <p>customer orders through social</p>
                </div>
            </div>
         ))}
      </div>
    </div>
  )
}

export default BusinessBuilt
