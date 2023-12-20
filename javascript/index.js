/*Cotizador de Seguros 3ra pre entrega
---------------------------------------*/

//Creamos el formulario de inicio de sesion!
//en este caso vamos a hacer que si el usuario pone cualquier email y contraseña pueda acceder directamente.
//pero en caso de que toque el boton de registrarse tenga que poner sus datos! 
const INICIO = document.getElementById("sectionPrincipal")

;
// -- El codigo anterior nos tiene que redirigir a " ingreso.html o registro.html"  --//

// creamos le footer desde aca --
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
// barra lateral que despliega funciones----//
let barra = document.getElementById("nav")
barra.innerHTML =`  
                    <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                    <button><a href="index.html"><img src="../assets/img/icono.ico" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></a></button>
                    <button id="cotizaAhora"><a href="./pages/ingreso.html">Cotizar Ahora!</a></button>
                        <div>
                            <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Ingresar</a>
                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Iniciar Sesion</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                            <div>
                            <form>
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
                                <div class="col">
                                <!-- Simple link -->
                                <a href="#!">Olvido su contraseña?</a>
                                </div>
                            </div>
                            <!-- Submit button -->
                            <button type="button" class="btn btn-primary btn-block mb-4"><a id="ancla" href="pages/ingreso.html">Ingresar</a></button>
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
                    </nav>
                    `;