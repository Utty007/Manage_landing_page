import Style from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={props.className ? props.className : Style.btn}>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
};

export default Button;
