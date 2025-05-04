import "./TitleComponent.css";
const TitleComponent = ({ desc1, title, desc2 }) => {
  return (
    <div className="title-component" >
      <div>
        <p>{desc1}</p>
      </div>
      <h3 className="title">{title}</h3>
      <p className="desc">{desc2}</p>
    </div>
  );
};

export default TitleComponent;
