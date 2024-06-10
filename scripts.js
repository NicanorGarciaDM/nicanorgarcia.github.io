var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("boton");

var input_checkboxes = [
    document.getElementById("PlayStation"),
    document.getElementById("Xbox"),
    document.getElementById("Nintendo"),
    document.getElementById("Mac"),
    document.getElementById("PC"),
    document.getElementById("Movil"),
    document.getElementById("eSports"),
    document.getElementById("Cine"),
    document.getElementById("Anime"),
    document.getElementById("Retro"),
    document.getElementById("MMO")
];

var nombre_placeholder = document.getElementById("nombre-placeholder");
var email_placeholder = document.getElementById("email-placeholder");
var intereses_placeholder = document.getElementById("intereses-placeholder");

console.log(input_submit);

input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();
    document.getElementById("oculto").style.display = 'none';
    document.getElementById("feedback").style.display = 'block';

    var valor_nombre = input_nombre.value;
    var valor_email = input_email.value;

    nombre_placeholder.innerHTML = valor_nombre;
    email_placeholder.innerHTML = valor_email;

    var interesesSeleccionados = [];
    input_checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            interesesSeleccionados.push(checkbox.value);
        }
    });

    var interesesFormateados = '';
    if (interesesSeleccionados.length > 0) {
        if (interesesSeleccionados.length === 1) {
            interesesFormateados = interesesSeleccionados[0] + '.';
        } else {
            interesesFormateados = interesesSeleccionados.slice(0, -1).join(', ') + ' y ' + interesesSeleccionados[interesesSeleccionados.length - 1] + '.';
        }
    }

    intereses_placeholder.innerHTML = interesesFormateados;
}
