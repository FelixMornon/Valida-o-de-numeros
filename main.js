function compararNumeros() {
    // obterndo os valores dos números do formulário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    // verificando os valores
    if (numero1 < numero2) {
        alert("O formulário é válido")
    } else {
        alert("O formulário não é válido")
    }
}

