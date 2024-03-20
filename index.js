// Dès que le fichier se lance, on affiche le nom de tous les cards de la bd
import Cards from './bd/Cards.js';

fetch('http://localhost:3000/Cards', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => response.json())
.then(data => {
    let div = document.createElement("div");
    div.id = "conteneurCards";
    if (document.getElementById("conteneurCards")) {
        document.getElementById("conteneurCards").remove();
    }
    for (let cardData of data) {
        let card = new Cards(cardData["id"],cardData["card_name"], cardData["elixir"], cardData["rarity"], cardData["arena"], cardData["card_description"], cardData["type_id"]);

        let paragraph = document.createElement("p");
        paragraph.id = "cardP "+card.id;
        paragraph.innerHTML =  card.card_name;
        div.appendChild(paragraph);
    }
    document.body.appendChild(div);
})
.catch(error => {
    console.error('Error fetching data:', error);
});
