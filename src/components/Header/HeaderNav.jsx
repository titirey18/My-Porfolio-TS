import "./HeaderNav.css"


export const scrolltosection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
const Header = () => {
  return (
    <header>
       <a onClick={() => scrolltosection("Sobre_mi")} className="Siglas">
              TS
            </a>
      <nav>
        <ul>
          <li>
            <a onClick={() => scrolltosection("MiExperiencia")}>
            Estudios
             </a>
          </li>
          <li>
          <a onClick={() => scrolltosection("MiSkills")}>
             Skills
             </a>
          </li>
          <li>
          <a onClick={() => scrolltosection("MiProyectos")}>
             Proyectos
             </a>
          </li>
          <li>
          <a onClick={() => scrolltosection("contacto")}>
             Contacto
             </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header