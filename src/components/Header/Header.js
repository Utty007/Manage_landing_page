import ManageLogo from "../../images/logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={ManageLogo} />
      </div>
      <div className="links">
        <span>Pricing</span>
        <span>Products</span>
        <span>About us</span>
        <span>Careers</span>
        <span>Community</span>
      </div>
      <div className="btn">
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
