// // import React from 'react'
// // import '../CSS/Skill.css'
// // const Skill = () => {
// //   return (
// //     <div className='combo'>Skill</div>
// //   )
// // }

// // export default Skill

// // import React from "react";
// // import "../CSS/Skill.css";
// // import { skill } from "../Components/Data";
// // import { CircularProgressbar } from "react-circular-progressbar";
// // import "react-circular-progressbar/dist/styles.css";
// // const Skill = () => {
// //   return (
// //     <section id="Skill" className="skill">
// //         <h3 className="skill-subtitle skill-center">Skill</h3>
// //       <div className="skill-container skill-grid">
// //         {skill.map(({ title, percentage }, index) => {
// //           return (
// //             <div className="skill-box" key={index}>
// //               <div className="skill-circle">
// //                 <CircularProgressbar
// //                   strokeWidth={7.5}
// //                   text={`${percentage}`}
// //                   value={percentage}
// //                 />
// //               </div>
// //               <h3 className="skill-title">{title}</h3>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Skill;

// import React, { useContext } from "react";
// import "../CSS/Skill.css";
// import { skill } from "../Components/Data";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { ThemeContext } from "./ThemeContext";
// const Skill = () => {
//   const { theme } = useContext(ThemeContext);
//   return (
//     <section id="Skill" className="skill">
//       <h3 className={`skill-subtitle ${theme}-mode`}>Skill</h3>
//       <div className="skill-container">
//         {skill.map(({ title, percentage }, index) => {
//           return (
//             <div className="skill-box" key={index}>
//               <div className="skill-circle">
//                 <CircularProgressbar
//                   strokeWidth={7.5}
//                   text={`${percentage}% `}
//                   value={percentage}
//                 />
//               </div>
//               <h3 className={`skill-title ${theme}-mode`}>{title}</h3>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Skill;
import React, { useState, useContext } from "react";
import "../CSS/Skill.css";
import { skill } from "../Components/Data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ThemeContext } from "./ThemeContext";
const Skill = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const filteredSkills = skill.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );
  return (
    <section id="Skill" className="skill">
      <h3 className={`skill-subtitle ${theme}-mode`}>Skill</h3>
      <div className="filter-buttons">
        {["All", "Frontend", "Backend", "Data Connectivity"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="skill-container">
        {filteredSkills.map(({ title, percentage }, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-circle">
              <CircularProgressbar
                strokeWidth={7.5}
                text={`${percentage}%`}
                value={percentage}
              />
            </div>
            <h3 className={`skill-title ${theme}-mode`}>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
