/*Cotizador de Seguros 3ra pre entrega
---------------------------------------*/
// --------TRATAMOS DE HACER LO MAS QUE SE PUEDA DE FORMA DINAMICA----------

//UTILIZAMOS EL METODO GETELEMENTBYID PARA EL DOM

const INICIO = document.getElementById("sectionPrincipal")
INICIO.innerHTML =`
                    <div> 
                        <h2 id="titulo">NOSOTROS</h2>
                        <sapn style="color: #222222; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: large; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">
                        <strong>Somos especialistas en servicios de asesoría y producción de seguros generales.</strong>
                        La asistencia y el asesoramiento profesional que brindamos responden acabadamente a los requerimientos de nuestros clientes y se ajusta ampliamente a las necesidades de los potenciales interesados en nuestros servicios.
                        <br>
                        <br>
                        <strong>La Atención Personalizada sintetiza nuestra filosofía de trabajo.</strong> Acompañar muy de cerca al asegurado, en todo momento, para asesorarlo con coberturas a la medida de sus necesidades y brindarle una respuesta material y humana de excelencia en caso de siniestro, son las claves que guían nuestra labor diaria.
                        <br>
                        <br>
                        <strong>Nuestra misión es prestar servicios de alta calidad</strong>, trasmitiendo al cliente respeto, experiencia y confiabilidad adquirida a lo largo de una extensa trayectoria. En función de su protección nos hallamos abocados al permanente estudio y análisis de coberturas que brinda nuestro mercado asegurador y precios competitivos para cada ramo.
                        <br>
                        <br>
                        <strong>Somos representantes de varias compañías con una intachable trayectoria</strong>,buen reconocimiento en el mercado asegurador y una alta solvencia y respaldo para garantizar el adecuado cumplimiento de los compromisos futuros.
                        </span>
                        <div class="logoParrafo">
                            <img src="assets/img/seguridad-informatica-_1_.ico" alt="">
                            <h2 id="parrafo">Seguros <br> Devs</h2>
                        </div>
                    <section id="carrusel">
                        <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="../assets/img/family.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5><span id="textoCard">Cotiza tu seguro familiar</span></h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="../assets/img/house.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img/car.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </section>
                    <section id="contacto">
                        <div>
                        <h2 id="finalPage">Contactanos</h2>
                        </div>
                        <div class="card">
                            <h5 class="card-header">Dejanos un mensaje</h5>
                            <div class="card-body">
                            <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Ingrese su nombre" aria-label="First name">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Ingrese su apellido" aria-label="Last name">
                            </div>
                            </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Dejenos saber tus dudas</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail3"  col-form-label">Email</label>
                                    <div class="col-sm-10">
                                    <input type="email" placeholder="Dejanos tu email para estar en contacto" class="form-control" id="inputEmail3">
                                </div>
                                <p class="card-text">Nuestro soperte esta las 24hras para resolver tus dudas e incomodidades gracias por contactarte con nosotros</p>
                                <a href="#" class="btn btn-success" id="btnForm" >Enviar mensaje</a>
                            </div>
                            </div>
                        </div>
                    </section>
                    </div>
`
;




//---------------------------------------creamos le footer desde aca ----------------------------------------------------




const FOOTER = document.getElementById("pieDePagina")

FOOTER.innerHTML =`
<div>
<ul class="listaFooter">
    <li><p>Franquicias oficiales contactate con @support</p></li>
    <li><p>Para info en inversiones contactanos! </p></li>
    <li><p>© Copyright SegurosDev-2023</p></li>
</ul>
</div>
`
// REGISTRO DEL INICIO
let barra = document.getElementById("formulario")
barra.innerHTML =`  
                        <div>
                            <form id="formu">
                            <h1>Iniciar Sesion </h1>
                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input type="email" id="form2Example1" class="form-control" />
                                <label class="form-label" for="form2Example1">Ingrese su Email</label>
                            </div>
                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <input type="password" id="form2Example2" class="form-control" />
                                <label class="form-label" for="form2Example2">Ingrese su contraseña</label>
                            </div>
                            <!-- 2 column grid layout for inline styling -->
                            <div class="row mb-4">
                                <div class="col d-flex justify-content-center">
                                <!-- Checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                    <label class="form-check-label" for="form2Example31"> ¿Recordarme? </label>
                                </div>
                                </div>
                            </div>
                            <!-- Submit button -->
                            <button type="button" id="btnLogin" class="btn btn-primary btn-block mb-4">Ingresar</button>
                            <!-- Register buttons -->
                            <div class="text-center">
                                <p>No eres miembro? <a href="./pages/registro.html">Crear mi cuenta!</a></p>
                            </div>
                            </form>
                            </div>
                            </div>
                            </div> 
                        </div>
                    </div>
                    `
;
// Definimos las constantes que voy a utilizar para tomar los datos de los inputs
// la idea en general es que el usuario que entre no pueda acceder y tenga  que registrarse
// y que todos los datos se almacen en el local storage para luego utilizarlos 

const FORM = document.querySelector("#formu");
const EMAIL_INPUT = document.querySelector("#form2Example1");
const PASSWORD_INPUT = document.querySelector("#form2Example2");
const loginButton = document.querySelector("#btnLogin");

// Función que se ejecuta cuando se envía el formulario
function submitForm(event) {
event.preventDefault();

const EMAIL = EMAIL_INPUT.value;
const PASSWORD = PASSWORD_INPUT.value;

// Verifica las credenciales del usuario pongo cualquiera para que el que entre se tenga que registrar :)
if ( EMAIL === "segurosdev@outlok.es" && PASSWORD === "password") {


// Guarda los datos en el almacenamiento local
localStorage.setItem("email", EMAIL);
localStorage.setItem("password", PASSWORD);

// Redirige al usuario a la página de inicio
window.location.href = "./pages/ofice.html";
} else {
    Swal.fire({
        icon: "error",
        title: "Datos de inicio de sesion INCORECTOS",
        text: "Para poder brindarle, un mejor servicio inicie sesion por favor",
            footer: '<a href="../pages/registro.html">NO POSEEO UNA CUENTA, ¡REGISTRARME!</a>'
    });
}
}

// Agrega un evento  al botón de inicio de sesión
loginButton.addEventListener("click", submitForm);


//------------------------- EN LA PARTE DE CONTACTOS VAMOS A HACER QUE CUANDO EL USUARIO ENVIE UNA CONSULTA SE LE GENERE UN CODIGO DE IDENTIFICACION --------------------------
                            // PARA ESO USAMOS LAS FORMULAS MATT QUE VIMOS EN CLASE SE ME OCURRIO JUSTITO //---
                            // Capaz no sea la mejor manera de hacerlo pero fue como se me ocurrio //


//------------- Utilizamos el metodo para acceder al boton 
const BTN_FORM = document.getElementById("btnForm");

// Agregar un evento de clic al botón de envío
BTN_FORM.addEventListener("click", function (evento) {
evento.preventDefault(); // 

// Obtenemos los valores de entrada del formulario
const FIRST_NAME = document.querySelector('input[aria-label="First name"]').value;
const LAST_NAME = document.querySelector('input[aria-label="Last name"]').value;
const MESSAGE = document.querySelector('#exampleFormControlTextarea1').value;
const EMAIL = document.querySelector('#inputEmail3').value;

// creamos la verificacion de los inputs si no esta completos el formulario  no se envia

if (FIRST_NAME === '' || LAST_NAME === '' || MESSAGE === '' || EMAIL === '') {
    Swal.fire({
        icon: "error",
        title: "Por favor complete todos los campos del formulario antes de enviar.",

    });    
return;
}

// Generamos  uel código de identificación de consulta aleatorio 
const TICKET_ID = Math.floor(Math.random() * 1000000);

// Creamos un objeto con los valores del formulario y el código de identificación de consulta
const formData = {
    firstName: FIRST_NAME,
    lastName: LAST_NAME,
    message: MESSAGE,
    email: EMAIL,
    ticketId: TICKET_ID
};

// Guardamos  el objeto de datos del formulario en el almacenamiento local
localStorage.setItem('formData', JSON.stringify(formData));

// Mostramos el código de identificación de consulta al usuario
Toastify({
    text: `Su consulta a sido enviada! - SU TICKET ES  ${TICKET_ID}
            \n ingrese a su cuenta para mas información            `,
    duration: 4000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
}).showToast();
});

