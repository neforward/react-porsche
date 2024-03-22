import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
interface IListReviews {
  id: number;
  imgURL: string;
  review: string;
  name: string;
  job: string;
}
const Customers = () => {
  const reviewsList: IListReviews[] = [
    {
      id: 0,
      imgURL:
        "https://lastfm.freetls.fastly.net/i/u/ar0/f606dfb0981b05e7fc2c7f30422c1c35.jpg",
      review:
        "Owning a Porsche 911 gives me the peace of mind that comes with knowing I'm driving a vehicle engineered with precision and reliability. The build quality is top-notch, and the attention to detail in the mechanical components reflects Porsche's commitment to delivering a car that not only performs well but stands the test of time.",
      name: "Frank Ocean",
      job: "Singer",
    },
    {
      id: 1,
      imgURL:
        "https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds",
      review:
        "The Porsche 911 is not just a beautiful car  it's a beast on the road. The exceptional performance and precision handling provide an exhilarating driving experience. The responsive steering and powerful acceleration make every journey a thrilling adventure. It's not just a car  it's a driving experience like no other.",
      name: "Kanye West",
      job: "Rapper & Producer",
    },
    {
      id: 2,
      imgURL:
        "https://s3.amazonaws.com/gather.fandalism.com/artist-ww-E9261DAE9DBA392553926D2CEF0C0362.jpg",
      review:
        "Owning a Porsche 911 gives me the peace of mind that comes with knowing I'm driving a vehicle engineered with precision and reliability. The build quality is top-notch, and the attention to detail in the mechanical components reflects Porsche's commitment to delivering a car that not only performs well but stands the test of time.",
      name: "André 3000",
      job: "Rapper & Singer",
    },
    {
      id: 3,
      imgURL:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDErglWU2D6wOPX7kvflbT4Kp45AXuWf7AhRw6XF7_yP_33q-s",
      review:
        "Stepping inside the Porsche 911 feels like entering a luxurious cockpit. The high-quality materials, comfortable seats, and intuitive controls create a sophisticated interior. The integration of cutting-edge technology, from the infotainment system to driver-assistance features, enhances both convenience and safety, ensuring a well-rounded driving experience.",
      name: "Drake",
      job: "Rapper & Singer",
    },
    {
      id: 4,
      imgURL:
        "https://i1.sndcdn.com/artworks-Mhvbh39dnOcsgSQ1-3SP2dQ-t500x500.jpg",
      review:
        "Beyond the performance and features, owning a Porsche 911 is about being part of an exclusive community. The brand's legacy and prestige add a unique value to the ownership experience. The sense of exclusivity and the camaraderie among fellow Porsche enthusiasts make owning a 911 more than just having a car – it's about being part of a passionate and distinguished lifestyle.",
      name: "Playboi Carti",
      job: "Rapper & Singer",
    },
    {
      id: 5,
      imgURL:
        "https://wallpapers-clan.com/wp-content/uploads/2022/09/lil-uzi-vert-pfp-19.jpg",
      review:
        "As a proud owner of a Porsche 911, I am enamored by its sleek and timeless design. The aerodynamic curves and iconic silhouette make it a true head-turner on the road. The attention to detail in craftsmanship is evident, reflecting Porsche's commitment to delivering not just a car, but a piece of automotive art.",
      name: "Lil Uzi Vert",
      job: "Rapper",
    },
  ];
  return (
    <section className="clients">
      <div className="container">
        <div className="clients-content">
          <div className="clients-title">
            <h2>Our Clients Reviews</h2>
          </div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            slidesPerView={2.5}
            modules={[Pagination]}
            className="clients__slider"
          >
            {}
            {reviewsList.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="review">
                  <div className="profile">
                    <div className="profile-img">
                      <img src={item.imgURL} alt="" />
                    </div>
                    <div className="profile-name">
                      <h2>{item.name}</h2>
                      <h6>{item.job}</h6>
                    </div>
                  </div>
                  <div className="review-text">
                    <p>"{item.review}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="responsive-item"
          >
            {reviewsList.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="review">
                  <div className="profile">
                    <div className="profile-img">
                      <img src={item.imgURL} alt="" />
                    </div>
                    <div className="profile-name">
                      <h2>{item.name}</h2>
                      <h6>{item.job}</h6>
                    </div>
                  </div>
                  <div className="review-text">
                    <p>"{item.review}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Customers;
