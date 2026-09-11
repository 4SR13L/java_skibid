
function ex2() {

    let a = Number(prompt("Digite o primeiro valor:"));
    let b = Number(prompt("Digite o segundo valor:"));

    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.log("Erro: digite valores numéricos válidos.");
        return;
    }

    let soma = a + b;
    let diferenca = a - b;
    let produto = a * b;

    let divisao;
    let resto;


    if (b === 0) {
        divisao = "Erro: divisão por zero.";
        resto = "Erro: divisão por zero.";
    } else {
        divisao = a / b;
        resto = a % b;
    }

    console.log("Soma:", soma);
    console.log("Diferença:", diferenca);
    console.log("Produto:", produto);
    console.log("Divisão:", divisao);
    console.log("Resto:", resto);


    if (a > b) {
        console.log("Maior:", a);
    } else if (b > a) {
        console.log("Maior:", b);
    } else {
        console.log("Os valores são iguais.");
    }

    console.log("typeof soma:", typeof soma);
    console.log("typeof diferença:", typeof diferenca);
    console.log("typeof produto:", typeof produto);
    console.log("typeof divisão:", typeof divisao);
    console.log("typeof resto:", typeof resto);
}


function ex3() {

    let num = Number(prompt("Digite um número inteiro:"));

    if (!Number.isInteger(num)) {
        console.log("Erro: digite um número inteiro válido.");
        return;
    }

    if (num > 0) {
        console.log("O número é positivo.");
    } else if (num < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero.");
    }


    let parOuImpar = Math.abs(num) % 2 === 0 ? "Par" : "Ímpar";
    console.log("O número é:", parOuImpar);


    let primo = true;

    if (num <= 1) {
        primo = false;
    } else if (num === 2) {
        primo = true;
    } else if (num % 2 === 0) {
        primo = false;
    } else {
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        console.log("O número é primo.");
    } else {
        console.log("O número não é primo.");
    }
}


function ex4() {

    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let nota3 = Number(prompt("Digite a terceira nota:"));

    if (
        Number.isNaN(nota1) ||
        Number.isNaN(nota2) ||
        Number.isNaN(nota3)
    ) {
        console.log("Erro: digite notas válidas.");
        return;
    }

    let peso1 = 2;
    let peso2 = 3;
    let peso3 = 5;

    let media =
        (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) /
        (peso1 + peso2 + peso3);

    console.log("Média:", media.toFixed(2));

    if (media >= 7) {
        console.log("Resultado: Aprovado.");
    } else if (media >= 5) {

        console.log("Resultado: Recuperação.");

        let exame = Number(prompt("Digite a nota do exame:"));

        if (Number.isNaN(exame)) {
            console.log("Exame inválido. Operação cancelada.");
            return;
        }

        let novaMedia = (media + exame) / 2;

        console.log("Nova média:", novaMedia.toFixed(2));

        if (novaMedia >= 6) {
            console.log("Resultado final: Aprovado.");
        } else {
            console.log("Resultado final: Reprovado.");
        }

    } else {
        console.log("Resultado: Reprovado.");
    }
}


function ex5() {

    let preco = Number(prompt("Digite o preço do produto:"));
    let vip = prompt("O cliente é VIP? (sim/não)");
    let cupom = prompt("Digite o cupom:");
    let parcelas = Number(prompt("Digite o número de parcelas:"));

    if (Number.isNaN(preco) || Number.isNaN(parcelas)) {
        console.log("Erro: digite valores numéricos válidos.");
        return;
    }

    let total = preco;

    if (vip === "sim") {
        total = total * 0.80;
    } else if (preco > 150) {
        total = total * 0.90;
    }

    if (cupom === "PROMO10") {
        total = total * 0.90;
    }

    if (parcelas >= 1 && parcelas <= 3) {
        console.log("Sem juros.");
    } else if (parcelas > 3) {
        total = total * 1.02;
        console.log("Acréscimo de 2% aplicado.");
    } else {
        console.log("Número de parcelas inválido.");
        return;
    }

    let imposto = total * 0.12;
    let totalComImposto = total + imposto;

    let valorParcela = totalComImposto / parcelas;

    console.log("Preço final sem imposto: R$", total.toFixed(2));
    console.log("Imposto (12%): R$", imposto.toFixed(2));
    console.log("Total com imposto: R$", totalComImposto.toFixed(2));
    console.log("Valor por parcela: R$", valorParcela.toFixed(2));
    console.log("typeof totalComImposto:", typeof totalComImposto);
}
