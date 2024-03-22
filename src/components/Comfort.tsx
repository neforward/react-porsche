import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { useEffect, useRef, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IVideos {
  videoURL: string;
  title: string;
  thumbnail: string;
}
const Comfort = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const player = useRef<Array<HTMLVideoElement | null>>([]);

  const videos: IVideos[] = [
    {
      videoURL:
        "https://files.porsche.com/filestore/video/multimedia/none/992-carrera-design-intro-loop/video-mp4/74e6764d-80a1-11ea-80c9-005056bbdc38/porsche-video.mp4",
      title: "911",
      thumbnail:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM86lhQ58DGgfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
    },
    {
      videoURL: "",
      title: "Cayenne",
      thumbnail:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8kV60KwwhQ58SmgfN9JI0DyQPGT89qKfIjMaRDrx5VL8uJWRaVWCAxFH2WY2v%25P3TexLeuqXWIJZggf%25oWjrHwo0nq8J",
    },
    {
      videoURL:
        "https://files.porsche.com/filestore/video/multimedia/none/modelseries-macan3-models-intro/video-mp4/8dff9586-3193-11ec-80e2-005056bbdc38/porsche-video.mp4",
      title: "Macan",
      thumbnail:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMIrlhQ5kcEgfNkoL0Dy5qAT89qMfIjMaMDrx5VL8uJWRaVWCAxFH2VC2b%25P3TexLeuqXWIJCpNVuhmxS1uKvT9d",
    },
    {
      videoURL: "",
      title: "Panamera",
      thumbnail:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8kV60KwwhQ5kHlgfNc0M0DydMAT89re4ikIu8tBCr60lZouhmqSv6gyYY4W0ByP3avIynw1Wt8Eeqtw3UiscWwABWnJelZataRHS1fVV2Yq80mcPITvbd3M85kMsIPBuLs76vShQXDPTDdyZM23wwAkdLCPzNdepXHa",
    },
    {
      videoURL: "./ending.mp4",
      title: "Porsche",
      thumbnail:
        "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2023/Products/911-S-T/Titel.jpg/jcr:content/Titel.jpg",
    },
  ];
  
  const handleClick = (i: number) => {
    const video = player.current[i];
    if (video?.paused) {
      video.play();
    } else if (video) {
      video.pause();
    }
  };

  useEffect(() => {}, [thumbsSwiper]);

  return (
    <section className="comfort">
      <div className="comfort-container">
        <div className="comfort-content">
          <h3>EXPERIENCE COMFORT</h3>
          <Swiper
            loop={true}
            modules={[FreeMode, Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2"
          >
            {videos.map((video, i) => (
              <SwiperSlide key={i}>
                <video
                  ref={(el) => (player.current[i] = el)}
                  onClick={() => handleClick(i)}
                  src={video.videoURL}
                  poster={video.thumbnail}
                  muted
                ></video>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="comfort-navigation">
            <nav className="comfort-nav">
              <Swiper
                onSwiper={(swiper: null | any) => setThumbsSwiper(swiper)}
                slidesPerView={5}
                freeMode={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {videos.map((video, i) => (
                  <SwiperSlide key={i}>
                    <span>{video.title}</span>
                  </SwiperSlide>
                ))}
              </Swiper>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comfort;
