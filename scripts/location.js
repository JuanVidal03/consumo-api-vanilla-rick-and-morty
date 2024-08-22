import { characterById } from "./characters.js";

const locationApiUrl = "https://rickandmortyapi.com/api/location";
const ubicaciones = document.querySelector("#ubicaciones");

let residents = [];

const fetchLocations = async() => {

    const response = await fetch(locationApiUrl);
    const data = await response.json();
    const locations = data.results;

    locations.forEach(ubicacion => {
        ubicaciones.innerHTML += `
            <div class="ubicacion-card">
                    <h6>${ubicacion.name}</h6>
                    <p>Dimension: <span>${ubicacion.dimension}</span></p>
                    <p>Tipo: <span>${ubicacion.type}</span></p>
                    <div class="ubicacion-btn-container">
                        <button class="modal-open-btn btn white-btn">Ver residentes</button>
                    </div>
            </div>
        `
    });

    console.log(locations);

}

fetchLocations();


const fetchUbicacionPersonajes = () => {

}