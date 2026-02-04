import profile from "./assets/profile-pic.jpeg";

const skills = [
  "Javascript",
  "React.js",
  "SQL",
  "Node.js",
  "Azure Cloud Services",
  "Azure Pipelines",
  "AWS",
  "C#",
  ".Net Framework",
  "Vite",
  "CSS",
  "HTML5",
  "NOSQL",
  "MongoDB",
  "CosmoDB",
  "Agile",
];

function SideBar() {
  return (
    <div className="sidebar">
      <img src={profile} />
      <div>
        <h3
          style={{
            textDecoration: "underline",
            fontSize: "3vw",
            color: "white",
          }}
        >
          Habilidades
        </h3>
        <ul
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "10px",
            marginBlockStart: "0px",
            paddingInlineStart: "0px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          {skills.map((skill) => (
            <Skill>{skill}</Skill>
          ))}
        </ul>
      </div>
      <div>
        <h3
          style={{
            textDecoration: "underline",
            fontSize: "3vw",
            color: "white",
          }}
        >
          Redes Sociales
        </h3>
      </div>
    </div>
  );
}

function Skill({ children }) {
  return <span className="skill">{children}</span>;
}

export default SideBar;
