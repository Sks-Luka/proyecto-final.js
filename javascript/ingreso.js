//creamos la interfaz del usuario desde js

/* Creamos las funciones para que el usuario pueda selecionar si quiere cotizar un vehiculo o una casa */
const FORMULARIO = document.getElementById("cotizador")
FORMULARIO.innerHTML=`<div id="card">
            <div class="container">
            <div class="row">
            <div class="col col-md-8 mr-md-auto ml-md-auto" >
                <div id="contenido">
            <p id="parrafo">Cotiza tu seguro de Auto</p>
            <div class="row contenido-formulario">
            <div class="col col-md-10 mr-md-auto ml-md-auto">
            <form action="#" id="cotizar-seguro">
                <div class="form-group">
                <label for="marca">Marca:</label>
                <select class="form-control" id="marca">
                <option value="">- Seleccionar -</option>
                <option value="1">Ford</option>
                <option value="2">Volskwaguen</option>
                <option value="3">Chevrolet</option>
                </select>
                </div>
                <div class="form-group">
                <label for="anio">Año:</label>
                <select class="form-control" id="anio">
                </select>
                </div>
                <fieldset class="form-group">
                <div class="row">
                <legend class="col-form-legend col-12">Tipo Seguro</legend>
                <div class="col12">
                <div class="form-check">
                <label class="form-check-label">
                <input class="form-check-input" type="radio" name="tipo" value="basico" checked>Básico</label>
                </div>
                <div class="form-check">
                <label class="form-check-label">
                <input class="form-check-input" type="radio" name="tipo" value="completo">Completo</label></div>
                </div>
                </div>
                </fieldset>
                <div id="cargando">
                <img src="img/spinner.gif">
                </div>
                <div id="resultado"></div>
                <div class="form-group">
                <button type="submit" class="btn btn-raised btn-primary">Cotizar</button>
                <button type="submit" class="btn btn-raised btn-danger"><a href="../index.html">Cancelar</a></button>
                </div>
                </form> 
                </div>
                </div>
                </div> <!--contenido-->
                </div>
            </div>
            </div>
            <p id="mensajeCotizacion"></p>
        </div>
`;

//Le damos funcionalidad a la card anterior
//constructor
function Seguro(marca , anio, tipo) 
{
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo; 
}
//cotizarSeguro
Seguro.prototype.cotizarSeguro = function () {
/*
    1 = americano 1.15
    2 = asiatico 1.05
    3 = europeo 1.35        
*/ 

let cantidad;
const base = 2000;

switch (this.marca) {
    case '1':
        cantidad = base * 1.15;
        break;
    case '2':
        cantidad = base * 1.05;
        break;
    case '3':
        cantidad = base * 1.35;
        break;
}

//leer el año
const diferencia = new Date().getFullYear() - this.anio;
//cada año de diferencia afeca en 3 %
cantidad -= ((diferencia*3) * cantidad ) / 100;
/*
Si el seguro es Básico * 30% más
Si el seguro es Completo 50% más
*/
if (this.tipo === 'basico') {
    cantidad *= 1.30;
} else {
    cantidad *= 1.50;
}
    return cantidad;
}

//parte visual HTML
function Interfaz(){}

//Mensaje en HTml
Interfaz.prototype.mostrarMensaje = function(mensaje, tipo) {
    const div = document.createElement("div");

if (tipo === 'error') {
    div.classList.add('mensaje', 'error');
} else {
    div.classList.add("mensaje", "correcto");
}

div.innerHTML = `${mensaje}`;
formulario.insertBefore(div, document.querySelector(".form-group"));

setTimeout(function() {
    document.querySelector('.mensaje').remove();
}, 2000);
};

//imprime resultado de cotización
Interfaz.prototype.mostrarResultado = function (seguro, total) {
const resultado = document.getElementById('resultado');
let marca;

switch (seguro.marca) {
    case '1':
        marca = 'Ford';            
        break;
    case '2':
        marca = 'Volskwaguen';
        break;
    case '3':
        marca = 'Chevrolet';
        break;    
}

//crear un div
const div = document.createElement('div');
//insertar la información
div.innerHTML = `
    <p class="header">Tu resumen:</p>
    <p>Marca: ${marca}</p>
    <p> Año: ${seguro.anio}</p>
    <p>Tipo: ${seguro.tipo}</p>
    <p>Total: $ ${total}</p>   
`;
const spinner = document.querySelector('#cargando img');
spinner.style.display = 'block';
    
setTimeout(function(){
    spinner.style.display = 'none';
    resultado.appendChild(div);
}, 500);      
}

//capturar datops del formulario
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
//leer la marca seleccionada
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

//leer año seleccionado
    const anio = document.getElementById("anio");
    const anioSeleccionado = anio.options[anio.selectedIndex].value; 

//leer dato del radio Button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

//crear instancia de interfaz
    const interfaz = new Interfaz();
//revisamos que los campos no estén vacíos

if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
    //interfaz imprimiendo error
        interfaz.mostrarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
} else {
//limpiar resultados anteriores
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
            resultados.remove();
}

        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        //Cotizar el seguro
        const cantidad = seguro.cotizarSeguro(seguro);
        //mostrar resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando', 'correcto');

    }

});




const max = new Date().getFullYear(),
    min = max - 20;

const  selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}