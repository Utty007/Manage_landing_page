import Style from "./mobileMenu.module.css";

const MobileMenu = (props) => {
  return (
    <div className={Style.mobileMenu}>
      <span>
        <a>Pricing</a>
      </span>
      <span>
        <a>Products</a>
      </span>
      <span>
        <a>About us</a>
      </span>
      <span>
        <a>Careers</a>
      </span>
      <span>
        <a>Community</a>
      </span>
    </div>
  );
};

export default MobileMenu;
