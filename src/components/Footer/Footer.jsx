import { scrolltosection } from "../Header/HeaderNav"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <p>Diseñada y Construida Por <a onClick={() => scrolltosection("Sobre_mi")}>Thiago Soubielle</a></p>
    </footer>
  )
}

export default Footer