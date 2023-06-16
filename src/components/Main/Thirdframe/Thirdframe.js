import TestimonialSlider from "./Testimonialslider";
import avatarOne from "../../../images/avatar-ali.png";
import avatarTwo from "../../../images/avatar-anisha.png";
import avatarThree from "../../../images/avatar-richard.png";
import avatarFour from "../../../images/avatar-shanai.png";
import Styles from "./Thirdframe.module.css";
import Button from "../../UI/Button";

const Thirdframe = () => {
  const testimonies = [
    {
      name: "Anisha Li",
      comment:
        "Manage has supercharged our team's workflow. They help maintain visibility on larger milestones at all times keeps everyone motivated. ",
      image: avatarTwo,
    },
    {
      name: "Ali Bravo",
      comment:
        "We have been able to cancel so many other subscriptions since using Manage.There is no more cross-channel confusion and everyone is more focused.",
      image: avatarOne,
    },
    {
      name: "Richard Watts",
      comment:
        "Manage allows us to provide structure and helps keep us organized and focused.I can't stop recommending them to everyone I talk to.",
      image: avatarThree,
    },
    {
      name: "Shannai Gough",
      comment:
        "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in sync without being intrusive.",
      image: avatarFour,
    },
  ];
  return (
    <div className={Styles.Thirdframe}>
      <h1>What they've Said</h1>
      <TestimonialSlider testimonials={testimonies} />
      <Button>Get Started</Button>
    </div>
  );
};

export default Thirdframe;
