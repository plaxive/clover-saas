import { useState } from "react";

import "../Styles/Sections.css"


const Faq = () => {

const faqData = [
 {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We specialize in designing and developing modern, responsive websites that help businesses look professional and convert visitors into customers. Our services include landing pages, business websites, booking systems, and performance optimization to ensure your site loads fast on all devices."
  },
  {
    id: 2,
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with international clients from different parts of the world. All communication, project updates, and deliveries are handled remotely using tools like email, messaging platforms, and video calls, making the process smooth and transparent regardless of location."
  },
  {
    id: 3,
    question: "How long does a project take to complete?",
    answer:
      "Project timelines depend on the size and complexity of the website. Simple landing pages usually take about one week, while full business websites or custom features can take between two to three weeks. Before starting, we clearly define the scope and timeline so there are no surprises."
  }
];

const [activeId, setActiveId] = useState(null)

const toggleFaq = (id) => {
    setActiveId(activeId === id ? null :id)
}

  return (
    <div className="container faq-wrapper">
        <h3>What customer asked most</h3>
      <div className="faq-container">
        {faqData.map((item) => (
            <div className="faq" key={item.id} onClick={()=> toggleFaq(item.id)}>
                <div className="top">
                <h5>{item.question}</h5>
                <div className="icon">
                    <i className="bi bi-plus"></i>
                </div>
                </div>

                {activeId === item.id && (
                    <p className="animate__animated animate__fadeInDown animate__faster">{item.answer}</p>
                ) }
            </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
