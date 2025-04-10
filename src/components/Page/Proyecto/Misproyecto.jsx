import React from "react";
import "./Misproyecto.css"

const Image = ({src, title, alt}) => {
return <img src={src} title={title} alt={alt}/>
}

const TextElement  = ({tag, children }) => {
  const Tag = tag
  return <Tag>{children }</Tag>
}

const Linkbutton = ({text, href}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className="btn">{text}</button>
    </a>
  )
}

const Article = ({img, imgTitle, imgAlt, name, description, link, link2}) => {
  return (
    <article className="Vista">
      <Image src={img} alt={imgAlt} title={imgTitle} />
      <div className="info">
      <TextElement  tag="h4">{name}</TextElement >
      <TextElement  tag="p">{description}</TextElement >
      <div className="DivBtn">
      <Linkbutton text="Ver Proyecto" href={link} />
      <Linkbutton text="Ver Github  ⇾" href={link2} />
      </div>
      </div>
    </article>
  )
}

const MyProjects = () => {
  return (
    <section id="Projects">
      <TextElement tag="h2">Mis Proyectos</TextElement>
      <div className="divFlex">
        <Article 
          img="/assets/proyecto1.png"
          imgTitle="Proyecto1"
          imgAlt="Proyecto1"
          name="Formulario de Datos personales"
          description="Formulario para ingresar y validar datos personales de los usuarios, con funcionalidades de validación para asegurar la correcta captura de información."
          link="https://formulario2-ochre.vercel.app/"
          link2="https://github.com/titirey18/Formulario2"
        />
        <Article 
          img="/assets/proyecto2.png"
          imgTitle="Proyecto2"
          imgAlt="Proyecto2"
          name="Games-hub"
          description="Tres tipos de juegos clasicos para pasar un buen rato 🕹️😁."
          link="https://game-hub-dfcz.vercel.app/"
          link2="https://github.com/titirey18/game-hub"
        />
      </div>
    </section>
  );
};

export default MyProjects;