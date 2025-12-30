import brand1 from "../assets/Image/company1.png";
import brand2 from "../assets/Image/company2.png";
import brand3 from "../assets/Image/company3.png";
import brand4 from "../assets/Image/company4.png";
import brand5 from "../assets/Image/company5.png";
import brand6 from "../assets/Image/company6.png";

const Brands = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <div className="brand-wrapper container">
      <div className="brands">
        {brands.map((item, index) => (
          <div className="brand" key={index}>
            <img src={item} alt={`brand-${index}`} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Brands;
