window.onload = function () {
    console.log('carregado');
    validaCampos();

}

function validaCampos() {
    var email = document.getElementById("email");

    email.addEventListener('input', function (event) {

        if (email.validity.typeMismatch) {
            email.setCustomValidity("Digite um e-mail válido");
        } else {
            email.setCustomValidity("");
        }
    });
}




