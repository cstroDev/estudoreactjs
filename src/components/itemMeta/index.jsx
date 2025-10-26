import './index.scss';

export default function ItemMeta(props) {
    return (
        <li className='comp-item-meta'>
            <i class="fa-solid fa-pen-to-square" onClick={() => props.alterarNovaMeta(pos)}></i> &nbsp;
            <i class="fa-solid fa-trash" onClick={() => props.removerMeta(pos)}></i> &nbsp;
            {props.item}
        </li>
    )
}