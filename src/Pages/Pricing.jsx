import { i } from "motion/react-client";
import Navbar from "../Sections/Navbar";
import "../Styles/Price.css"
import Footer from "../Sections/Footer";

const Pricing = () => {
 const pricingPlans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "month",
    description: "For small businesses getting started",
    features: [
      "WhatsApp booking link",
      "Up to 20 bookings / month",
      "Basic customization",
      "Email support"
    ],
    cta: "Get Started",
    highlighted: false,
    icon: "bi bi-check-circle-fill"
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    period: "month",
    description: "For growing businesses that want more conversions",
    features: [
      "Unlimited bookings",
      "WhatsApp message automation",
      "Conversion tracking",
      "Custom branding",
      "Priority support"
    ],
    cta: "Start Free Trial",
    highlighted: true,
    icon: "bi bi-check-circle-fill"   // ⭐ most popular
  },
  {
    id: "business",
    name: "Business",
    price: 49,
    period: "month",
    description: "For teams and high-volume businesses",
    features: [
      "Multiple WhatsApp numbers",
      "Advanced analytics",
      "Team access",
      "Webhook integrations",
      "Dedicated support"
    ],
    cta: "Contact Sales",
    highlighted: false,
    icon: "bi bi-check-circle-fill"
  }
];

  return (

    
    <div className="pricing-wrapper">
      <Navbar/>
    <div className="pricing-container container">
      <h2>Choose the plan that is the best for you</h2>
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.highlighted ? "highlight" : ""}`}
          >
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>

            <h2>
              ${plan.price}
              <span>/{plan.period}</span>
            </h2>

            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}> <i className={plan.icon}></i>{feature}</li>
              ))}
            </ul>

            <button className="button button-primary">
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Pricing;
