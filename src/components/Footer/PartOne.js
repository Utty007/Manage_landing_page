import Style from "./PartOne.module.css";
import Button from "../UI/Button";
import bgImg1 from "../../images/bg-simplify-section-desktop.svg";

const PartOne = () => {
  return (
    <div className={Style.Part1}>
      <div className={Style.Inner}>
        <h1>
          Simplify how your team <br /> works today.
        </h1>
        <Button className={Style.Button}>Get Started</Button>
      </div>
    </div>
  );
};

export default PartOne;
