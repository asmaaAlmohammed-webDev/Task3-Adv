import "./AccordionSec.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import AccordionCard from "../AccordionCard/AccordionCard";
import { AccordionData } from "./../../data/AccordionData";
import { useState } from "react";
const AccordionSec = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(prevIndex =>prevIndex === index ? null : index);
  };
  return (
    <section className="accordion-sec px-50 m-bottom ">
      <TitleComponent
        desc1="Solutions For The Doubts"
        title="Frequently Asked Questions"
        desc2="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />

      <div className="accordion-container ">
        {AccordionData?.map((item, index) => (
          <AccordionCard
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default AccordionSec;
