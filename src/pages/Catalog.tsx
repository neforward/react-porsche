import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderBlack from "../components/Header-black";
interface IMainCatalog {
  imgURL: string;
  type: string;
  model: string;
  price: string;
  year: number;
}
const Catalog = () => {
  const mainCatalog: IMainCatalog[] = [
    {
      imgURL:
        "https://platform.cstatic-images.com/xlarge/in/v2/6e223f36-25c4-5f00-bb7f-90493c32a0a3/733a3a5f-36e7-4046-8a22-7d2dd88bbe36/1OyVyfydRPb_bQPAveYY5p81BKs.jpg",
      type: "Gasoline",
      model: "Porsche 911 Turbo S",
      price: "129,975",
      year: 2005,
    },
    {
      imgURL:
        "https://www.ccsmotors.com/imagetag/138/main/l/Used-2011-PORSCHE-911-Carrera-4S-Carrera-4S.jpg",
      type: "Gasoline",
      model: " Porsche 911 Turbo",
      price: "89,325",
      year: 2011,
    },
    {
      imgURL:
        "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/9004500a220bf3a3d455d15ee052cf8c332606f8/photos/3gq6xaNP-5Zzhy1THp9-(edit).jpg?t=165820835234",
      type: "Gasoline",
      model: "Porsche 911 Turbo S",
      price: "159,990",
      year: 2018,
    },

    {
      imgURL:
        "https://platform.cstatic-images.com/xlarge/in/v2/5f7d0bfa-cf8e-5d51-8821-386db4420eba/efaf3c59-846c-40f5-a2a2-18627464094d/WPBzZZR3WnDwnSXCxhoNe4H_iSY.jpg",
      type: "Gasoline",
      model: "Porsche 911 Turbo S",
      price: "123,997",
      year: 2020,
    },
    {
      imgURL:
        "https://platform.cstatic-images.com/xlarge/in/v2/5f7d0bfa-cf8e-5d51-8821-386db4420eba/eb6259f8-f0e7-4c71-a58d-3e27cf8582b2/9CB7-pczGNvhQpONWorW5gKwyfM.jpg",
      type: "Gasoline",
      model: "Porsche 911 GT3 RS",
      price: "203,500",
      year: 2016,
    },
    {
      imgURL:
        "https://www.edmunds.com/assets/m/for-sale/14-wp0ad2a93ms257357/img-1-960x.jpg",
      type: "Gasoline",
      model: "Porsche 911 Turbo",
      price: "229,998",
      year: 2021,
    },
    {
      imgURL:
        "https://www.edmunds.com/assets/m/for-sale/64-wp0aa2a93ms206594/img-1-960x.jpg",
      type: "Gasoline",
      model: "Porsche 911 Carrera",
      price: "122,500",
      year: 2020,
    },
    {
      imgURL:
        "https://www.edmunds.com/assets/m/for-sale/64-wp0cb2a96ps248199/img-1-960x.jpg",
      type: "Gasoline",
      model: "Porsche 911 Carrera GTS",
      price: "188,991",
      year: 2023,
    },
  ];

  return (
    <>
      <HeaderBlack />
      <div className="carsInStock">
        <div className="container">
          <div className="carsInStock-title">
            <h2>Cars in stock</h2>
            <Link to="/configurator">
              <button>Configurator</button>
            </Link>
          </div>
          <div className="carsInStock-content">
            {mainCatalog.map((car, index) => (
              <div className="car-box" key={index}>
                <div className="car-img">
                  <img src={car.imgURL} alt="" />
                </div>
                <div className="car-info">
                  <div className="info-top">
                    <h6>{car.type}</h6>
                  </div>
                  <div className="info-middle">
                    <h4>{car.model}</h4>
                  </div>
                  <div className="info-price">
                    <h3>{car.price} $</h3>
                    <h3>{car.year}</h3>
                  </div>
                  <div className="info-btn">
                    <button>Подробнее</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
