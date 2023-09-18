function calcularMedia() {
    var nome = prompt("Digite o nome do aluno:");
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
    var nota3 = parseFloat(prompt("Digite a terceira nota:"));

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        var media = (nota1 + nota2 + nota3) / 3;
        alert("A média do aluno " + nome + " é: " + media.toFixed(2));
    } else {
        alert("Por favor, digite notas válidas.");
    }
}

function realizarOperacoes() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        var soma = num1 + num2;
        var subtracao = num1 - num2;
        var produto = num1 * num2;
        var divisao = num1 / num2;
        var resto = num1 % num2;

        alert("Soma: " + soma + "\nSubtração: " + subtracao + "\nProduto: " + produto + "\nDivisão: " + divisao + "\nResto: " + resto);
    } else {
        alert("Por favor, digite números válidos.");
    }
}
