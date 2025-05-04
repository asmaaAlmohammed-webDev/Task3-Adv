import "./AccordionCard.css";
const AccordionCard = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`accordion-item ${isOpen ? "active" : ""}`}
      style={{
        backgroundColor: isOpen
          ? "var(--white-color)"
          : "var(--orange95-color)",
      }}
    >
      <div
        className={`accordion-title ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <h3>{item.title}</h3>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </div>

      <div
        className={`accordion-content ${isOpen ? "active" : ""}`}
        style={{
          maxHeight: isOpen ? "251px" : "0",
          padding: isOpen ? "15px" : "0 40px",
          borderTop: isOpen ? "2px solid var(--grey15-color)" : "none",
        }}
      >
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default AccordionCard;