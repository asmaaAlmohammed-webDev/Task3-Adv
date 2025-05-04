// import { useState } from "react";
// import { GalleryCardData } from "../../data/GalleryCardData";
// import GalleryCard from "../GalleryCard/GalleryCard";
// import TitleComponent from "../TitleComponent/TitleComponent";
// import "./GallerySec.css";

// const GallerySec = () => {
//   const [toggleState, setToggleState] = useState(1);
//   const galleryTabs = [
//     { id: 1, label: "All", data: GalleryCardData },
//     { id: 2, label: "Classrooms", data: GalleryCardData[0] },
//     { id: 3, label: "Library", data: GalleryCardData[1] },
//     { id: 4, label: "Science Lab", data: GalleryCardData[2] },
//     { id: 5, label: "Computer Lab", data: GalleryCardData[3] },
//     { id: 6, label: "Garden and Nature Area", data: GalleryCardData[4] },
//   ];
//   const toggleTab = (index) => {
//     setToggleState(index);
//   };
//   return (
//     <section className="gallery-sec px-50 m-bottom">
//       <TitleComponent
//         desc1="Our Gallery"
//         title="Our Rooms Gallery"
//         desc2="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
//       />

//       <div className="tabs">
//         {galleryTabs.map((tab) => (
//           <button
//             key={tab.id}
//             className={`tab ${toggleState === tab.id ? "active-tab" : ""}`}
//             onClick={() => toggleTab(tab.id)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//       <div className="cards">
//         {(toggleState === 1
//           ? GalleryCardData
//           : [galleryTabs.find((tab) => tab.id === toggleState)?.data]
//         ).map((item, index) => (
//           <GalleryCard
//             key={index}
//             title={item.title}
//             desc={item.desc}
//             images={item.images}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GallerySec;
import { useState } from "react";
import { GalleryCardData } from "../../data/GalleryCardData";
import GalleryCard from "../GalleryCard/GalleryCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./GallerySec.css";

const GallerySec = () => {
  const [toggleState, setToggleState] = useState(1);

  const galleryTabs = [
    { id: 1, label: "All", data: GalleryCardData },
    { id: 2, label: "Classrooms", data: GalleryCardData[0] },
    { id: 3, label: "Library", data: GalleryCardData[1] },
    { id: 4, label: "Science Lab", data: GalleryCardData[2] },
    { id: 5, label: "Computer Lab", data: GalleryCardData[3] },
    { id: 6, label: "Garden and Nature Area", data: GalleryCardData[4] },
  ];

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const activeTab = galleryTabs.find((tab) => tab.id === toggleState);
  const activeData = toggleState === 1 ? GalleryCardData : [activeTab?.data];

  return (
    <section className="gallery-sec px-50 m-bottom">
      <TitleComponent
        desc1="Our Gallery"
        title="Our Rooms Gallery"
        desc2="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
      />
      <div className="tabs-wrapper">
        <div className="tabs">
          {galleryTabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${toggleState === tab.id ? "active-tab" : ""}`}
              onClick={() => toggleTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="cards">
        {activeData.map((item, index) => (
          <GalleryCard
            key={index}
            title={item.title}
            desc={item.desc}
            images={item.images}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySec;