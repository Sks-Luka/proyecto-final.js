    //Cotizador de Seguros 2da Pre-entrega!
/*------------------------------------------*/

// Array de objetos para los planes de seguro
let PLANES_SEGURO = [
    { id: '1', nombre: 'Seguro Básico', costo: 3500, abonoMensual: 45 },
    { id: '2', nombre: 'Seguro Contra Todo Riesgo', costo: 10200, abonoMensual: 75 },
    { id: '3', nombre: 'Seguro Premium', costo: 20000, abonoMensual: 110 }
];

// Objeto para almacenar los datos del cliente
let CLIENTE = {};

// Función para obtener los datos del cliente
function obtenerDatosCliente() {
    CLIENTE.nombre = prompt("Por favor, ingrese su nombre");
    CLIENTE.apellido = prompt("Por favor, ingrese su apellido");
    CLIENTE.edad = parseInt(prompt("Por favor, ingrese su edad"));
}

// Función para saludar al cliente
function saludar() {
    alert(`Le damos la bienvenida ${CLIENTE.nombre} ${CLIENTE.apellido} a Seguros Dev!`);
}

// Función para obtener los datos del vehículo
function obtenerDatosVehiculo() {
    let vehiculo = {};
    vehiculo.tipo = prompt(`"Por favor, ingrese que vehiculo conduce.
                            \n 1 - Una Moto
                            \n 2 - Un Auto
                            \n 3 - Una Camioneta
                            \n "ESC" para salir `);
    vehiculo.marca = prompt("De que Marca es su vehiculo");
    vehiculo.modelo = parseInt(prompt("Ingrese el modelo de su vehiculo"));
    vehiculo.kilometros = parseInt(prompt("Por favor Ingrese el kilometraje"));
    return vehiculo;
}

// Función para obtener los datos del plan de seguro
function obtenerDatosPlan() {
    let idPlan = prompt(`Por favor, elija el plan de seguro que desea:
                        \n 1 - Seguro Básico
                        \n 2 - Seguro Contra Todo Riesgo
                        \n 3 - Seguro Premium
                        \n "ESC" para salir `);
    // Buscar el plan en el array de planes de seguro
    let plan = PLANES_SEGURO.find(plan => plan.id === idPlan);
    return plan;
}

// Función para cotizar el seguro basado en el plan elegido
function cotizar(vehiculo, plan) {
    let mensaje = `El costo total de la póliza para el ${plan.nombre} es de $${plan.costo} USD. El abono mensual será de $${plan.abonoMensual} USD.`;
    alert(`Nos dirigimos a usted ${CLIENTE.nombre} ${CLIENTE.apellido} para informarle que la cotización de su vehiculo  de marca ${vehiculo.marca} modelo ${vehiculo.modelo} con ${vehiculo.kilometros} kilómetros es la siguiente:
            \n ${mensaje}
            \n Muchas gracias por utilizar el servicio de Seguros Dev!`);
}

// Función principal
function main() {
    alert("Bienvenido a Seguros Dev!");
    obtenerDatosCliente(); // Llamamos a la función para obtener los datos del cliente
    saludar(); // Llamamos a la función para saludar al cliente
    let vehiculo = obtenerDatosVehiculo(); // Llamamos a la función para obtener los datos del vehículo y almacenamos el resultado en la variable vehiculo
    let plan = obtenerDatosPlan(); // Llamamos a la función para obtener los datos del plan de seguro y almacenamos el resultado en la variable plan
    cotizar(vehiculo, plan); // Llamamos a la función para cotizar el seguro con los datos del vehículo y del plan
}

//  Funcion general para ejecutar el programa!
main();

/*  No se si sera el mejor codigo del mundo pero le meti ganas! Si llego hata aca tutor gracias por corregir mi trabajo!
estoy trabajando para implementar lo aprendido y vincular el codigo con el html y aplicar dom pero todavia no me sale.
el unico problema que va encontrar en el codigo es que cuando se ingresa ESC no se puede salir trate de hacerlo pero no pude
lo intente de hacer tratando de verificar la entrada del usuario  pero no me salio se me mesclaban las funciones y rompia todo
sepa entender que estoy aprendiendo :)
Implemente lo aprendido mas algunas cositas que ya sabia utilizando arrays, objetos, algunas propiedades y funciones Le deje todo comentado
para facilitar la correccion.
La estructura general del proyecto va estar basada en sass como pre-procesador de css y las funciones en js. Muchas Gracias y Saludos! */

