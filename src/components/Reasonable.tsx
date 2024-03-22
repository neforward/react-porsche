import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
const Reasonable = () => {
  const [counter, setCounter] = useState<number>(0);

  interface ICharacteristicSlider {
    imgURL: string;
    title: string;
    reserve: number;
    power: number;
    traction: number;
    description: string;
  }

  const characteristicSlider: ICharacteristicSlider[] = [
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/718-cayman-se-modelexplorer/normal/fd34d6db-4f76-11ed-80f7-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "718 Cayman Style Edition",
      reserve: 480,
      power: 300,
      traction: 11.0,
      description: `The Porsche 718 is a performance marvel, seamlessly blending power and precision.`,
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/718-boxster-se-modelexplorer/normal/da7523bc-4f76-11ed-80f7-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "718 Boxster Style Edition",
      reserve: 580,
      power: 300,
      traction: 4.9,
      description: `The Porsche 718 is a masterpiece of timeless elegance, showcasing a design that effortlessly marries form and function.`,
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/718-cayman-gts4%C2%B5c2%C2%B5b5z0-modelexplorer/normal/2efc8b8a-2d57-11eb-80d0-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "718 Cayman GTS 4.0",
      reserve: 790,
      power: 394,
      traction: 4.3,
      description: `The Porsche 718 is a testament to innovative engineering excellence. Its lightweight construction, advanced aerodynamics, and cutting-edge technology result in a driving experience that is both dynamic and efficient. `,
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/pa3-t-modelexplorer/normal/663d053e-85ac-11ec-80e9-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "Macan T",
      reserve: 500,
      power: 261,
      traction: 5.8,
      description: `The Porsche Macan exemplifies innovative engineering within the SUV category.  `,
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/pa3-gts-modelexplorer/normal/19df7d06-7dec-11ec-80e9-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "Macan GTS",
      reserve: 613,
      power: 434,
      traction: 4.3,
      description: `The Porsche Macan boasts a sophisticated design that strikes a harmonious balance between sportiness and functionality. `,
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/pa3-s-modelexplorer/normal/6d584fbb-c478-11ec-80ef-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "Macan S",
      reserve: 585,
      power: 375,
      traction: 4.6,
      description: `The Porsche Macan is a dynamic performance SUV that effortlessly combines the versatility of an SUV with the driving dynamics expected from a Porsche.`,
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-coupe-turbo-gt-modelexplorer-sideshot/normal/989d8271-89e7-11ee-810e-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "Cayenne Turbo GT",
      reserve: 640,
      power: 650,
      traction: 3.1,
      description: `The Porsche Cayenne stands at the pinnacle of performance SUVs, seamlessly combining the versatility of an SUV with the heart-pounding performance expected from the Porsche brand. `,
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-coupe-phev-modelexplorer-sideshot/normal/c7cd2fa5-8859-11ee-810c-005056bbdc38;sO;twebp065/porsche-normal.webp",
      title: "Cayenne E-Hybrid",
      reserve: 560,
      power: 450,
      traction: 5.8,
      description: `The Porsche Cayenne is an elegant powerhouse that commands attention with its sophisticated design and robust performance capabilities. `,
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/j1-taycan-turbo-s-cross-turismo-modelexplorer/normal/60a35e6c-7837-11eb-80d3-005056bbdc38;sP;twebp065/porsche-normal.webp",
      title: "Taycan Turbo S Cross",
      reserve: 810,
      power: 750,
      traction: 2.7,
      description: `The Porsche Taycan is a pioneering electric performance car, setting new standards in the automotive industry. `,
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/j1-taycan-tus-modelexplorer-01/normal/e232ba7b-1ff3-11ee-8103-005056bbdc38;sK;twebp065/porsche-normal.webp",
      title: "Taycan Turbo S",
      reserve: 780,
      power: 750,
      traction: 2.6,
      description: `The Porsche Taycan is a masterpiece of sculpted elegance in motion. Its aerodynamic design, flowing lines, and purposeful stance not only contribute to its visual appeal but also optimize its efficiency and performance. `,
    },
    {
      imgURL:
        "https://files.porsche.com/filestore/image/multimedia/none/j1-taycan-gts-st-modelexplorer-image/normal/7d46f0bf-365e-11ec-80e2-005056bbdc38;sP;twebp065/porsche-normal.webp",
      title: "Taycan GTS Sport",
      reserve: 680,
      power: 590,
      traction: 3.5,
      description: `The Porsche Taycan represents a revolution in tech-driven performance.`,
    },
  ];
  return (
    <section className="reasonable">
      <div className="container">
        <div className="gradient">
          <div className="gradient-content">
            <div className="gradient-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="25"
                viewBox="0 0 84 25"
                fill="none"
              >
                <path
                  d="M1.01483 10.5929C7.52656 7.54623 14.6032 5.44768 20.3754 1.04173C24.549 4.32545 29.4417 6.44487 34.2919 8.51556C36.9231 7.01662 39.5404 5.48976 41.9831 3.68411C44.4259 5.204 46.743 7.17002 49.6045 7.85327C54.5807 6.93997 59.124 4.23491 62.9625 1C69.0694 5.22495 76.0837 7.86723 83 10.4608C82.9651 11.1719 82.9442 11.8831 82.9232 12.6012C82.1764 12.7964 81.4297 12.9986 80.6968 13.2077C80.5573 13.6679 80.2781 14.5951 80.1385 15.0553C78.1005 15.1529 76.0626 15.2435 74.0246 15.3481C73.878 18.2275 73.7734 21.1068 73.7873 23.993C72.88 23.993 71.9727 23.993 71.0724 24C70.9118 21.1137 70.8141 18.2203 70.9886 15.3411C68.818 15.3481 66.6614 15.3272 64.5048 15.2993C64.5676 18.1368 64.5258 20.9743 64.449 23.8185C63.4789 23.7767 62.5227 23.7348 61.5665 23.686C61.5875 20.8904 61.5177 18.0947 61.385 15.2991C48.3478 15.5152 35.3105 15.4803 22.2798 15.3339C22.1682 18.2064 22.0356 21.0857 22.1263 23.9583C21.2399 23.9514 20.3536 23.9444 19.4812 23.9444C19.3067 21.079 19.1671 18.2066 19.3555 15.3414C17.3386 15.3902 15.3215 15.3971 13.3115 15.3762C13.0881 18.1789 12.9625 20.9955 12.9346 23.8125C11.9715 23.8613 11.0223 23.924 10.0731 23.9937C10.108 21.0795 10.0591 18.1653 9.95443 15.2584C6.70206 15.5024 3.42881 14.9168 1 12.6092C1 11.9329 1.00698 11.2636 1.01396 10.5943M5.91343 12.2675C10.2476 12.8113 14.617 12.4627 18.9721 12.3163C18.986 10.169 19 8.0287 18.9861 5.88135C14.5891 7.91712 10.0456 9.70888 5.91343 12.2675ZM22.0983 5.88833C22.0565 8.14019 22.0565 10.3851 22.0983 12.6371C25.1204 12.5395 28.1494 12.0724 30.9204 10.7965C28.1287 8.90716 25.0926 7.42219 22.0983 5.88833ZM54.9781 9.4021C54.3709 9.63216 54.022 10.0644 53.9452 10.6988C56.3111 11.9538 59.0191 12.2466 61.6433 12.5882C61.6852 10.3642 61.6922 8.14717 61.6713 5.93705C59.4519 7.1292 57.1767 8.18899 54.9781 9.4021ZM64.7213 5.82548C64.6445 8.04251 64.6445 10.2526 64.6934 12.4696C69.0764 12.393 73.466 12.5742 77.8425 12.1629C73.5014 9.96673 68.9579 8.21685 64.7213 5.82548ZM43.4551 8.28654C43.49 9.79945 43.5109 11.3054 43.5249 12.8182C46.0933 12.86 48.6616 12.8321 51.23 12.6299C48.8641 10.7894 46.1352 9.56931 43.4551 8.28654ZM32.7907 12.8252C35.4219 12.8531 38.053 12.8531 40.6912 12.8531C40.6842 11.3681 40.6982 9.88303 40.7331 8.40504C37.9623 9.64599 35.3102 11.131 32.7907 12.8252Z"
                  fill="#1F1F1E"
                />
                <path
                  d="M1.01483 10.5929C7.52656 7.54623 14.6032 5.44768 20.3754 1.04173C24.549 4.32545 29.4417 6.44487 34.2919 8.51556C36.9231 7.01662 39.5404 5.48976 41.9831 3.68411C44.4259 5.204 46.743 7.17002 49.6045 7.85327C54.5807 6.93997 59.124 4.23491 62.9625 1C69.0694 5.22495 76.0837 7.86723 83 10.4608C82.9651 11.1719 82.9442 11.8831 82.9232 12.6012C82.1764 12.7964 81.4297 12.9986 80.6968 13.2077C80.5573 13.6679 80.2781 14.5951 80.1385 15.0553C78.1005 15.1529 76.0626 15.2435 74.0246 15.3481C73.878 18.2275 73.7734 21.1068 73.7873 23.993C72.88 23.993 71.9727 23.993 71.0724 24C70.9118 21.1137 70.8141 18.2203 70.9886 15.3411C68.818 15.3481 66.6614 15.3272 64.5048 15.2993C64.5676 18.1368 64.5258 20.9743 64.449 23.8185C63.4789 23.7767 62.5227 23.7348 61.5665 23.686C61.5875 20.8904 61.5177 18.0947 61.385 15.2991C48.3478 15.5152 35.3105 15.4803 22.2798 15.3339C22.1682 18.2063 22.0356 21.0857 22.1263 23.9583C21.2399 23.9514 20.3536 23.9444 19.4812 23.9444C19.3067 21.079 19.1671 18.2066 19.3555 15.3414C17.3386 15.3902 15.3215 15.3971 13.3115 15.3762C13.0881 18.1789 12.9625 20.9955 12.9346 23.8125C11.9715 23.8613 11.0223 23.924 10.0731 23.9937C10.108 21.0795 10.0591 18.1653 9.95443 15.2584C6.70206 15.5024 3.42881 14.9168 1 12.6092C1 11.9329 1.00698 11.2636 1.01396 10.5943M5.91343 12.2675C10.2476 12.8113 14.617 12.4627 18.9721 12.3163C18.986 10.169 19 8.0287 18.9861 5.88135C14.5891 7.91712 10.0456 9.70888 5.91343 12.2675ZM22.0983 5.88833C22.0565 8.14019 22.0565 10.3851 22.0983 12.6371C25.1204 12.5395 28.1494 12.0724 30.9204 10.7965C28.1287 8.90716 25.0926 7.42219 22.0983 5.88833ZM54.9781 9.4021C54.3709 9.63216 54.022 10.0644 53.9452 10.6988C56.3111 11.9538 59.0191 12.2466 61.6433 12.5882C61.6852 10.3642 61.6922 8.14717 61.6713 5.93705C59.4519 7.1292 57.1767 8.18899 54.9781 9.4021ZM64.7213 5.82548C64.6445 8.04251 64.6445 10.2526 64.6934 12.4696C69.0764 12.393 73.466 12.5742 77.8425 12.1629C73.5014 9.96673 68.9579 8.21685 64.7213 5.82548ZM43.4551 8.28654C43.49 9.79945 43.5109 11.3054 43.5249 12.8182C46.0933 12.86 48.6616 12.8321 51.23 12.6299C48.8641 10.7894 46.1352 9.56931 43.4551 8.28654ZM32.7907 12.8252C35.4219 12.8531 38.053 12.8531 40.6912 12.8531C40.6843 11.3681 40.6982 9.88303 40.7331 8.40504C37.9623 9.64599 35.3102 11.131 32.7907 12.8252Z"
                  stroke="#EFEFEE"
                  strokeWidth="0.451286"
                  strokeMiterlimit="10"
                />
              </svg>
              <h2>Sensible Choice for family trip</h2>
              <h3>{characteristicSlider[counter].title}</h3>
            </div>
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            onSlideChange={(e: { activeIndex: number }) =>
              setCounter(e.activeIndex)
            }
            modules={[Navigation, Pagination]}
          >
            {characteristicSlider.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="cars-swiper">
                  <img className="car-one" src={item.imgURL} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="gradient-info">
            <div className="gradient-description">
              <p>{characteristicSlider[counter].description}</p>
              <div className="description-btn">
                <h3>LEARN MORE</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M8 0L8 8" stroke="#1F1F1E" strokeWidth="1.6" />
                  <path d="M8 8L8 16" stroke="#1F1F1E" strokeWidth="1.6" />
                  <path d="M0 8H16" stroke="#1F1F1E" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
            <div className="stat-content">
              <div className="gradient-stats">
                <div className="statistics">
                  <div className="stat">
                    <h3>{characteristicSlider[counter].reserve}</h3>
                    <p>KM</p>
                  </div>
                  <h4>Range</h4>
                </div>
              </div>
              <div className="gradient-stats">
                <div className="statistics">
                  <div className="stat">
                    <h3>{characteristicSlider[counter].power}</h3>
                    <p>KM/H</p>
                  </div>
                  <h4>Power</h4>
                </div>
              </div>
              <div className="gradient-stats">
                <div className="statistics">
                  <div className="stat">
                    <h3>{characteristicSlider[counter].traction}</h3>
                    <p>S</p>
                  </div>
                  <h4>Acceleration</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasonable;
