import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const SliderComponent = ({sliderImg,from}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div >
      <Slider {...settings}>
          {
            sliderImg.map(item=>{
         return  <div className={from === 'home' ? "h-[22rem] max-[1144px]:h-[22rem] max-[803px]:h-[15rem] max-[490px]:h-[14rem] max-[403px]:h-[11rem]" : "h-[fit-content]"} key={item.id}>
                  <img src={item.src} alt="img" />
                </div>
            })
          }
      </Slider>
    </div>
  );
}

export default SliderComponent