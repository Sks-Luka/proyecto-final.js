// Vamos a crear un formulario para que las el usuario pueda ingresar
// sus datos, que estos se almacenen en un array y se guarden en el storage.

const USER_DATOS = document.getElementById("form")
USER_DATOS.innerHTML =`
            <div id="divText">
                <h2 id="registroText">CREAR UNA CUENTA</h2>
            </div>
            <form id="creatAccount">
                <div class="row" id="colD">
                <div class="col">
                    <label for="primerNombre" class="form-label">Primer Nombre</label>
                    <input type="text" class="form-control" id="primerNombre" aria-label="First name">
                </div>
                <div class="col">
                    <label for="segundoNombre" class="form-label">Segundo Nombre</label>
                    <input type="text" class="form-control" id="segundoNombre" aria-label="Last name">
                </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label">Repeat password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2">
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        
`;


// Obtener los elementos del formulario
const form = document.getElementById('creatAccount');
const firstName = document.getElementById('primerNombre');
const lastName = document.getElementById('segundoNombre');
const email = document.getElementById('exampleInputEmail1');
const password = document.getElementById('exampleInputPassword1');
const repeatPassword = document.getElementById('exampleInputPassword2');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(event) {
// Prevenir que el formulario se envíe
event.preventDefault();

// Obtener los valores de los campos del formulario
const firstNameValue = firstName.value;
const lastNameValue = lastName.value;
const emailValue = email.value;
const passwordValue = password.value;
const repeatPasswordValue = repeatPassword.value;

// Validar los campos del formulario
if (firstNameValue === '' || lastNameValue === '' || emailValue === '' || passwordValue === '' || repeatPasswordValue === '') {
    alert('Por favor, complete todos los campos del formulario.');
    return;
}

if (passwordValue !== repeatPasswordValue) {
    alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
    return;
}

// Guardar los valores en el almacenamiento local
localStorage.setItem('firstName', firstNameValue);
localStorage.setItem('lastName', lastNameValue);
localStorage.setItem('email', emailValue);
localStorage.setItem('password', passwordValue);
localStorage.setItem('repeatPassword', repeatPasswordValue);

// Redirigir al usuario a otra página
window.location.href = 'ofice.html';
});

//creamos el footer

const FOOTER = document.getElementById("pieDepaginaCreat")

FOOTER.innerHTML =`
<div>
<ul class="listaFooter">
    <li><p>Franquicias oficiales contactate con @support</p></li>
    <li><p>Para info en inversiones contactanos! </p></li>
    <li><p>© Copyright SegurosDev-2023</p></li>
</ul>
</div>
`;