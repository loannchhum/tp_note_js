document.getElementById("voirDescription").addEventListener("click", function(){
    let id = document.getElementById("idCard").value;
    fetch('http://localhost:3000/Cards/'+id, {
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
        let card = new Cards(data["id"],data["card_name"], data["elixir"], data["rarity"], data["arena"], data["card_description"], data["type_id"]);
        let paragraph = document.createElement("p");
        paragraph.id = card.id;
        paragraph.innerHTML = "cardP "+ card.card_name + " : " + card.card_description;
        div.appendChild(paragraph);
        document.body.appendChild(div);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
);