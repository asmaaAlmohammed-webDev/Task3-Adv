import { TeamMembersData } from "../../data/TeamMembersData";
import TeamMembersCard from "../TeamMembersCard/TeamMembersCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./TeamMemberSec.css";
const TeamMemberSec = () => {
    return (
      <section className="team-members-sec px-50 m-bottom">
        <TitleComponent
          desc1="Our Teachers With Experties"
          title="Our Team Members"
          desc2="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
        />

        <div className="cards ">
          {TeamMembersData?.map((item, index) => (
            <TeamMembersCard
              key={index}
              name={item.name}
              qualification={item.qualification}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </section>
    );
};

export default TeamMemberSec;
