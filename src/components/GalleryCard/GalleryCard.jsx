import "./GalleryCard.css";
import { useState, useEffect } from "react";
import rowImg1 from "/assets/imgs/Vector(Stroke).svg";
import rowImg2 from "/assets/imgs/Vector(Stroke)(1).svg";
import { GalleryCardData } from "../../data/GalleryCardData";
const GalleryCard = ({ title, desc, images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
  
        if (width <= 768) {
          setCardsToShow(1);
        } else if (width <= 1300) {
          setCardsToShow(2);
        } else {
          setCardsToShow(4);
        }
      }
    });
  
    observer.observe(document.documentElement);
  
    return () => {
      observer.disconnect();
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev < images.length - cardsToShow ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : images.length - cardsToShow
    );
  };

  const getVisibleCards = () => {
    return images.slice(
      currentIndex,
      currentIndex + cardsToShow
    );
  };
  return (
    <div className="gallery-card  ">
      <div className="imgs">
        {getVisibleCards()?.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>
      <div className="content">
        <div>
          <h5 className="title">{title}</h5>
          <div className="buttons">
            <button onClick={prevSlide} className=" prev-btn">
              <img src={rowImg1} alt="Previous" />
            </button>
            <button onClick={nextSlide} className=" next-btn">
              <img src={rowImg2} alt="Next" />
            </button>
          </div>
        </div>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
