import Style from "./Carousel-card.module.css";

const Carousel = (props) => {
  return (
    <div className={Style.Carousel}>
      <img src={props.image} className={Style.image} />
      <h1>{props.name}</h1>
      <p>{props.comment}</p>
    </div>
  );
};

export default Carousel;
