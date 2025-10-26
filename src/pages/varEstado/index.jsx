import './index.scss';
import { useState } from 'react';
import { tratarNumero } from '../../utils/conversao';


export default function VarEstado() {

    const [contador, setContador] = useState(0);
    const [tituloS2, setTituloS2] = useState('Ola');
    const [tituloS3, setTituloS3] = useState('Escolha um item.');
    const [marcouOpcaoS4, setmarcouOpcaoS4] = useState(true);
    const [tituloS5, setTituloS5] = useState('Ola');
    const [descricaoS5, setdescricaoS5] = useState('Ola');

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);

    function aumentar() {
        if (contador < 10) {
            setContador(contador + 1);
        }
    }

    function diminuir() {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    function somar() {
        let soma = tratarNumero(num1) + tratarNumero(num2);
        setRes(soma.toFixed(1));
    }

    return (
        <div className='pagina-varestado pagina'>
            <header className='cabecalho'>
                <h1>ReactJS | Variável de Estado</h1>
            </header>
            <div className='secao calculadora'>
                <h1>Calculadora</h1>
                <div className='entrada'>
                    <input type="text" value={num1} onChange={e => setNum1(e.target.value)} />
                    <input type="text" value={num2} onChange={e => setNum2(e.target.value)} />
                    <div>=</div>
                    <div className='res'>{res}</div>
                </div>
                <button onClick={somar}>Somar</button>
            </div>
            <div className='secao'>
                <h1>Contador</h1>
                <div className='cont'>
                    <button onClick={aumentar}>+</button>
                    {contador}
                    <button onClick={diminuir}>-</button>
                </div>
            </div>
            <div className='secao'>
                <h1>{tituloS2}</h1>
                <input type="text" value={tituloS2} onChange={e => setTituloS2(e.target.value)} />
            </div>
            <div className='secao'>
                <h1>{tituloS3}</h1>
                <select onChange={e => setTituloS3(e.target.value)}>
                    <option>Selecione</option>
                    <option>JavaScript</option>
                    <option>HTML/CSS</option>
                    <option>ReactJS</option>
                </select>
            </div>
            <div className='secao'>
                <h1>Programar é legal? {marcouOpcaoS4 ? 'Sim' : 'Não'}</h1>
                <input type="checkbox" checked={marcouOpcaoS4} onChange={e => setmarcouOpcaoS4(e.target.checked)} /> Programar é legal?
            </div>
            <div className='secao'>
                <h1>{tituloS5}</h1>
                <input type="text" value={descricaoS5} onChange={e => setdescricaoS5(e.target.value)} />
                <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
            </div>
        </div>
    )
}