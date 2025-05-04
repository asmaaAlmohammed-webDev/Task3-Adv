import "./CardTestmonails.css";
const CardTestmonails = ({ name, text, image }) => {
  return (
    <div className="testimonial-card" data-aos="fade-left">
      <div className="testimonial-image">
        <img src={image} alt="person-img" />
      </div>
      <p className="testimonial-author">{name}</p>

      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <img key={i} src="/assets/imgs/Shape.svg" alt="star-img" />
        ))}
      </div>

      <p className="testimonial-text">{text}</p>
    </div>
  );
};

export default CardTestmonails;
