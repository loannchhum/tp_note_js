import Cards from './bd/Cards.js';
const NOMBRECARDS = 3;

fetch('http://localhost:3000/Cards', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => response.json())
.then(data => {
    let div = document.createElement("div");
    div.id = "conteneurCards";
    document.body.appendChild(div); // Ajout de div avant l'accès avec getElementById
    let cartes = [];
    for (let card of data) {
        let carte = new Cards(card["id"], card["card_name"], card["elixir"], card["rarity"], card["arena"], card["card_description"], card["type_id"], card["img"]);
        cartes.push(carte);
    }
    let image = document.createElement("img");
    // les trois premières cartes de la bd en parcourant la liste cartes
    for (let i = 0; i < NOMBRECARDS; i++) {
        image.src = 'img/'+cartes[i].img;
        image.alt = cartes[i].card_name;
        document.getElementById("conteneurCards").appendChild(image.cloneNode(true)); // Cloner l'image pour chaque carte
    }
    // dans la div mettre deux boutons pour voir trois autres cartes suivantes et précédentes
    let button = document.createElement("button");
    button.id = "precedent";
    button.innerHTML = "précédent";
    document.getElementById("conteneurCards").appendChild(button);
    button = document.createElement("button");
    button.id = "suivant";
    button.innerHTML = "suivant";
    document.getElementById("conteneurCards").appendChild(button);
})
.catch(error => {
    console.error('Error fetching data:', error);
});
