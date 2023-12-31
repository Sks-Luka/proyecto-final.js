let email = localStorage.getItem('email');
let nombre = localStorage.getItem('firstName');
let segundo = localStorage.getItem('lastName');



const CARDS = document.getElementById('segunda')
CARDS.innerHTML = `
<div class="container mt-5 mb-3">
<div class="row">
    <div class="col-md-4">
        <div class="card p-3 mb-2" id="cardCasa">
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                    <div class="ms-2 c-details">
                        <h6 class="mb-0">Cuida tu vivienda con la mejor proteccion!</h6> <span>Cotizaciones bienes y raices</span>
                    </div>
                </div>
                <div class="badge"> <span>Security first class!</span> </div>
            </div>
            <div class="mt-5">
                <h3 class="heading">Seguro de Hogar</h3>
                <div class="mt-5">
                    <div>
                        <button type="button" id="btnLogin" class="btn btn-primary btn-block mb-4"><a id="anclabtn" href="../pages/hogar.html"> Quiero cotizar </a></button>
                    </div>
                    <div class="mt-3"> <span class="text1">32 valoraciones positivas almenos 50 usuarios lo recomieandan.</span></span> </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card p-3 mb-2" id="cardHouse">
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div class="icon"> <i class="bx bxl-dribbble"></i> </div>
                    <div class="ms-2 c-details">
                        <h6 class="mb-0">Dormi tranquilo con tus valores resguardados!</h6> <span>Ofrecemos polizas con 100% de reintegro</span>
                    </div>
                </div>
                <div class="badge"> <span>Security first class!</span> </div>
            </div>
            <div class="mt-5">
                <h3 class="heading">Seguro del Automotor</h3>
                <div class="mt-5">
                    <div>
                    <button type="button" id="btnLogin" class="btn btn-primary btn-block mb-4"><a id="anclabtn" href="../pages/ingreso.html"> Quiero cotizar </a></button>
                    </div>
                    <div class="mt-3"> <span class="text1">74 valoraciones positivas almenos 65 usuarios lo recomieandan.</span></span> </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card p-3 mb-2" id="personales">
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                    <div class="ms-2 c-details">
                        <h6 class="mb-0">Seguros Laborales </h6> <span>Ofrecemos la mejor asistencia al personal de tu empresa.</span>
                    </div>
                </div>
                <div class="badge"> <span>Security first class!</span> </div>
            </div>
            <div class="mt-5">
                <h3 class="heading">Accidentes Personales</h3>
                <div class="mt-5">
                    <div>
                    <button type="button" id="btnLogin" class="btn btn-primary btn-block mb-4"><a id="anclabtn" href="../pages/personal.html"> Quiero cotizar </a></button>
                    </div>
                    <div class="mt-3"> <span class="text1">52 valoraciones positivas almenos 86 usuarios lo recomiendan. </span></span> </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

`;


//creamos la card donde se muestren los datos del usuario ---------------
const LOGIN_USER = document.getElementById('CardUsers')
LOGIN_USER.innerHTML=`
            <div class="container d-flex justify-content-center align-items-center">

            <div class="carding">

            <div class="upper">

            <img src="../assets/img/fondo.jpg" class="img-fluid" height="100">
            
            </div>

            <div class="user text-center">

            <div class="profile">

                <img src="../assets/img/avatar.png" class="rounded-circle" width="80">
                
            </div>

            </div>


            <div class="mt-5 text-center">

            <h4 class="mb-0">${nombre}</h4>
            <span class="text-muted d-block mb-2">${segundo}</span>

            <button class="btn btn-primary btn-sm follow">${email}</button>

            </div>
            
            </div>
            
            </div>

            </div>
`




//---------------------------------------------------------------//
//creamos el footer

const FOOTER = document.getElementById("pieDePaginaOfice")

FOOTER.innerHTML =`
<div>
<ul class="listaFooter">
    <li><p>Franquicias oficiales contactate con @support</p></li>
    <li><p>Para info en inversiones contactanos! </p></li>
    <li><p>© Copyright SegurosDev-2023</p></li>
</ul>
</div>
`;