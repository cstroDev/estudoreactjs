import './index.scss';

export default function ItemMeta(props) {
    return (
        <li className='comp-item-meta'>
            <i class="fa-solid fa-pen-to-square" onClick={() => props.alterarNovaMeta(props.pos)}></i> &nbsp;
            <i class="fa-solid fa-trash" onClick={() => props.removerMeta(props.pos)}></i> &nbsp;
            {props.item}
        </li>
    )
}