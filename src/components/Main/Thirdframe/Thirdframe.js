import TestimonialSlider from "./Testimonialslider";

const Thirdframe = () => {
  const testimonies = [
    { name: "Kayode Uthman", text: "Lorem Ipsum dolor" },
    {
      name: "Shefiu Alao",
      text: "Fuji extended play",
    },
  ];
  return (
    <div>
      <TestimonialSlider testimonials={testimonies} />
    </div>
  );
};

export default Thirdframe;
