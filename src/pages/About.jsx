import AwardsRecognitionsSec from "../components/AwardsRecognitionsSec/AwardsRecognitionsSec";
import Hero2Component from "../components/Hero2Component/Hero2Component";
import HistorySec from "../components/HistorySec/HistorySec";
import MissionVisionSec from "../components/MissionVisionSec/MissionVisionSec";
import TeamMemberSec from "../components/TeamMemberSec/TeamMemberSec";

const About = () => {
  return (
    <main>
      <Hero2Component
        title="Welcome to Little Learners Academy"
        desc="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
        desc1="Overview"
      />
      <MissionVisionSec />
      <AwardsRecognitionsSec />
      <HistorySec/>
      <TeamMemberSec />
    </main>
  );
};

export default About;
