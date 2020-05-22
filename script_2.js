// Modification n°1

function changeTitle(){
  document.querySelector("h1.jumbotron-heading").innerHTML = "Ce que j'ai appris à THP";
  document.querySelector("p.lead").innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
console.log(changeTitle());

// Modification n°2

function changeCallToActions(){
  document.querySelectorAll("a.btn")[0].innerHTML = "OK je veux tester !";
  document.querySelectorAll("a.btn")[0].href = "http://www.thehackingproject.org";
  document.querySelectorAll("a.btn")[1].innerHTML = "Non Merci";
  document.querySelectorAll("a.btn")[1].href = "https://www.pole-emploi.fr/accueil/";
}
console.log(changeCallToActions());

// Modification n°3

function changeLogoName(){
  let title = document.querySelectorAll("header > div > div > a > strong");
  title[0].innerHTML = "The THP Experience";
  title[0].style.fontSize = '2em';
}
console.log(changeLogoName());

// Modification n°4

function populateImages(){
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  let images = document.getElementsByTagName('img');
  let i = 0;
  for (i; i < images.length; i++){
    images[i].src = imagesArray[i];
  }
}
console.log(populateImages());

// Modification n°5

function deleteLastCards(){
  let row = document.getElementsByClassName("row")[1];
  let cards = document.getElementsByClassName("col-md-4");
  for (i = 0; i < 3; i++){
    row.removeChild(cards[6]);
  }
}
console.log(deleteLastCards());

// Modification n°6

function changeCardsText(){
  let textCard = document.querySelectorAll("p.card-text");
  let arrayText = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
  for (i = 0; i <3; i++){
    textCard[i].innerHTML = arrayText[i];
  }
}
console.log(changeCardsText());

// Modification n°7

function changeViewButtons(){
  let boutonView = document.querySelectorAll("div.btn-group > button");
  for (i = 0; i < 12; i++){
    boutonView[i].classList.remove("btn-outline-secondary");
    boutonView[i].classList.add("btn-success");
    i++;
  }
}

// Modification n°8

let parentNewDiv = document.getElementsByClassName("container")[3];

let newDiv = document.createElement("div");
newDiv.classList.add("row");
parentNewDiv.appendChild(newDiv);

let cardMove = document.getElementsByClassName("col-md-4")[2];
let cloneCard3 = cardMove.cloneNode(true);
newDiv.appendChild(cloneCard3);

let row = document.getElementsByClassName("row")[1];
  row.removeChild(cardMove);
