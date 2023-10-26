
// CODIGO DE LA CALCULADORA

let dolar = 1000
let euro = 372

function solicitarMontodolar() {
    let contadordepesos = document.getElementById("contadordepesos")
    swal.fire({
        title: 'EL RESULTADO DE TU CONVERSION ES:',
        icon: 'success',
        text: ((contadordepesos.value / dolar).toFixed(2) + "USD"),
        background: '#f6d2a0',
        color: '#bc5761cb',
        iconColor: 'brown',
        confirmButtonColor: '#512c2b'
    })
}

function solicitarMontoeuro() {
    let contadordepesos = document.getElementById("contadordepesos")
    swal.fire({
        title: 'EL RESULTADO DE TU CONVERSION ES:',
        icon: 'success',
        text: ((contadordepesos.value / euro).toFixed(2) + "EUR"),
        background: '#f6d2a0',
        color: '#bc5761cb',
        iconColor: 'brown',
        confirmButtonColor: '#512c2b'
    })
}

let botondolar = document.getElementById("botondolar")
botondolar.addEventListener('click', solicitarMontodolar)

let botoneuro = document.getElementById("botoneuro")
botoneuro.addEventListener('click', solicitarMontoeuro)

// CODIGO INFORMACION DEL TIPO DE CAMBIO

const productos = [{
    moneda: "DOLAR",
    compra: 960,
    venta: 980
},
{
    moneda: "EURO",
    compra: 375,
    venta: 375
},
];



for (const producto of productos) {
let contenedor = document.createElement("div");
contenedor.innerHTML = `<h3> MONEDA: ${producto.moneda}</h3>
                    <p>  COMPRA $ ${producto.compra}</p>
                    <p> VENTA $ ${producto.venta}</p>`;
document.getElementById("cotizaciones").appendChild(contenedor).classList.add("container");

}

// CODIGO FORMULARIO

let formulario = document.getElementById("formulario")
let nombreusuario = document.getElementById("nombre")
let emailusuario = document.getElementById("email")

function guardarformulario() {
    localStorage.setItem("nombre", nombreusuario.value)
    localStorage.setItem("email", emailusuario.value)
}

let enviando = document.getElementById("enviando")

function aviso() {
    enviando.innerHTML = "<h4>TU FORMULARIO FUE ENVIADO,GRACIAS!</h4>"
}

function avisodecompletar() {
    enviando.innerHTML = "<h4>COMPLETA TODAS LAS CASILLAS.</h4>"
}

let enviarformulario = document.getElementById("enviar")
enviarformulario.addEventListener('click', function (event) {
    event.preventDefault();
    guardarformulario()
    let completarformulario = (emailusuario.value) ? true : false
    completarformulario ? aviso() : avisodecompletar()
    nombreusuario.value == "" && avisodecompletar()
    formulario.reset();
})

// CODIGO FECHA DE ACTUALIZACION

const actualizacion = new Date()
let container_ = document.createElement("div");
container_.innerHTML = `<h3> ULTIMA FECHA DE ACTUALIZACION ${actualizacion}</h3>`;
document.body.appendChild(container_).classList.add("container_");