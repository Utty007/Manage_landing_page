import Style from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={props.style}
      className={Style.ModalOverlay}
    >
      {props.children}
    </div>
  );
};

export default ModalOverlay;
