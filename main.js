function validateForm() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Mostrar ventana de alerta con la información
    var info = "Nombre: " + nombre + "\nCorreo Electrónico: " + email + "\nMensaje: " + mensaje;
    alert(info);

    return true;
}