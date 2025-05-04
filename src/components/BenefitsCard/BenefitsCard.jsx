import "./BenefitsCard.css";
const BenefitsCard = ({ title, desc, img }) => {
  return (
    <div className="benefits-card" data-aos="fade-right">
      <h4 className="title">{title}</h4>
      <p className="desc">{desc}</p>
      <div className="icon">
        <img src={img} alt="logo-img" />
      </div>
    </div>
  );
};

export default BenefitsCard;
