import "./NavigateCard.css";
import lineImg from "/assets/imgs/Container.png";
import rowImg from "/assets/imgs/Vector(Stroke)(1).svg";

const NavigateCard = ({item}) => {
  return (
    <div className="navigate-card" data-aos="fade-up" data-aos-duration="500">
      <h3 className="title">{item.title}</h3>
      <img src={lineImg} alt="line-img" />
      <p className="desc">{item.description}</p>
      <div className="more">
        <a href="#">
          Learn More
          <img src={rowImg} alt="Vector-img" />
        </a>
      </div>
    </div>
  );
};

export default NavigateCard;
