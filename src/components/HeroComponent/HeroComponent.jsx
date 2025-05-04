import "./HeroComponent.css";
import { HeroData } from "./../../data/HeroData";
const HeroComponent = () => {
  return (
    <section
      className="hero px-50 m-bottom "
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <img src={HeroData[0].img} alt="hero-img" className="m-bottom" />
      <div className="content">
        <p>{HeroData[0].desc1}</p>
        <h2 className="title">
          {HeroData[0].title}
          <span> {HeroData[0].span}</span>
        </h2>
        <p className="desc">{HeroData[0].desc2}</p>
        <div className="rates">
          {HeroData[0].count.map((item, index) => (
            <div className="count" key={index}>
              <span className="num">{item.num}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
