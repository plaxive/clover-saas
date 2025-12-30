


import "../Styles/Sections.css"

const Work = () => {

    const Work =[
        {
            id: 1,
            icon: "bi bi-journal-bookmark-fill",
            title: "Create your booking page",
            des: "Set up your services and availability in minutes",
            details: "Add your services, prices, and available times. No technical skills required",

        },
        {
            id: 2,
            icon: "bi bi-link-45deg",
            title: "Share your booking link",
            des: "Let customers book from anywhere",
            details: "Share your booking link on Instagram, WhatsApp, Google, or your website.",

        },
         {
            id: 3,
            icon: "bi bi-whatsapp",
            title: "Receive bookings on WhatsApp",
            des: "Get instant booking messages",
            details: "Customers submit the form and you receive all details directly on WhatsApp ready to confirm",

        },

    ]
  return (
    <div className="container work-wrapper">
        <h3>How it works</h3>
      <div className="work-container">
        {Work.map((item) => (
            <div className="work" key={item.id}>
                <div className="icon">
                    <i class={item.icon}></i>
                </div>
               <h4>{item.title}</h4>
               <p className="des">{item.des}</p>
               <p>{item.details}</p>
               <div className="btn">
                learn more <i className="bi bi-arrow-right"></i>
               </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Work
