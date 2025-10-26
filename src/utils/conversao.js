export function tratarNumero(valor) {
    return Number(valor.replaceAll(',', '.'));
}

export function tratarNumeroResposta(valor) {
    return Number(valor.replaceAll('.', ','));
}