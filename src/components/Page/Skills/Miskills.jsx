import "./Miskills.css";

const MiSkills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <ul>
      <li>HTML <img src="/assets/html.png" alt="HTML"/></li>
        <li>CSS <img src="/assets/css.png" alt="CSS" /></li>
        <li>JavaScript <img src="/assets/javascript.png" alt="JavaScript" /></li>
        <li>Visual Studio <img src="/assets/visual.png" alt="Visual Studio" /></li>
        <li>React <img src="/assets/react.jpg" alt="React" /></li>
        <li>Node.js <img src="/assets/nodejs.png" alt="Node.js" /></li>
        <li>Github <img src="/assets/git.png" alt="Github" /></li>
      </ul>
    </div>
  )
}

export default MiSkills;