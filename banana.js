function ex1() {

    let valor = Number(prompt("Digite o valor da compra:"));
    let vip = prompt("O cliente é VIP? (sim/não)");
    let cupom = prompt("Digite o cupom:");
    let parcelas = Number(prompt("Digite a quantidade de parcelas:"));

    let valorFinal = valor;

    if (vip === "sim") {
        valorFinal = valorFinal * 0.80;
    } else if (valor > 150) {
        valorFinal = valorFinal * 0.90;
    }

    if (cupom === "PROMO10") {
        valorFinal = valorFinal * 0.90;
    }

    valorFinal = parcelas > 3 ? valorFinal * 1.02 : valorFinal;

    console.log("Valor final da compra: R$ " + valorFinal.toFixed(2));
}