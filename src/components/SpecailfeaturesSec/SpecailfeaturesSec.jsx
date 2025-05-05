import "./SpecailfeaturesSec.css";
import BenefitsCard from "../BenefitsCard/BenefitsCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import { SpecailfeaturesData } from "./../../data/SpecailfeaturesData";
const SpecailfeaturesSec = () => {
    return (
        <section className="Specail-feauters-sec px-50 m-bottom ">
            <TitleComponent
                desc1="Our Special Features"
                title="Our Features"
                desc2="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            />

            <div className="cards ">
                {SpecailfeaturesData?.map((item, index) => (
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

export default SpecailfeaturesSec;
