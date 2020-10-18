// TIPOS DE DADOS
// String ""
// Number 01
// Object {}
// Array []

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create Map
const map = L.map('mapid' , options).setView([-27.222633, -49.6455874], 15);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"    
).addTo(map);

//Icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})


// Criação do marcador

L.marker([-27.222633, -49.6455874], {icon} )
  .addTo(map)

// O ';' e para encerramento de um codigo 


/* GALERIA DE IMAGEM DA PAGINA */

function selectImage(event){
    const button = event.currentTarget

    // Remove a classe .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach( removeActiveClass )

    function removeActiveClass (button){
        button.classList.remove("active")
    }

    console.log(buttons)
    // Selecionar a imagem clicada 

    const image = button.children[0]
    const imageContainer = document.querySelector(" .orphanage-details > img ")

    // Atualizar o container de imagem

    imageContainer.src = image.src

    // Adicionar a classe .active na classe clicada

    button.classList.add('active')

}