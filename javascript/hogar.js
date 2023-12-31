const HOGAR = document.getElementById('hogarPrinci')
HOGAR.innerHTML= `<div id="cotizacionPrincipal">
                            <form action="#" id="cotizarSeguro">
                                <div class="form-group">
                                    <label for="marca"><strong>Seleccione el tipo de hogar</strong></label>
                                    <select class="form-control" id="marca">
                                        <option value="">- Seleccionar -</option>
                                        <option value="1">MonoAmbiente</option>
                                        <option value="2">Duplex</option>
                                        <option value="3">Casa Particular</option>
                                        <option value="4">Casa quinta</option>
                                        <option value="5">Casa lindera a la costa</option>
                                        <option value="6">Piso unico</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="tipo"><strong>Seleccione los metros cuadrados de espacio</strong></label>
                                    <select class="form-control" id="tipo">
                                        <option value="">- Tamaño de su superficie cubierta-</option>
                                        <option value="1"> 20mtrs -</option>
                                        <option value="2"> 20 a 70mtrs -</option>
                                        <option value="2"> 70 a 100mtrs -</option>
                                        <option value="2"> 100 a 200mtrs -</option>
                                        <option value="2"> mas de 200mtrs-</option>
                                    <select>
                                </div>
                                <div class="form-group">
                                    <label for="anio"><strong>Ingrese la fecha de construccion del inmueble</strong></label>
                                    <select class="form-control" id="anio">
                                    </select>
                                </div>
                                    <fieldset class="form-group">
                                    <div class="row">
                                    <legend class="col-form-legend col-12">Tipo Seguro</legend>
                                    <div class="col12">
                                    <div class="form-check">
                                    <label class="form-check-label">
                                    <input class="form-check-input" type="radio" name="tipo" value="Covertura Standar" checked>Básico</label>
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label">
                                    <input class="form-check-input" type="radio" name="tipo" value="completo">Covertura Anti Todoriesgo</label></div>
                                </div>
                                </div>
                                </fieldset>
                                <div id="resultado"></div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-raised btn-primary">Cotizar</button>
                                    <button type="submit" class="btn btn-raised btn-danger"><a id="btnIngreso" href="../pages/ofice.html">Cancelar</a></button>
                                </div>
                                </form> 
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

    let cantidad;
    
    const base = 2000;
    
    switch (this.marca) {
        case '1':
            cantidad = base * 5;
            break;
        case '2':
            cantidad = base * 7;
            break;
        case '3':
            cantidad = base * 10;
            break;
        case '4':
            cantidad = base * 12;
        case '5':
            cantidad = base * 13;
        case '6':
            cantidad = base * 6;
    }
    
    //leer el año
    
    const diferencia = new Date().getFullYear() - this.anio;
    
    //cada año de diferencia afeca en 3 %
    
    cantidad -= ((diferencia*3) * cantidad ) / 100;
    
    /*
    Si el seguro es Básico * 30% más
    Si el seguro es Completo 50% más
    */
    
    
    if (this.tipo === 'Covertura Standar') {
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
    Interfaz.prototype.mostrarResultado = function (seguro,total ) {
    const resultado = document.getElementById('resultado');
    let marca;
    
    switch (seguro.marca) {
        case '1':
            marca = 'MonoAmbiente';            
            break;
        case '2':
            marca = 'Duplex';
            break;
        case '3':
            marca = 'Casa Particular';
            break;
        case '4':
            marca = 'Casa quinta';
        case '5':
            marca = 'Casa lindera a la costa';
        case '6':
            marca ='Piso unico';
    }
    
    //crear un div
    
    const div = document.createElement('div');
    
    //insertar la información lo mostramos mediante la libreria de Sweet Alert :)
    div.innerHTML = Swal.fire({
        title: "<strong>Su cotizacion <u> Oficial</u></strong>",
        icon: "success",
        html: `
        <div class="card">
            <p class="header">Tu resumen:</p>
            <p>Marca: ${marca}</p>
            <p> Año: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p>Total: $ ${total}</p> 
        </div>
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Realizado!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: "No, cancelar!",
        cancelButton: "btn btn-danger"
    });
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
    
    if (marcaSeleccionada === '' || anioSeleccionado === '') {
        //interfaz imprimiendo error
            interfaz.mostrarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
    } else {
    //limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
                resultados.remove();
    }
    
    const seguro = new Seguro(marcaSeleccionada, anioSeleccionado,);
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
    };


//creamos el footer

const FOOTER = document.getElementById("pieDePaginaHogar")

FOOTER.innerHTML =`
                <div>
                <ul class="listaFooter">
                    <li><p>Franquicias oficiales contactate con @support</p></li>
                    <li><p>Para info en inversiones contactanos! </p></li>
                    <li><p>© Copyright SegurosDev-2023</p></li>
                </ul>
                </div>
`;