import { useState, useEffect } from "react";
import CardTestmonails from "../CardTestmonails/CardTestmonails";
import TitleComponent from "../TitleComponent/TitleComponent";
import { TestmonailData } from "../../data/TestmonailData";
import "./TestmonailsSec.css";
import rowImg1 from "/assets/imgs/Vector(Stroke).svg";
import rowImg2 from "/assets/imgs/Vector(Stroke)(1).svg";

const TestmonailsSec = () => {
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
      prev < TestmonailData.length - cardsToShow ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : TestmonailData.length - cardsToShow
    );
  };

  const getVisibleCards = () => {
    return TestmonailData.slice(currentIndex, currentIndex + cardsToShow);
  };

  return (
    <section className="testmonails-sec m-bottom px-50">
      <TitleComponent
        desc1="Their Happy Words 🤗"
        title="Our Testimonials"
        desc2="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <div className="testimonial-slider m-bottom">
        <button onClick={prevSlide} className=" prev-btn">
          <img src={rowImg1} alt="Previous" />
        </button>
        {getVisibleCards().map((testimonial, index) => (
          <CardTestmonails
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            image={testimonial.image}
          />
        ))}
        <button onClick={nextSlide} className="next-btn">
          <img src={rowImg2} alt="Next" />
        </button>
        <div className="buttons-wrap">
            <button onClick={prevSlide} className="prev-btn2">
              <img src={rowImg1} alt="Previous" />
            </button>

            <button onClick={nextSlide} className="next-btn2">
              <img src={rowImg2} alt="Next" />
            </button>
          </div>
      </div>
    </section>
  );
};

export default TestmonailsSec;
