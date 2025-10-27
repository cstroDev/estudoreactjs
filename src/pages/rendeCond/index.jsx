import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import CartaoFilme from '../../components/cartaoFilme';

export default function RenderizacaoCondicional() {

    const [exibirBiscoitoSorte, setExibirBiscoitoSorte] = useState(false);

    const [nomeFilme, setNomeFilme] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [urlFilme, setUrlFilme] = useState('');
    const [estreiaFilme, setEstreiaFilme] = useState('');
    const [destaqueFilme, setDestaqueFilme] = useState(false);
    const [listaFilmes, setListaFilmes] = useState([]);

    function abrirFecharBiscoito() {
        setExibirBiscoitoSorte(!exibirBiscoitoSorte)
    }

    function adicionarFilme() {

        if (nomeFilme == '' || classificacao == '' || urlFilme == '') {
            alert("Preencha todos os campos.");
            return;
        }

        let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacao,
            url: urlFilme,
            estreia: estreiaFilme,
            destaque: destaqueFilme
        }

        setListaFilmes([...listaFilmes, novoFilme]);
        setNomeFilme('');
        setClassificacao('');
        setUrlFilme('');
    }

    return (
        <div className='pagina-rende-cond pagina'>
            <Cabecalho titulo="ReactJS | Renderização Condicional" />
            <div className='secao'>
                <h1>Biscoito da Sorte</h1>
                <button onClick={abrirFecharBiscoito}>
                    {exibirBiscoitoSorte == true ? 'Fechar' : 'Abrir'}
                </button>
                {exibirBiscoitoSorte == true &&
                    <p className='msg-biscoito'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui quam dignissimos provident quod quaerat velit repellendus labore ab consectetur, illum molestiae molestias non adipisci aspernatur? Fugiat ducimus accusamus ex?
                    </p>
                }
            </div>
            <div className='secao filme'>
                <h1>Catalogo de Filmes</h1>
                <div className='entrada'>
                    <input type="text" placeholder='Nome do Filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)} />
                    <input type="text" placeholder='Classificação' value={classificacao} onChange={e => setClassificacao(e.target.value)} />
                    <input type="text" placeholder='URL da capa' value={urlFilme} onChange={e => setUrlFilme(e.target.value)} />
                    <input type="text" placeholder='Estreia do FIlme' value={estreiaFilme} onChange={e => setEstreiaFilme(e.target.value)} />
                    <div>
                        <input type="checkbox" checked={destaqueFilme} onChange={e => setDestaqueFilme(e.target.checked)} />
                        <label> Destaque</label>
                    </div>
                    <button onClick={adicionarFilme}>Adicionar Filme</button>
                </div>
                <div className='lista'>
                    {listaFilmes.map(item =>
                        <CartaoFilme item={item} />
                    )}
                </div>
            </div>
        </div>
    )
}