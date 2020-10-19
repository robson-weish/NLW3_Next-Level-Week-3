// Create Map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"    
).addTo(map);

//Icone

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
})

// Criar um marcador
// Isso daqui também e uma função 

let marker;

map.on('click' , (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // Remove icon 
    
    marker && map.removeLayer(marker)

    // Add icon layer

    marker = L.marker([lat , lng] , {icon})
    .addTo(map)


    //Impressão do Console log
    console.log("Funcionando mapa.....")
    console.log(event) // Vizualizar o evento
    console.log(marker) // Ler esse valor
})

// Adicionar e remover campo de fotos

function addPhotoField(){

    // Pegar container de fotos

    const container = document.querySelector(' #images ')

    // Pegar container para duplicar

    const fieldsContainer = document.querySelectorAll(' .new-upload ')

    // Realizar a duplicação da última foto adicionada 

    const newFieldContainer = fieldsContainer[ fieldsContainer.length - 1].cloneNode(true)

    // Não liberar um campo vazio 

    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    // Limpar o campo antes de adicioanr um novo

    newFieldContainer.children[0].value = ""

    // Adicionar o clone ao container de imagens 

    container.appendChild(newFieldContainer)


    //Impressão do Console log
    console.log("Funcionando botão de adcionar fotos.....")
}


function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(' .new-upload ')

    if (event.currentTarget <= 1){
        //Limpar um valor de campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar um campo
    span.parentNode.remove();

    //Impressão do Console log
    console.log(event.currentTarget) // Evento de apagar a linha , e quem causa ele também
}

// MARCADOR DE SIM E NAO

function toggleSelect(event){
    // RETIRAR A CLASS

    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    // COLOCAR A CLASS E PEGAR O BOTÃO CLICADO

    const button = event.currentTarget
    button.classList.add('active')

    // ATUALIZAR O INPUT

    const input = document.querySelectorAll(' [name="open_on_weekends"] ')
    console.log(input)

    //validando sim ou nao está indo

    input.value = button.dataset.value


    console.log("Entrando corretamente no Toggle")
}
/*
function validate(event) {

    // VALIDAR SE LAT E LNG ESTÃO PREENCHIDOS

    const needsLatAndLng = true;

    if (needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa!')
    }
    
}
*/