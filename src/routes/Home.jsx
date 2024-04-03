import {} from 'react';
import '../css/estilo.css';

function Home() {
  return (
    <>
          <div className="home-container">
      <div className="slider">
        <div className="slide active">
          <div className="runner-image"></div>
        </div>
      </div>
      <div className="subscription-box">
        <p>RECEBA NOSSAS PROMOÇÕES</p>
        <input type="text" placeholder="Digite seu Email" />
        <button>Receber</button>
      </div>
      <div className="brands">
        <div className="brand nike"></div>
      </div>
    </div>
    </>
  );
}

export default Home;
