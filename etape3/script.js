"use strict"; // utilisation du mode strict (slide 51)

let persons = [
  { nom: "hicham", prenom: "mans", points: 10 },
  { nom: "nadir", prenom: "benarmas", points: 15 },
  { nom: "oumellal", prenom: "sihem", points: 20 }
];

// utilisation de let pour declarer les variables (slide 51)
let lignes = 0;

//manipulation du DOM (slides 45-109)

window.addEventListener("DOMContentLoaded", () => {
  init();

  document.getElementById("btn_add").addEventListener("click", () => {
    doInsert("nom", "prenom", 10);
  });

  document.getElementById("btn_console").addEventListener("click", () => {
    consoleTableau();
  });
});


// utilisation des fonctions (slide 45)
// utilisation des commentaires (slide 36)
// utilisation des boucles (slide 44)


function init() {
  for (let i = 0; i < persons.length; i++) {
    let p = persons[i];
    doInsert(p.nom, p.prenom, p.points);
  }
}


function doInsert(nom, prenom, points) {
  lignes++; // incrémente le numéro de ligne (slide 26)
  doInsertRowTable(lignes, nom, prenom, points);
}


function doInsertRowTable(num, nom, prenom, points) {
  const table = document.getElementById("person_table").getElementsByTagName("tbody")[0];
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td class="col_number">${num}</td>
    <td class="col_text">${nom}</td>
    <td class="col_text">${prenom}</td>
    <td class="col_text">${points}</td>
    <td class="col_chkbox"><input type="checkbox"></td>
  `;

  table.appendChild(newRow);
}


function consoleTableau() {
  console.table(persons);
}
