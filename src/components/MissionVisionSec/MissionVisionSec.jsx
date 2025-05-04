import TitleComponent from "../TitleComponent/TitleComponent";
import "./MissionVisionSec.css";
import { MissionandVisionData } from "../../data/MissionandVisionData";
import MissionVisionCard from "../MissionVisionCard/MissionVisionCard";

const MissionVisionSec = () => {
  return (
    <section className="mission-vision-sec px-50  m-bottom ">
      <TitleComponent
        desc1="Mission & Visions"
        title="Our Mission & Visions"
        desc2="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
      />
      <div className="row-cards">
        {MissionandVisionData?.map((item, index) => (
          <MissionVisionCard
            key={index}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default MissionVisionSec;
