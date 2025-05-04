import { StudentsData } from "../../data/StudentsData";
import StudentsCard from "../StudentsCard/StudentsCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./StudentsSec.css";

const StudentsSec = () => {
  return (
    <section className="students-sec px-50 m-bottom">
      <TitleComponent
        desc1="Our Features"
        title="What Students Learn"
        desc2="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
      />

      <div className="cards ">
        {StudentsData?.map((item, index) => (
          <StudentsCard
            key={index}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default StudentsSec;
