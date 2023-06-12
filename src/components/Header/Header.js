import ManageLogo from "../../images/logo.svg";
import Style from "./Header.module.css";
import Button from "../UI/Button";

const Header = () => {
  return (
    <div className={Style.Header}>
      <div className="logo">
        <img src={ManageLogo} />
      </div>
      <div className={Style.links}>
        <span>Pricing</span>
        <span>Products</span>
        <span>About us</span>
        <span>Careers</span>
        <span>Community</span>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
