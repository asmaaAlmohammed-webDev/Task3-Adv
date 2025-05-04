import TitleComponent from "../TitleComponent/TitleComponent";
import "./SecNavgate.css";
import { NavigateData } from "./../../data/NavigateData";
import NavigateCard from "../NavigateCard/NavigateCard";

const SecNavgate = () => {
  return (
    <section className="navigate-sec m-bottom px-50">
      <TitleComponent
        desc1="Explore More"
        title="Navigate through our Pages"
        desc2="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />

      <div className="navigate-container ">
        {NavigateData?.map((item, index) => (
          <NavigateCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SecNavgate;
