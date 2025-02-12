import "./Contacto.css"

const MyContacto = () => {
  return (
    <div id="Mycontacto">
      <h2>Contacto</h2>
      <form className="Placa" action="thiagosoubielle2001@gmail.com" method="post" encType="text/plain">
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="text" name="last name" placeholder="Apellido" required />
        <input type="email" name="email" placeholder="Correo electrónico" required />
        <textarea name="message" placeholder="Escribe tu mensaje" required></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
} 

    export default MyContacto;

