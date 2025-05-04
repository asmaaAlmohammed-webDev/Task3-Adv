import "./TeamMembersCard.css";
import img1 from "/assets/imgs/About/Icon(5).svg";
const TeamMembersCard = ({ name, qualification, desc, img }) => {
  return (
    <div className="team-members-card" data-aos="flip-up">
      <div>
        <div className="name-img-person">
          <img src={img} alt="img-person" />
          <h5 className="name">{name}</h5>
        </div>
        <div className="icon">
          <img src={img1} alt="message-img" />
        </div>
      </div>
      <div className="info-person">
        <h4 className="qualification">{qualification}</h4>
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
};

export default TeamMembersCard;
