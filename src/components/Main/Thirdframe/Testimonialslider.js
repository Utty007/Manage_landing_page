import React, { useState, useEffect } from "react";
import { Carousel, Slider } from "react-slick";

const TestimonialSlider = ({ testimonials }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setActiveSlide(0);
  }, [testimonials]);

  return (
    <Carousel dots={false} arrows={false} infinite={true}>
      {testimonials.map((testimonial, index) => (
        <Slider key={index}>
          <div className="testimonial">
            <h4>{testimonial.name}</h4>
            <p>{testimonial.text}</p>
          </div>
        </Slider>
      ))}
    </Carousel>
  );
};

export default TestimonialSlider;
