import profile from "./assets/profile-pic.jpeg";

const skills = ["Javascript", "React.js", "SQL", "Node.js", "Azure", "AWS", ""];

function SideBar() {
  return (
    <div className="sidebar">
      <img src={profile} />
      <div className="container"></div>
    </div>
  );
}

function Skill({ children }) {
  return <span className="skill">{children}</span>;
}

export default SideBar;
