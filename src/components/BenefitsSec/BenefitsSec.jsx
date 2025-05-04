import "./BenefitsSec.css";
import BenefitsCard from "../BenefitsCard/BenefitsCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import { BenefitsData } from "./../../data/BenefitsData";
const BenefitsSec = () => {
  return (
    <section className="benefits-sec px-50 m-bottom ">
      <TitleComponent
        desc1="Children Deserve Bright Future"
        title="Our Benefits"
        desc2="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />

      <div className="cards ">
        {BenefitsData?.map((item, index) => (
          <BenefitsCard
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

export default BenefitsSec;
