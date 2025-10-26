import './index.scss';

export default function Eventos() {

    function clicou() {
        alert("O usuario acabou de clicar");
    }

    function movimentouMouse() {
        alert("O usuario acaba de movimentar o mouse");
    }

    function alterouValor(e) {
        let novoValor = e.target.value; // string
        alert("O usuario acabou de alterar o valor do input/select para: " + novoValor);
    }

    function alterouCheck(e) {
        let novoValor = e.target.checked; // boolean
        alert("O usuario acabou de alterar o valor do input[checkbox/radio] para: " + novoValor);
    }


    return (
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1>ReactJs | Eventos </h1>
            </header>
            <section className='secao'>
                <h1>Entendendo eventos</h1>
                <p onMouseMove={movimentouMouse}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia iusto quos modi aspernatur iure itaque consequatur voluptates adipisci rerum harum rem beatae molestiae quibusdam quisquam repellendus animi officiis necessitatibus!</p>
                <input onChange={alterouValor} type="text" placeholder='Digite aqui' />
                <textarea onChange={alterouValor} placeholder='Digite aqui'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo mollitia quos a nobis saepe sint molestiae, labore, beatae expedita quia voluptas non animi reprehenderit eius! Dolorem nisi illum voluptas itaque.
                </textarea>
                <select onChange={alterouValor}>
                    <option>Selecione</option>
                    <option> Item A </option>
                    <option> Item B </option>
                </select>
                <div className='grupo'>
                    <input type="checkbox" onChange={alterouCheck} /> Opção 1
                    <input type="checkbox" /> Opção 2
                </div>
                <div className='grupo'>
                    <div>
                        <input type="radio" name='gpo' onChange={alterouCheck} /> Opção 1
                    </div>
                    <div>
                        <input type="radio" name='gpo' /> Opção 2
                    </div>
                </div>
                <button onClick={clicou}> Clique aqui </button>

            </section>
        </div>
    )
}