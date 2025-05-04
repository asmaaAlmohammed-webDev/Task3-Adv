import "./MissionVisionCard.css";
const MissionVisionCard = ({title,desc,img}) => {
    return (
      <div className="mission-vision-card" data-aos="fade-up-left">
        <div>
          <h4 className="title">{title}</h4>
          <img src={img} alt="mission-vission-img" />
        </div>
        <p className="desc">{desc}</p>
      </div>
    );
};

export default MissionVisionCard;
