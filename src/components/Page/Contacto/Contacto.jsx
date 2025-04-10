import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

const MyContacto = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form, 
      import.meta.env.VITE_EMAILJS_API_KEY
    )
    
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true); 
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Mycontacto">
      <h2>Contacto</h2>
      {submitted ? (
        <div className="thank-you-message">¡Gracias por contactarme! Te responderé pronto.</div>
      ) : (
        <form className="Placa" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="text" name="last_name" placeholder="Apellido" required />
          <input type="email" name="email" placeholder="Correo electrónico" required />
          <textarea name="message" placeholder="Escribe tu mensaje" required></textarea>
          <input type="submit" value="Enviar" />
        </form>
      )}
    </div>
  );
};

export default MyContacto;


