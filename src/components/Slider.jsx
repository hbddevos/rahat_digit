import Slider from "react-slick";
import "./../../src/slick.css";
import "./../../src/slick-theme.css";

const images = [
  "./images/afro1.jpg",
  "./images/afro2.jpg",
  "./images/afro3.jpg",
  "./images/afro4.jpg",
];

const AutoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="">
        {images.map((src, index) => (
          <div key={index} className="h-[635px] rounded-lg">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full rounded-lg object-cover overflow-hidden"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoCarousel;
