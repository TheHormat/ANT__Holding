import Scaled from "../images/scaled.jpg";
import "../styles/Contact.css";
import React, { useEffect } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="contact">
      <div
        data-aos="fade-right"
        className="leftSide"
        style={{ backgroundImage: `url(${Scaled})` }}
      ></div>
      <div data-aos="fade-left" className="rightSide">
        <h1> Əlaqə</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Adınız</label>
          <input name="name" placeholder="Adınızı daxil edin..." type="text" />
          <label htmlFor="number">Telefonunuz</label>
          <input
            name="number"
            placeholder="Telefon nömrənizi daxil edin..."
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Emailinizi daxil edin..."
            type="email"
          />
          <label htmlFor="message">Mesajınız</label>
          <textarea
            rows="6"
            placeholder="Mesajınızı daxil edin..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Göndər</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
