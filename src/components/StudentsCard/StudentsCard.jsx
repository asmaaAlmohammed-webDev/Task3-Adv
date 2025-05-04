import "./StudentsCard.css";

const StudentsCard = ({ title, desc, img }) => {
  return (
    <div className="student-card">
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
