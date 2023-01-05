import "./contact.css";

import { ImWhatsapp } from "react-icons/im";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="container contact__container">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below</p>
      <div className="contact__icons">
        <a href="mailto:welcome@desiwonder.com">
          <FiMail className="contact__icon" />
        </a>
        <a
          href="https://wa.me/+85264449181"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImWhatsapp className="contact__icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
