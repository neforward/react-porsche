import { useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Color = () => {
  const [activeColor, setActiveColor] = useState<number>(0);
  interface IColoredCars {
    title: string;
    imgURL: string;
    fillColor: string;
  }
  interface IColoredCabrioletCars {
    title: string;
    imgURL: string;
    fillColor: string;
  }
  interface IColoredTargaCars {
    title: string;
    imgURL: string;
    fillColor: string;
  }
  const coloredCars: IColoredCars[] = [
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c4-modelexplorer-04/normal/7115ad07-d34e-11eb-80d9-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "Porsche 911",
      fillColor: "#bec1c6",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c4-gts-modelexplorer/normal/3827ce27-d2a7-11eb-80d9-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "Porsche 911",
      fillColor: "#9699a0",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c2s-modelexplorer-04/normal/e6983412-cf38-11eb-80d9-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "Porsche 911",
      fillColor: "#8b9bab",
    },

    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c4s-modelexplorer-04/normal/02a33b83-cf39-11eb-80d9-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "Porsche 911",
      fillColor: "#0c1540",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-carrera-t-modelexplorer/normal/b34fb743-4ede-11ed-80f7-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911",
      fillColor: "#1b6935",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c2-gts-modelexplorer/normal/c91044e3-d2a6-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911",
      fillColor: "#800017",
    },

    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelexplorer-04/normal/6a6ac64c-cf38-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911",
      fillColor: "#ce061f",
    },
  ];
  const coloredCabrioletCars: IColoredCabrioletCars[] = [
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c4cab-modelexplorer-04/normal/49b27a86-d34e-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911 Cabriolet",
      fillColor: "#bfc0c4",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c4cab-gts-modelexplorer/normal/61b8c9bc-d2a7-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911 Cabriolet",
      fillColor: "#84878e",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c2scab-modelexplorer-04/normal/f3321db9-cf38-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911 Cabriolet",
      fillColor: "#8396a5",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c4scab-modelexplorer-04/normal/22c7560b-cf39-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911 Cabriolet",
      fillColor: "#13193b",
    },

    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c2cab-gts-modelexplorer/normal/115af2f1-d2a7-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911 Cabriolet",
      fillColor: "#840015",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c2cab-modelexplorer-04/normal/81ea4749-cf38-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911 Cabriolet",
      fillColor: "#ce061f",
    },
  ];
  const coloredTargaCars: IColoredTargaCars[] = [
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-ta4-gts-modelexplorer/normal/b0d25df0-d2a7-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911 Targa",
      fillColor: "#82858c",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-ta4s-modelexplorer-04/normal/73ad59d0-d35d-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911 Targa",
      fillColor: "#02050c",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-ta4-gts-pde-modelexplorer/normal/0fbdd324-5d92-11ec-80e5-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911 Targa",
      fillColor: "#010810",
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/992-ta4-modelexplorer-04/normal/31e29e5a-cf39-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp",
      title: "Porsche 911 Targa",
      fillColor: "#ce061f",
    },
  ];
  const [, setSwiperRef] = useState<null | any>(null);
  const [slides] = useState(
    Array.from({ length: 1 }).map((_, i) => `Slide ${i + 1}`)
  );
  const [selectedCarType, setSelectedCarType] = useState<string>("Coupe");

  const handleColorSelection = (i: number, carType: string) => {
    setActiveColor(i);
    setSelectedCarType(carType);
  };

  return (
    <section className="color">
      <div className="container">
        <div className="color-content">
          <div className="color-text">
            <h3>Select your color</h3>
            <p>
              Minimalist design. Powerful performance. Porsche 911 brings the driving
              experience into the post-petrol era.
            </p>
          </div>
          <Swiper
            modules={[Virtual, Navigation, Pagination]}
            onSwiper={(swiper: null | any) => setSwiperRef(swiper)}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            virtual
          >
            {slides.map((slideContent, i) => (
              <SwiperSlide key={slideContent} virtualIndex={i}>
                <ul>
                  <div>
                    {(selectedCarType === "Coupe"
                      ? coloredCars
                      : selectedCarType === "Cabriolet"
                      ? coloredCabrioletCars
                      : coloredTargaCars
                    ).map((car, i) => (
                      <li key={i} className={activeColor === i ? "active" : ""}>
                        <img src={car.imgURL} alt="" />
                      </li>
                    ))}
                  </div>
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>


          <div className="color-navigation">
            <nav className="color-nav">
              <span onClick={() => handleColorSelection(0, "Coupe")}>
                911 Coupe
              </span>
              <span onClick={() => handleColorSelection(0, "Cabriolet")}>
                911 Cabriolet
              </span>
              <span onClick={() => handleColorSelection(0, "Targa")}>
                911 Targa
              </span>
            </nav>
            <div className="colors">
              {(selectedCarType === "Coupe"
                ? coloredCars
                : selectedCarType === "Cabriolet"
                ? coloredCabrioletCars
                : coloredTargaCars
              ).map((car, i) => (
                <svg
                  key={i}
                  onClick={() => handleColorSelection(i, selectedCarType)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <circle
                    cx="15.9999"
                    cy="16.7241"
                    r="10.6667"
                    fill={car.fillColor}
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Color;
