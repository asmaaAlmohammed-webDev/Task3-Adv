import GallerySec from "../components/GallerySec/GallerySec";
import Hero2Component from "../components/Hero2Component/Hero2Component";
import SpecailfeaturesSec from "../components/SpecailfeaturesSec/SpecailfeaturesSec";
import StudentsSec from "../components/StudentsSec/StudentsSec";

const Academics = () => {
  return (
    <main>
      <Hero2Component
        title="Nurturing Young Minds for Success"
        desc="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
        desc1="Academics"
      />
      <SpecailfeaturesSec />
      <StudentsSec />
      <GallerySec />
    </main>
  );
};

export default Academics;
