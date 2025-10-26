export function calcularTotalIngresso(qtdIngresso, meioIng, cupom) {
    let total = 0;
    if (meioIng == true) {
        total = qtdIngresso * 15.00;
    } else {
        total = qtdIngresso * 30.00;
    }

    if (cupom == 'QUERO50') {
        let desconto = total / 2;
        total = total - desconto;
    }

    return total;
}