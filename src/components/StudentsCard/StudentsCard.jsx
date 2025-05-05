import "./StudentsCard.css";

const StudentsCard = ({ title, desc, img }) => {
  return (
    <div className="student-card" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="color-div"></div>
      <div className="content">
        <h5 className="title">{title}</h5>
        <p className="desc">{desc}</p>
      </div>
      <img src={img} alt="student-img" />
    </div>
  );
};

export default StudentsCard;
