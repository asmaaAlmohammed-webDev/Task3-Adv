import "./AwardsRecognitionsSec.css";
import { useState, useEffect } from "react";
import BenefitsCard from "../BenefitsCard/BenefitsCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import { AwardsRecognitionsData } from "./../../data/AwardsRecognitionsData";
import rowImg1 from "/assets/imgs/Vector(Stroke).svg";
import rowImg2 from "/assets/imgs/Vector(Stroke)(1).svg";
const AwardsRecognitionsSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setCardsToShow(entry.contentRect.width <= 1100 ? 1 : 3);
      }
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev < AwardsRecognitionsData.length - cardsToShow ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : AwardsRecognitionsData.length - cardsToShow
    );
  };

  const getVisibleCards = () => {
    return AwardsRecognitionsData.slice(
      currentIndex,
      currentIndex + cardsToShow
    );
  };
  return (
    <section className="awards-recognitions-sec m-bottom px-50">
      <TitleComponent
        desc1="Our Achievements"
        title="Our Awards and Recognitions"
        desc2="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />

      <div className="awards-recognitions-cards ">
        {getVisibleCards()?.map((item, index) => (
          <BenefitsCard
            key={index}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
        <div className="moving">
          <div className="link">
            <a href="#">8 More Awards</a>
          </div>
          <div className="buttons">
            <button onClick={prevSlide} className=" prev-btn">
              <img src={rowImg1} alt="Previous" />
            </button>
            <button onClick={nextSlide} className=" next-btn">
              <img src={rowImg2} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognitionsSec;
