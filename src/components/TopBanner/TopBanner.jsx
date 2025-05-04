import "./TopBanner.css";
import img1 from "/assets/imgs/AbstractDesign(3).png";
import img2 from "/assets/imgs/AbstractDesign(2).png";
import img3 from "/assets/imgs/AbstractDesign.png";
import img4 from "/assets/imgs/AbstractDesign(1).png";
import img5 from "/assets/imgs/AbstractDesignn.png";
import img6 from "/assets/imgs/AbstractDesign(1-1).png";
import img7 from "/assets/imgs/AbstractDesign(2-2).png";
import img8 from "/assets/imgs/AbstractDesign(3-3).png";
const TopBanner = () => {
  return (
    <div
      className="TopBanner"
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <p>
        Admission is Open, Grap your seat now
        <img src="/assets/imgs/Vector(Stroke)(1).svg" alt="Vector(Stroke)(1)" />
      </p>
      <img src={img1} alt="AbstractDesign(3)" className="img1" />
      <img src={img2} alt="AbstractDesign(2)" className="img2" />
      <img src={img3} alt="AbstractDesign" className="img3" />
      <img src={img4} alt="AbstractDesign(1)" className="img4" />
      <img src={img5} alt="AbstractDesignn" className="img5" />
      <img src={img6} alt="AbstractDesign(1-1)" className="img6" />
      <img src={img7} alt="AbstractDesign(2-2)" className="img7" />
      <img src={img8} alt="AbstractDesign(3-3)" className="img8" />
    </div>
  );
};

export default TopBanner;
