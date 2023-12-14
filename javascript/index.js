// Crea una variable que almacene el formulario de inicio de sesión
const formulario = document.getElementById("login-form");

// Crea una función que guarde los datos del usuario en el localStorage
function guardarDatos(event) {
    // Evita que el formulario se envíe por defecto
    event.preventDefault();
    // Crea una variable que almacene el valor del campo usuario
    const usuario = document.getElementById("usuario").value;
    // Crea una variable que almacene el valor del campo contraseña
    const contraseña = document.getElementById("contraseña").value;
    // Guarda el usuario y la contraseña en el localStorage con las claves "usuario" y "contraseña"
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("contraseña", contraseña);
}

// Crea una función que muestre los datos del usuario en la consola
function mostrarDatos() {
    // Obtiene el usuario y la contraseña del localStorage con las claves "usuario" y "contraseña"
    const usuario = localStorage.getItem("usuario");
    const contraseña = localStorage.getItem("contraseña");
    // Muestra el usuario y la contraseña en la consola
    console.log("Usuario: " + usuario);
    console.log("Contraseña: " + contraseña);
}

// Crea una función que valide los datos del usuario y los envíe al servidor
function validarDatos(event) {
    // Evita que el formulario se envíe por defecto
    event.preventDefault();
    // Crea una variable que almacene el valor del campo usuario
    const usuario = document.getElementById("usuario").value;
    // Crea una variable que almacene el valor del campo contraseña
    const contraseña = document.getElementById("contraseña").value;
    // Crea una condición que verifique si el usuario y la contraseña son válidos
    if (usuario == "admin" && contraseña == "1234") {
        // Muestra una alerta de éxito con sweetAlert
        Swal.fire({
            title: "Bienvenido",
            text: "Has iniciado sesión correctamente",
            icon: "success"
        });
        // Envía el formulario al servidor
        formulario.submit();
    } else {
        // Muestra una alerta de error con sweetAlert
        Swal.fire({
            title: "Error",
            text: "Usuario o contraseña incorrectos",
            icon: "error"
        });
    }
}

// Añade un evento que se dispare cuando se envíe el formulario
formulario.addEventListener("submit", function(event) {
    // Llama a la función que guarda los datos en el localStorage
    guardarDatos(event);
    // Llama a la función que valida los datos
    validarDatos(event);
});

// Añade un evento que se dispare cuando se haga clic en el botón de ver
buttonVer.addEventListener("click", function() {
    console.log(mostrarDatos()); 
});
