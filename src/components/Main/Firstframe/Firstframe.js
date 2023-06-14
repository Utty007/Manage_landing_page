import Styles from "./Firstframe.module.css";
import IllustrationImg from "../../../images/illustration-intro.svg";
import Button from "../../UI/Button";

const Firstframe = () => {
  return (
    <div className={Styles.Frame1}>
      <div className={Styles.Text}>
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it easy for software teams to plan day to day tasks while
          keeping the larger team goals in view.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className={Styles.Image}>
        <img src={IllustrationImg} />
      </div>
    </div>
  );
};

export default Firstframe;
