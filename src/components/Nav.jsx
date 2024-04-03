import {} from 'react';
import { Link } from 'react-router-dom';
import logoImagem from '../assets/img/logo.svg';
import '../css/estilo.css';

function Nav() {
  return (
    <>
      <header className="menu">
        <nav className="nav-menu">
          <div className='logo'>
            <img src={logoImagem} alt="Logo" />
          </div>
          <ul>
            <Link to="/" className="tlink">
              Home
            </Link>{' '}
            {''}
            <Link to="/sobre" className="tlink">
              Sobre
            </Link>
            <Link to="/Produto" className="tlink">
              Produto
            </Link>
            <Link to="/contato" className="tlink">
              Contato
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
