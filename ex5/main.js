const calcular = document.getElementById('calcular');

function juntaNome () {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const resultado = document.getElementById('resultado');

    resultado.textContent = ` Seu nome é ${nome}  ${sobrenome}, parabens`;

}

calcular.addEventListener('click', juntaNome);