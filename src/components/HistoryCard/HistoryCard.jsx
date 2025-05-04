// import "./HistoryCard.css";
// import img from "/assets/imgs/About/AbstractDesign(1).png";
// const HistoryCard = ({ year, title, desc }) => {
//   return (
//     <div className="history-card">
//       <div>
//         <div className="line"></div>
//         <div className="history">
//           <img src={img} alt="abstract-img" />
//           <p className="year">{year}</p>
//         </div>
//       </div>
//       <div className="content">
//         <h5 className="title">{title}</h5>
//         <p className="desc">{desc}</p>
//       </div>
//     </div>
//   );
// };

// export default HistoryCard;
import "./HistoryCard.css";
import img from "/assets/imgs/About/AbstractDesign(1).png";

const HistoryCard = ({ year, title, desc, isLast }) => {
  return (
    <div className={`history-card ${isLast ? "no-before" : ""}`}>
      <div>
        <div className="line"></div>
        <div className="history">
          <img src={img} alt="abstract-img" />
          <p className="year">{year}</p>
        </div>
      </div>
      <div className="content">
        <h5 className="title">{title}</h5>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default HistoryCard;