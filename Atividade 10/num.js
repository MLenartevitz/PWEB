function encontrarMaior(numero1, numero2, numero3) {
    return Math.max(numero1, numero2, numero3);
}

function ordenarCrescente(numero1, numero2, numero3) {
    const numerosOrdenados = [numero1, numero2, numero3].sort((a, b) => a - b);
    return numerosOrdenados;
}

document.getElementById('encontrarMaior').addEventListener('click', function() {
    const inputMaiorNumeros = document.getElementById('maiorNumeros').value;
    const numeros = inputMaiorNumeros.split(',').map(Number);
    
    if (numeros.length === 3) {
        const maior = encontrarMaior(...numeros);
        document.getElementById('resultadoMaior').textContent = `O maior número é: ${maior}`;
    } else {
        document.getElementById('resultadoMaior').textContent = 'Forneça exatamente três números.';
    }
});

document.getElementById('ordenarNumeros').addEventListener('click', function() {
    const inputOrdenarNumeros = document.getElementById('ordemCrescente').value;
    const numeros = inputOrdenarNumeros.split(',').map(Number);
    
    if (numeros.length === 3) {
        const numerosOrdenados = ordenarCrescente(...numeros);
        document.getElementById('resultadoOrdenado').textContent = `Números Ordenados: ${numerosOrdenados.join(', ')}`;
    } else {
        document.getElementById('resultadoOrdenado').textContent = 'Forneça exatamente três números.';
    }
});
