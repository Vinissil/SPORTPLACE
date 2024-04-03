import {} from 'react';
import '../css/estilo.css';

const Produto = () => {
  return (
    <>
    <div className="product-page">
      <div className="category sports">
        <div className="category-title"><a href="produtos.jsx">Esportes</a></div>
      </div>
      <div className="category feminine">
        <div className="category-title"><a href="produtos.jsx">Feminina</a></div>
      </div>
      <div className="category masculine">
        <div className="category-title"><a href="produtos.jsx">Masculino</a></div>
      </div>
      <div className="product-list">
      <div className="product card">
        <div className="product-image blue-shoe"></div>
        <div className="product-info">
          <p>Nome</p>
          <p>R$ 99,99</p>
        </div>
      </div>
      <div className="product card">
        <div className="product-image green-shoe"></div>
        <div className="product-info">
          <p>Nome</p>
          <p>R$ 99,99</p>
        </div>
      </div>
      <div className="product card">
        <div className="product-image orange-shoe"></div>
        <div className="product-info">
          <p>Nome</p>
          <p>R$ 99,99</p>
        </div>
      </div>
      <div className="product card">
        <div className="product-image green-shoe"></div>
        <div className="product-info">
          <p>Nome</p>
          <p>R$ 99,99</p>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default Produto;
