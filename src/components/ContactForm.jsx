import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/contac.css';

const ContactForm = () => {
  return (
    <div className="py-20">
      <h1 className="logo mb-5">Contactame</h1>
      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3>Contact us</h3>
          <form action="">
            <p>
              <label>Nombre y Apellido</label>
              <input type="text" name="fullname" />
            </p>
            <p>
              <label>Correo</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Numero de telefono</label>
              <input type="tel" name="phone" />
            </p>
            <p className="block">
              <label>Mensaje</label>
              <textarea name="message" rows="3"></textarea>
            </p>
            <p className="block">
              <button>Enviar</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4>Mas informacion</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              Venezuela
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              +58 424-235-67-33
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              Dorianmatos75@gmail.com
            </li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
          <p>Company.com</p>
          <div className="social-icons">
            <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://wa.me/numero_telefono" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.instagram.com/tu_usuario/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/tu_usuario" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
