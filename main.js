// CODIGO DE LA CALCULADORA

// DOLAR
fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then((data) => {

        function solicitarMontodolar() {
            let contadordepesos = document.getElementById("contadordepesos")
            swal.fire({
                title: 'EL RESULTADO DE TU CONVERSION ES:',
                icon: 'success',
                text: ((contadordepesos.value / (data.compra)).toFixed(2) + "USD"),
                background: '#f1827a',
                color: '#f8efb2',
                iconColor: '#efc562',
                confirmButtonColor: '#efc562'
            })
        }
        
       
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3> MONEDA: ${data.moneda}</h3>
                        <p>  COMPRA $ ${data.compra}</p>
                        <p> VENTA $ ${data.venta}</p>`;
        document.getElementById("cotizaciones").appendChild(contenedor).classList.add("container");
    
    

        let botondolar = document.getElementById("botondolar")
        botondolar.addEventListener('click', solicitarMontodolar)

        .catch (()=>console.error("Error"))
       
    })

// EURO    
fetch("https://dolarapi.com/v1/cotizaciones/eur")
    .then(response => response.json())
    .then((data) => {

        function solicitarMontoeuro() {
            let contadordepesos = document.getElementById("contadordepesos")
            swal.fire({
                title: 'EL RESULTADO DE TU CONVERSION ES:',
                icon: 'success',
                text: ((contadordepesos.value / (data.compra)).toFixed(2) + "EUR"),
                background: '#f1827a',
                color: '#f8efb2',
                iconColor: '#efc562',
                confirmButtonColor: '#efc562'
            })
        }

            let contenedor = document.createElement("div");
            contenedor.innerHTML = `<h3> MONEDA: ${data.moneda}</h3>
                            <p>  COMPRA $ ${data.compra}</p>
                            <p> VENTA $ ${data.venta}</p>`;
            document.getElementById("cotizaciones").appendChild(contenedor).classList.add("container");
        
        

        let botoneuro = document.getElementById("botoneuro")
        botoneuro.addEventListener('click', solicitarMontoeuro)

        .catch (()=>console.error("Error"))
       
    })


// CODIGO INFORMACION DEL TIPO DE CAMBIO



// CODIGO FORMULARIO



const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

function guardarformulario() {
    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("email", email.value)
}



function aviso() {
    Toastify({
        text: "FORMULARIO ENVIADO 👌",
        className: "succes",
        duration: 4000,
        style: {
            background: "#f8efb2",
            color: "black"
        }
    }).showToast();


}

function alerta() {
    entrar = true;
    parrafo.innerHTML = "<h4> el nombre es invalido, agregar mas de 4 caracteres.</h4>"
    setTimeout(()=> {
        parrafo.innerHTML = " "
    }, 4000)
}

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    nombre.value.length < 4 && alerta()
        (!regexEmail.test(email.value)) && alerta()
    const completarformulario = (entrar = parrafo.innerHTML = warnings) ? true : false
    completarformulario ? parrafo.innerHTML = warnings : aviso()
    guardarformulario()
    form.reset();
})

// API 

fetch("https://dolarapi.com/v1/dolare")
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        data.forEach((info) => {
                let contenedorapi = document.createElement("div");
                contenedorapi.innerHTML =
                    `
        <p> ${info.nombre}</p>
        <p> COMPRA  ${info.compra}</p>
        <p> VENTA ${info.venta}</p>
        `
                document.getElementById("api").appendChild(contenedorapi).classList.add("containerapi");

            })
            .catch (()=>console.error("Error"))
    })

// MONEDAS PRINCIPALES ARG



const monedas = ["EURO", "DOLAR", "DOLAR AUSTRALIANO", "LIBRA", "YEN"]

let monedasdiv = document.createElement("div");
monedasdiv.innerHTML =
    `
  <h1 class= "titulo">monedas de mayor circulacion en arg</h1>
  <p> ${monedas.join("-")} </p>
  
  `
document.getElementById("monedas").appendChild(monedasdiv).classList.add("monedasdiv");


// CODIGO FECHA DE ACTUALIZACION

const actualizacion = new Date()
let container_ = document.createElement("div");
container_.innerHTML = `<h3> ULTIMA FECHA DE ACTUALIZACION ${actualizacion}</h3>`;
document.body.appendChild(container_).classList.add("container_");

