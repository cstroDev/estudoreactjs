
import './index.scss';

import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className="pagina-app pagina">
      <header className='cabecalho'>
        <h1>Estudo ReactJs</h1>
      </header>
      <section className='secao'>
        <h1>Estudando ReactJS</h1>
        <ul>
          <li>
            <Link to={'/contato'}>Ir para contato</Link>
          </li>
          <li>
            <Link to={'/eventos'}>Ir para eventos</Link>
          </li>
          <li>
            <Link to={'/varestado'}>Ir para Variável de Estado</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

