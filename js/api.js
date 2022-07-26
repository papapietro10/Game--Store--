

const API_URL = 'https://api.mercadolibre.com/'
const endpointProductos = 'sites/MLA/search'

const traerDatosBaseDeDatos = () => {
    fetch(API_URL+endpointProductos+'?nickname=METAJUEGO')
    .then((response)=> response.json())
    .then ((data) =>{
        productos = data.results;
        console.log(productos)
        generarCards(productos);
       
    })
    
}


const generarCards = (arrayDeProductos) => {
    
    let cards = '';
    arrayDeProductos.forEach((productos) => {
        cards += `<div class="col mb-5">
        <div class="card h-100 images">                     
        <img class="card-img-to images"  src="${productos.thumbnail}"alt="..." />                  
        <div class="card-body p-4 coloor">
        <div class="text-center ">
        <h5 class="fw-bolder title" >${productos.title}</h5><p class="price">$${productos.price}</p>
        </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center verproducto"><a class="btn btn-outline-dark mt-auto"  href="${productos.permalink}">Ver producto</a></div>
        </div>
        </div>b                                                                                                                                                                                                                                                                               
        </div>`;
        
    }) 



document.getElementById("card-container-api").innerHTML = cards;
}



traerDatosBaseDeDatos();