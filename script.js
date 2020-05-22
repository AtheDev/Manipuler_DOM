// Question 1 :
console.log("Combien y a-t-il d'éléments <p> présents dans la page HTML ?");
console.log(document.getElementsByTagName("p").length);

// Question 2 :
console.log("Quel est le contenu texte de l'élément portant l'id coucou ?");
console.log(document.getElementById("coucou").textContent);

// Question 3 :
console.log("Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?");
console.log((document.getElementsByTagName("a"))[2].href);

// Question 4 :
console.log("Combien d'éléments portent la classe compte-moi ?");
console.log(document.getElementsByClassName("compte-moi").length);

// Question 5 :
console.log("Combien d'éléments <li> portent la classe compte-moi ?");
console.log(document.querySelectorAll("li.compte-moi").length);

// Question 6 :
console.log("Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?");
console.log(document.querySelectorAll("ol > li.compte-moi").length);

// Question 7 :
console.log("Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…");
console.log((document.querySelectorAll("div > ul")[1]).childNodes[1].textContent);