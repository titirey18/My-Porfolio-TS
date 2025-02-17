import "./Miskills.css";

const MiSkills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <ul>
        <li>HTML  <img src="public/assets/html.png" alt="HTML"/></li>
        <li>CSS <img src="public/assets/css.png" alt="CSS" /></li>
        <li>JavaScript <img src="public/assets/javascript.png" alt="JavaScript" /></li>
        <li>Visual Studio <img src="public/assets/visual.png" alt="Visual Studio" /></li>
        <li>React <img src="public/assets/react.jpg" alt="React" /></li>
        <li>Node.js <img src="public/assets/nodejs.png" alt="Node.js" /></li>
        <li>Github <img src="public/assets/git.png" alt="Github" /></li>
      </ul>
    </div>
  )
}

export default MiSkills;