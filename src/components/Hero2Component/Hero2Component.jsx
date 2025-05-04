import "./Hero2Component.css";
import img from "/public/assets/imgs/About/AbstractDesign.png";
const Hero2Component = ({ title, desc, desc1 }) => {
  return (
    <section
      className="hero2 mx-50 m-bottom"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="left-side">
        <div className="desc1">
          <p>{desc1}</p>
        </div>
        <h2 className="title">{title}</h2>
      </div>
      <p className="desc">{desc}</p>
      <img src={img} alt="hero-img" />
    </section>
  );
};

export default Hero2Component;
