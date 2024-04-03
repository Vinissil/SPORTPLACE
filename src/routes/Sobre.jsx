import {} from 'react';
import '../css/estilo.css';
import imagemLoja from '../assets/img/loja.svg'

function Sobre() {
  return (
    <>
      <section className="sobre">
        <img src={imagemLoja} alt="" />
        <div className='texto'>
            <h1>Sobre</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam numquam expedita cumque iure, praesentium recusandae, dolorem voluptatem amet dolore laborum voluptatum minima dolorum vitae corrupti non quasi dolores unde illum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iste atque maxime velit illum magni quasi? Consequuntur expedita reprehenderit minus, officia culpa quis, voluptas quisquam eligendi in dolore distinctio sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque minus eligendi voluptate ad ipsam quod, incidunt animi ullam dolor deserunt at a hic dolorem asperiores aperiam, eius repellat molestias.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti doloribus temporibus esse ducimus accusantium accusamus, perspiciatis itaque in facilis iusto non id repellendus eos maiores asperiores voluptatem quibusdam quidem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti doloribus temporibus esse ducimus accusantium accusamus, perspiciatis itaque in facilis iusto non id repellendus eos maiores asperiores voluptatem quibusdam quidem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti doloribus temporibus esse ducimus accusantium accusamus, perspiciatis itaque in facilis iusto non id repellendus eos maiores asperiores voluptatem quibusdam quidem?
        </p>
        </div>

      </section>
    </>
  );
}
export default Sobre;
