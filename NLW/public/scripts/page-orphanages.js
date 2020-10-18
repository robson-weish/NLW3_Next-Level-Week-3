// TIPOS DE DADOS
// String ""
// Number 01
// Object {}
// Array []

// Create Map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Icone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng }) {
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    ` ${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg" > </a> `
  );

  // Criação do marcador

  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);

  // O ';' e para encerramento de um codigo
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");

orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

  // o DATASET e a mesma coisa do "DATA-"
  // Então sempre que procurarmos pelo dataset estaremos indo no HBS procurar pelo data-

  addMarker(orphanage);
});

console.log(orphanagesSpan);
