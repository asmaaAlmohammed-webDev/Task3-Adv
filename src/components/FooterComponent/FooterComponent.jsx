import "./FooterComponent.css";
import logo from "/assets/imgs/Logo.svg";
import img1 from "/assets/imgs/Subtract.svg";
import img2 from "/assets/imgs/phone.svg";
import img3 from "/assets/imgs/location.svg";
import icon1 from "/assets/imgs/Icon(5).svg";
import icon2 from "/assets/imgs/location.svg";
import icon3 from "/assets/imgs/twitter.svg";
const FooterComponent = () => {
  return (
    <footer className="" data-aos="zoom-in-down" data-aos-duration="1500">
      <div className="row1">
        <div className="col1">
          <div className="logo">
            <img src={logo} alt="logo-img" />
            <p>
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className="infos">
            <div className="info">
              <div className="icon">
                <img src={img1} alt="logo-img" />
              </div>
              <p>hello@littlelearners.com</p>
            </div>
            <div className="info">
              <div className="icon">
                <img src={img2} alt="logo-img" />
              </div>
              <p>+91 91813 23 2309</p>
            </div>
            <div className="info">
              <div className="icon">
                <img src={img3} alt="logo-img" />
              </div>
              <p>Somewhere in the World</p>
            </div>
          </div>
        </div>
        <div className="col2 ">
          <div className="links">
            <h5>Home</h5>
            <a href="#">Features</a>
            <a href="#Our Testimonials">Our Testimonials</a>
            <a href="#FAQ">FAQ</a>
          </div>
          <div className="links">
            <h5>About Us</h5>
            <a href="#Our Mission">Our Mission</a>
            <a href="#Our Testimonials">Our Testimonials</a>
            <a href="#Our Vission">Our Vission</a>
            <a href="#Awards and Recognitions">Awards and Recognitions</a>
            <a href="#History">History</a>
            <a href="#Teachers">Teachers</a>
          </div>
        </div>
        <div className="col3 ">
          <div className="links">
            <h5>Academics</h5>
            <a href="#">Special Features</a>
            <a href="#">Gallery</a>
          </div>
          <div className="links">
            <h5>Contact Us</h5>
            <a href="#">Information</a>
            <a href="#">Map & Direction</a>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="policy">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="socail-icons">
          <div className="icon">
            <img src={icon1} alt="logo-img" />
          </div>
          <div className="icon">
            <img src={icon2} alt="logo-img" />
          </div>
          <div className="icon">
            <img src={icon3} alt="logo-img" />
          </div>
        </div>
      </div>
      <div className="row3">
        <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
