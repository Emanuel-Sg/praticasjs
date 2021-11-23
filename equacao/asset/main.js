window.onload = function () {
    let a = parseInt(prompt("Digite o valor de A: "));
    let b = parseInt(prompt("Digite o valor de B: "));
    let c = parseInt(prompt("Digite o valor de C: "));

    let b2 = b * b;

    console.log(b2);

    let delta = b2 - 4 * a * c;

    console.log(delta);

    if (delta < 0) {
        document.write("Não é possível calcular pois o Delta é menor que zero.");
        return;
    }

    if (delta == 0) {
        document.write("O Delta é zero, portando os valores de X1 e X2 serão iguais.<br>");
        return;
    }

    let valordebneg = b * (-1);

    let raizdelta = Math.sqrt(delta);

    let x1 = (valordebneg + raizdelta) / 2 * a;

    let x2 = (valordebneg - raizdelta) / 2 * a;

}