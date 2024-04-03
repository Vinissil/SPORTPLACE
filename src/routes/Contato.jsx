import {} from 'react';
import '../css/estilo.css';
import Whatsapp from '../assets/img/whatsapp 1.svg'
import Instagram from '../assets/img/instagram 1.svg'
import Facebook from '../assets/img/facebook 1.svg'

function Contato() {
  return (
    <>
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <p>SportPlace@esportplace.com</p>
          <p>Avenida Leon Jurn, 5028<br />Brasil, São Paulo, SP</p>
          <div className="social-links">
            <a href=""><img src={Whatsapp} alt="" /></a>
            <a href=""><img src={Instagram} alt="" /></a>
            <a href=""><img src={Facebook} alt="" /></a>
          </div>
        </div>
        <div className="forma-container">
          <form className="contact-forma">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Como podemos ajudar?" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
export default Contato;
