import BenefitsSec from "./../components/BenefitsSec/BenefitsSec";
import AccordionSec from "./../components/AccordionSec/AccordionSec";
import HeroComponent from "./../components/HeroComponent/HeroComponent";
import SecNavgate from "./../components/SecNavgate/SecNavgate";
import TestmonailsSec from "./../components/TestmonailsSec/TestmonailsSec";

const Home = () => {
  return (
    <main className="">
      <HeroComponent />
      <BenefitsSec />
      <TestmonailsSec />
      <AccordionSec />
      <SecNavgate />
    </main>
  );
};

export default Home;
