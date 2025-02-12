import "./Experiencia.css"

const MiExperiencia = () => {
  return (
    <div className="experiencia-estudios">
      <h1>Mi Experiencia y Estudios</h1>
      <div className="Estudios">
        <h2>Estudios</h2>
        <ul>
          <li>Full Stack Developer Bootcamp, 2024 (<span>
          España</span>)</li>
          <li>Bachillerato en Sciencia Economicas, 2019 (<span>
          Argentina</span>)</li>
        </ul>
        <div className="Experiencias">
          <h2>Experiencia</h2>
          <ul>
            <li>Camamero en Restautant Kortxo, 2022-2024 (<span>
              España</span>)</li>
            <li>Dependiente en panaderia Bakery, 2021-2022 (<span>
              Argentina</span>)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MiExperiencia;