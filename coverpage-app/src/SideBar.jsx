import profile from "./assets/profile-pic.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

const interests = [
  "Deportes",
  "IOT",
  "Tecnologia",
  "AI",
  "Peliculas",
  "Entretenimiento",
  "Musica",
  "VideoJuegos",
  "Naturaleza",
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
        <ul className="network-list">
          <li>
            <a
              href="https://github.com/jroma96"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jose-roma-918b26195/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
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
          Intereses
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
          {interests.map((skill) => (
            <Skill>{skill}</Skill>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Skill({ children }) {
  return <span className="skill">{children}</span>;
}

export default SideBar;
