const characterApiUrl = "https://rickandmortyapi.com/api/character";
const personajes = document.querySelector("#personajes");
const btnShowCharacters = document.querySelector(".show-characters");
const btnLessCharacters = document.querySelector(".less-characters");

let arrCharactres = [];
let itemsToShow = 8;

const fetchCaracters = async() => {
    
    const response = await fetch(characterApiUrl);
    const data = await response.json();
    const characters = data.results;

    arrCharactres = characters.slice(0, itemsToShow);

    arrCharactres.forEach(character => {
        personajes.innerHTML += `
            <div class="personaje-card">
                <figure>
                    <img src="${character.image}" alt="">
                </figure>
                <div class="personaje-info-container">
                    <h6>${character.name}</h6>
                    <div class="personaje-info-status">
                        <span class="status ${character.status === "Alive"? "alive" : "dead"}"></span>
                        <p class="personaje-info-especie">${character.status}</p>
                    </div>
                    <div class="personaje-info">
                        <p>Especie: <span>${character.species}</span></p>
                        <p>Origen: <span>${character.origin.name}</span></p>
                        <p>Ubicacion: <span>${character.location.name}</span></p>
                        <p>Genero: <span>${character.gender}</span></p>
                    </div>
                </div>
            </div>
        `;
    });

}
fetchCaracters();


btnShowCharacters.addEventListener("click", () => {

    personajes.innerHTML = "";
    btnShowCharacters.classList.toggle("hidden");
    btnLessCharacters.classList.toggle("hidden");
    itemsToShow = 20;
    fetchCaracters();
    
});

btnLessCharacters.addEventListener("click", () => {
    personajes.innerHTML = "";
    btnShowCharacters.classList.toggle("hidden");
    btnLessCharacters.classList.toggle("hidden");
    itemsToShow = 8;
    fetchCaracters();
})


export const characterById = async(id) => {
    const response = await fetch(`${characterApiUrl}/${id}`);
    const character = await response.json();
    return character;
}