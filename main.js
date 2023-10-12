class conversor {
    constructor(cambio, compra, venta) {
        this.cambio = cambio;
        this.compra = compra;
        this.venta = venta;
    }

    hablar() {
        alert("ESTA ES LA INFORMACION DEL" + " " + this.cambio + ":" + " " + "COMPRA" + " " + this.compra + " " + "-" + " " + "VENTA" + " " + " " + this.venta);
    }
}

const dolarinformacion = new conversor("DOLAR", 1010, 990);
const euroinformacion = new conversor("EURO", 397, 377);

const actualizacion = new Date()
alert("ULTIMA ACTUALIZACION DE PRECIOS:" + " " + actualizacion.toLocaleDateString())

euroinformacion.hablar();
dolarinformacion.hablar();


while (seguiroperando != "NO") {
    let dolar = 990
    let euro = 372

    const monedas = [{
            nombre: 'EURO',
            precio: 397
        },
        {
            nombre: 'DOLAR',
            precio: 990
        },
    ]

    const variasmonedas = monedas.map((el) => el.nombre)

    alert("A CONTINUACION LAS MONEDAS CON LAS QUE TRABAJAMOS")
    alert(variasmonedas)



let tipodecambio = prompt("INGRESE SU TIPO DE CAMBIO DOLAR O EURO").toUpperCase()


function solicitarMontodolar() {
    let montoIngresado = prompt("INGRESAR MONTO")
    if (montoIngresado > 0)
        alert((montoIngresado / dolar).toFixed(2));
}

function solicitarMontoeuro() {
    let montoIngresado = prompt("INGRESAR MONTO")
    if (montoIngresado > 0)
        alert((montoIngresado / euro).toFixed(2));
}

function alertaopcioninvalida() {
    alert("USTED ESTA INGRESANDO UNA OPCION INVALIDA")
}


switch (tipodecambio) {

    case "DOLAR":
        alert("USTED ELIGIO DOLAR")
        solicitarMontodolar()
        break;

    case "EURO":
        alert("USTED ELIGIO EURO")
        solicitarMontoeuro()
        break;
}

var seguiroperando = prompt("DESEA SEGUIR OPERANDO? SI O NO").toUpperCase()
 if ( seguiroperando != "SI"){
    alert ("GRACIAS POR ELEGIRNOS")
    break
 }
}