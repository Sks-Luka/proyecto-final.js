// Vamos a crear un formulario para que las el usuario pueda ingresar
// sus datos, que estos se almacenen en un array y se guarden en el storage.

const USER_DATOS = document.getElementById("form")
USER_DATOS.innerHTML =`
<section class="vh-100 bg-image"  
style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
<div class="mask d-flex align-items-center h-100 gradient-custom-3">
<div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
        <div class="card" style="border-radius: 15px;">
        <div class="card-body p-5">
            <h2 class="text-uppercase text-center mb-5">CREAR UNA CUENTA</h2>

            <form>

            <div class="form-outline mb-4">
                <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example1cg">Ingresa tu nombre</label>
            </div>

            <div class="form-outline mb-4">
                <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example3cg">Ingresa tu Email</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example4cg">Crea tu Password</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example4cdg">Repeti tu password</label>
            </div>

            <div class="form-check d-flex justify-content-center mb-5">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                <label class="form-check-label" for="form2Example3g">
                    Estoy de acuerdo con las bases, terminos y condiciones! <a href="#!" class="text-body"><u>Terminos del Servicio</u></a>
                </label>
            </div>

            <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"><a href="ingreso.html">Registrarme</a></button>

            </div>

            <p class="text-center text-muted mt-5 mb-0">Ya estas registrado? <a href="#!"
                    class="fw-bold text-body"><u>Ingresar a mi cuenta!</u></a></p>

            </form>

        </div>
        </div>
    </div>
    </div>
</div>
</div>
</section>
`;
// Almacenamos los datos del usuario al registrarse en un objeto y lo mostramos en consola 
// Voy a tratar de que al mismo momento que se muestra en consola se guarde en el localstorage!
const FORM = document.querySelector('form');
const DATOSARRAY = [];
FORM.addEventListener('submit', function(event) {
    event.preventDefault();
    const NOMBRE = document.querySelector('#form3Example1cg').value;
    const EMAIL = document.querySelector('#form3Example3cg').value;
    const PASSWORD = document.querySelector('#form3Example4cg').value;
    const PASSWORDREPETIDO = document.querySelector('#form3Example4cdg').value;
    const DATOS = { NOMBRE, EMAIL, PASSWORD, PASSWORDREPETIDO };
    DATOSARRAY.push(DATOS);
    console.log(DATOSARRAY);
    //primero pasamos de objeto a string para poder guardarlo
    let user_storage = JSON.stringify(DATOS);
    //Ahora los seteamos para que se guarden con clave y valor
    localStorage.setItem("USER_DATOS",user_storage);
});
