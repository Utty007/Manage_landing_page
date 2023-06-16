import React, { useState, useEffect } from "react";
import Carousel from "../../UI/Carousel-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = ({ testimonials }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setActiveSlide(0);
  }, [testimonials]);

  return (
    <Slider slidesToShow={3} dots={false} arrows={false} infinite={true}>
      {testimonials.map((testimonial, index) => (
        <Carousel
          key={index}
          name={testimonial.name}
          comment={testimonial.comment}
          image={testimonial.image}
        />
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
