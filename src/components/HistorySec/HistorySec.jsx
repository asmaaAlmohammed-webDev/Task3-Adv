import TitleComponent from "../TitleComponent/TitleComponent";
import "./HistorySec.css";
import { HistoryData } from "../../data/HistoryData";
import HistoryCard from "../HistoryCard/HistoryCard";

const HistorySec = () => {
  return (
    <section className="history-sec m-bottom px-50">
      <TitleComponent
        desc1="Our Progressive Journey"
        title="Our History"
        desc2="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
      />
      <div className="cards">
        {HistoryData.map((item, index) => (
          <HistoryCard
            key={index}
            year={item.year}
            title={item.title}
            desc={item.desc}
            isLast={index === HistoryData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default HistorySec;