import ManageLogo from "../../images/logo.svg";
import Style from "./Header.module.css";
import Button from "../UI/Button";
import Hamburger from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";
import { useState } from "react";
import ModalOverlay from "../UI/modalOverlay";
import MobileMenu from "../UI/MobileMenu";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(true);

  const menuToggleHandler = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <>
      {!menuToggle && <ModalOverlay onClick={menuToggleHandler} />}
      {!menuToggle && <MobileMenu />}
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
        <div className={Style.bttn}>
          <Button>Get Started</Button>
        </div>
        <div className={Style.openModal} onClick={menuToggleHandler}>
          <img src={menuToggle ? Hamburger : closeIcon} />
          {/* <img src={} /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
