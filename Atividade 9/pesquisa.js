let idades = [];
let opinioes = [];
let sexos = [];

function calcularEstatisticas() {
    const idadeInput = document.getElementById('idade');
    const sexoInput = document.getElementById('sexo');
    const opiniaoInput = document.getElementById('opiniao');

    const idade = parseInt(idadeInput.value);
    const sexo = sexoInput.value;
    const opiniao = parseInt(opiniaoInput.value);

    idades.push(idade);
    opinioes.push(opiniao);
    sexos.push(sexo);

    const mediaIdade = idades.reduce((total, idade) => total + idade, 0) / idades.length;

    const maisVelha = Math.max(...idades);
    const maisNova = Math.min(...idades);

    const pessimoCount = opinioes.filter(opiniao => opiniao === 1).length;

    const otimoBomCount = opinioes.filter(opiniao => opiniao === 3 || opiniao === 4).length;
    const otimoBomPorcentagem = (otimoBomCount / opinioes.length) * 100;

    const homensCount = sexos.filter(sexo => sexo === 'masculino').length;
    const mulheresCount = sexos.filter(sexo => sexo === 'feminino').length;

    document.getElementById('mediaIdade').textContent = mediaIdade.toFixed(2);
    document.getElementById('maisVelha').textContent = maisVelha;
    document.getElementById('maisNova').textContent = maisNova;
    document.getElementById('pessimoCount').textContent = pessimoCount;
    document.getElementById('otimoBomPorcentagem').textContent = otimoBomPorcentagem.toFixed(2);
    document.getElementById('homensCount').textContent = homensCount;
    document.getElementById('mulheresCount').textContent = mulheresCount;

    idadeInput.value = '';
    opiniaoInput.value = '4';
}

const enviarBotao = document.getElementById('enviar');
enviarBotao.addEventListener('click', calcularEstatisticas);
