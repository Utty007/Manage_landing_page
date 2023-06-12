import Style from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={Style.btn}>
      <button>{props.children}</button>
    </div>
  );
};

export default Button;
