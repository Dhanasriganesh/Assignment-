import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, SliderImageContainer, SliderImage } from "./Slider.styles";
import test from "../../Assets/Images/Test.png";

function AutoPlay() {
  const logos = [test, test, test, test, test];
  const customArrowStyle = {
    color: 'black', // Set the arrow color to black
    fontSize: '25px', // Set the arrow size to 30px
  };
  const settings = {
    infinite: true,
    dots: true, // Enable dots (bullets) navigation
    speed: 700,
    cssEase: "linear",
    slidesToShow: 1, // Adjust the default number of slides to show
    prevArrow: <CustomPrevArrow style={customArrowStyle} />,
    nextArrow: <CustomNextArrow style={customArrowStyle} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Adjust the number of slides to show for medium-sized screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust the number of slides to show for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Adjust the number of slides to show for even smaller screens
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <SliderImageContainer key={index}>
            <SliderImage src={logo} alt={`Logo ${index + 1}`} />
          </SliderImageContainer>
        ))}
      </Slider>
    </SliderContainer>
  );
}

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { onClick, style } = props;
  return (
    <div
      className="slick-prev"
      style={{ ...style, left: 10, zIndex: 999 }} // Adjust the position of the left arrow
      onClick={onClick}
    >
      Previous
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick, style } = props;
  return (
    <div
      className="slick-next"
      style={{ ...style, right: 10, zIndex: 999 }} // Adjust the position of the right arrow
      onClick={onClick}
    >
      Next
    </div>
  );
};

export default AutoPlay;
