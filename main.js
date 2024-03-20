
    function afficherListeCartes() {
        var listeCartesDiv = document.getElementById('liste-cartes');
        cartes.forEach(function(carte) {
            var carteDiv = document.createElement('div');
            carteDiv.classList.add('carte');
            carteDiv.innerHTML = `
                <h2>${carte.name}</h2>
                <p><strong>Type:</strong> ${carte.type}</p>
                <p><strong>Elixir:</strong> ${carte.elixir}</p>
                <p><strong>Rareté:</strong> ${carte.rarity}</p>
                <p><strong>Arene:</strong> ${carte.arena}</p>
                <p><strong>Description:</strong> ${carte.card_description}</p>
            `;
            listeCartesDiv.appendChild(carteDiv);
        });
    }

    window.onload = function() {
        afficherListeCartes();
    };