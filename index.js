import Cards from './bd/Cards.js';

const NOMBRECARDS = 3;
let NumPage = 1;
let listeCartes = [];

const divConteneur = document.createElement("div");
divConteneur.id = "conteneurCards";
if (document.getElementById("conteneurCards") == null) {
    document.body.appendChild(divConteneur); // Ajout de div avant l'accès avec getElementById
}

// Afficher les trois premières cartes de la bd
function afficherCartes(debut = 0) {
    document.getElementById("conteneurCards").innerHTML = ''; // Effacer le contenu précédent
    for (let i = debut; i < debut + NOMBRECARDS; i++) {
        if (i >= listeCartes.length) {
            break;
        } else {
            let card = listeCartes[i];
            let image = document.createElement("img");
            image.src = 'img/' + card.img;
            image.alt = card.card_name;
            document.getElementById("conteneurCards").appendChild(image); 
        }
    }
}

// Afficher les boutons "Suivant" et "Précédent" et le numéro de page
function afficherBoutonSuivantEtNumeroPage(NombrePage) {
    let div = document.createElement("div");
    div.id = "divBoutonSuivantEtNumeroPage";
    if (NumPage > 1) {
        let boutonPrecedent = document.createElement("button");
        boutonPrecedent.id = "boutonPrecedent";
        boutonPrecedent.textContent = "Précédent";
        boutonPrecedent.addEventListener('click', previousPage);
        div.appendChild(boutonPrecedent);
    }
    let numeroPage = document.createElement("p");
    numeroPage.id = 'numeroPage';
    numeroPage.textContent = NumPage;
    div.appendChild(numeroPage);
    if (NumPage < NombrePage) {
        let boutonSuivant = document.createElement("button");
        boutonSuivant.id = "boutonSuivant";
        boutonSuivant.textContent = "Suivant";
        boutonSuivant.addEventListener('click', nextPage);
        div.appendChild(boutonSuivant);
    }
    document.getElementById("conteneurCards").appendChild(div);
}

// Fonction pour afficher les cartes de la page suivante
function nextPage() {
    NumPage++;
    let debut = (NumPage - 1) * NOMBRECARDS;
    afficherCartes(debut);
    let NombrePage = Math.ceil(listeCartes.length / NOMBRECARDS);
    afficherBoutonSuivantEtNumeroPage(NombrePage);
}

// Fonction pour afficher les cartes de la page précédente
function previousPage() {
    NumPage--;
    let debut = (NumPage - 1) * NOMBRECARDS;
    afficherCartes(debut);
    let NombrePage = Math.ceil(listeCartes.length / NOMBRECARDS);
    afficherBoutonSuivantEtNumeroPage(NombrePage);
}

// Fonction pour lancer la page
function lancerLaPage() {
    fetch('http://localhost:3000/Cards', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let card = data[i];
            let laCarte = new Cards(card.id, card.card_name, card.elixir, card.rarity, card.arena, card.card_description, card.type_id, card.img);
            listeCartes.push(laCarte);
        }
        let NombrePage = Math.ceil(listeCartes.length / NOMBRECARDS);
        afficherCartes();
        afficherBoutonSuivantEtNumeroPage(NombrePage);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

lancerLaPage();
