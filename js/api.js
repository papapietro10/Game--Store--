const API_URL = 'https://api.mercadolibre.com/'
const endpointProductos = 'sites/MLA/search'



const traerDatosBaseDeDatos = () => {
fetch(API_URL+endpointProductos+'?nickname=SONY+ARGENTINA')
.then((response)=> response.json())
.then ((data) =>{
productos = data.results;
generarCards(productos);


})
}


const generarCards = (arrayDeProductos) => {

let cards = '';
arrayDeProductos.forEach((productos) => {
cards += `<div class="producapi">
<div class="card images-container">                     
<img class="card-img-to images"  src="${productos.thumbnail}"alt="..." />                
<div class="">
<div class="text-center ">
<h5 class="titulo-api" >${productos.title}</h5><p class="precio">$${productos.price}</p>

</div>
</div>
<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
<div class="text-center verproducto"><a class="btn btn-outline-dark mt-auto boton-api"  href="${productos.permalink}">Ver producto</a></div>
</div>
</div>                                                                                                                                                                                                                                                                            
</div>`;

}) 



document.getElementById("card-container-api").innerHTML = cards;
}

traerDatosBaseDeDatos()

const masInformacion = document.getElementById('ps5-info');

masInformacion.onclick =() =>{
    location.href='https://www.playstation.com/es-ar/ps5/'
}


const ladt = document.getElementById('click-ladt');

ladt.onclick =() =>{
    location.href='https://www.playstation.com/es-ar/games/the-last-of-us-part-i/'
}

//*Evento en el bt de enviar formulario*//
const enviar = document.getElementById("enviar");

enviar.onclick = () =>{
const nombre = document.getElementById("nombre").value;
const mail = document.getElementById("mail").value;
const apellido = document.getElementById("apellido").value;
localStorage.setItem("nombre", JSON.stringify((nombre)))
localStorage.setItem("apellido", JSON.stringify((apellido)))
localStorage.setItem("mail", JSON.stringify((mail)))
Swal.fire(
'!Su mensaje se envio con exito!',
'¡Muchas gracias!',
'success'
)

}