const form = document.getElementById('form-campos');

form.addEventListener("submit", function(e){
    e.preventDefault();

    const campo_A = document.getElementById('campoA');
    const campo_B = document.getElementById('campoB');
    const mensagemSucesso = `Valor: ${campo_B.value} é maior que o valor: ${campo_A.value}`

    if (campo_B.value > campo_A.value) {
        alert(mensagemSucesso);
        campo_A.value = ' ';
        campo_B.value = ' ';

    } else {
        alert("Erro! Tente novamente!!");
        campo_A.value = ' ';
        campo_B.value = ' ';
    }
})

