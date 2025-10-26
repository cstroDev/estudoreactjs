import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Contador from '../../components/contador';

export default function Componentes() {
    


    return (
        <div className='pagina-comps pagina'>
            <Cabecalho titulo="ReactJS | Componentes" />
            <div className='secao'>
                <h1>Transformando o contador em componente</h1>
                <Contador titulo="Passos" inicio="0" fim="20" />
                <Contador titulo="Erros" />
            </div>
        </div>
    )
}