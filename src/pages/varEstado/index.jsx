import './index.scss';
import { use, useState } from 'react';
import { tratarNumero } from '../../utils/conversao';
import { calcularTotalIngresso } from '../../services/ingresso';
import Cabecalho from '../../components/cabecalho';


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

    const [qtdIngresso, setQtdIngresso] = useState(0);
    const [meioIng, setMeioIng] = useState(0);
    const [cupom, setCupom] = useState('');
    const [totalIng, setTotalIng] = useState(0);

    const [novaMeta, setNovaMeta] = useState('');
    const [listaMetas, setListaMetas] = useState([]);
    const [editando, setEditando] = useState(-1);

    const [plano, setPlano] = useState('');
    const [situacao, setSituacao] = useState('');
    const [cor, setCor] = useState('');
    const [listaPlanos, setListaPlanos] = useState([]);

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

    function calcularIngresso() {
        let total = calcularTotalIngresso(qtdIngresso, meioIng, cupom);

        setTotalIng(total)
    }

    function adicionarMeta() {
        if (novaMeta != '') {

            if (editando == -1) {
                setListaMetas([...listaMetas, novaMeta]);
                setNovaMeta('')
            } else {
                listaMetas[editando] = novaMeta;
                setListaMetas([...listaMetas]);
                setNovaMeta('');
                setEditando(-1);
            }

        }
    }

    function teclaApertada(e) {
        if (e.key == 'Enter') {
            adicionarMeta();
        }
    }

    function removerMeta(pos) {
        listaMetas.splice(pos, 1);
        setListaMetas([...listaMetas]);
    }

    function alterarNovaMeta(pos) {
        setNovaMeta(listaMetas[pos]);
        setEditando(pos);
    }

    function adicionarPlano() {
        let novoPlano = {
            titulo: plano,
            tempo: situacao,
            tema: cor
        }

        setListaPlanos([...listaPlanos, novoPlano]);
        setPlano('');
        setSituacao('');
        setCor('');
    }

    return (
        <div className='pagina-varestado pagina'>
            <Cabecalho titulo="ReactJS | Variável de Estado" />
            <div className='secao planos'>
                <h1>Meus Planos atuais</h1>
                <div className='entrada'>
                    <input type="text" placeholder='Meu plano aqui' value={plano} onChange={e => setPlano(e.target.value)} />
                    <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={e => setSituacao(e.target.value)} />
                    <input type="text" placeholder='Cor de identificação' value={cor} onChange={e => setCor(e.target.value)} />
                    <button onClick={adicionarPlano}>Adicionar Plano</button>
                </div>
                <div className='lista'>
                    {listaPlanos.map((item, pos) =>
                        <div className='plano' key={pos}>
                            <div className='cor' style={{ backgroundColor: item.tema }}>&nbsp;</div>
                            <div>
                                <h1>{item.titulo}</h1>
                                <h2>{item.tempo}</h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='secao metas'>
                <h1>Metas para os próximos 5 anos</h1>
                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)} />
                    <button onClick={adicionarMeta}>Adicionar</button>
                </div>

                <ul>
                    {listaMetas.map((item, pos) =>
                        <li key={pos}>
                            <i class="fa-solid fa-pen-to-square" onClick={() => alterarNovaMeta(pos)}></i> &nbsp;
                            <i class="fa-solid fa-trash" onClick={() => removerMeta(pos)}></i> &nbsp;
                            {item}
                        </li>
                    )}
                </ul>
            </div>
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
            <div className='secao ingresso'>
                <h1>Venda de ingresso</h1>
                <div className='entrada'>
                    <div>
                        <label>Quantidade</label>
                        <input type='text' value={qtdIngresso} onChange={e => setQtdIngresso(e.target.value)} />
                    </div>
                    <div>
                        <label>Meia entrada</label>
                        <input type='checkbox' checked={meioIng} onChange={e => setMeioIng(e.target.checked)} />
                    </div>
                    <div>
                        <label>Cupom</label>
                        <input type='text' value={cupom} onChange={e => setCupom(e.target.value)} />
                    </div>
                    <div>
                        <label>&nbsp;</label>
                        <button onClick={calcularIngresso}>Calcular</button>
                    </div>
                    <hr />
                    <div>
                        O total é R$ {totalIng}
                    </div>
                </div>
            </div>
            <div className='secao'>
                <h1>{tituloS2}</h1>
                <input type="text" value={tituloS2} onChange={e => setTituloS2(e.target.value)} />
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