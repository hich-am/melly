"use strict"; // utilisation du mode strict (slide 51)

// utilisation de let pour declarer les variables (slide 51)



let lignes = 0;
let total_points = 0;

let persons = [
  { nom: "nom-1", prenom: "prenom-1", points: 5 },
  { nom: "nom-2", prenom: "prenom-2", points: 10 },
  { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
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
  for (let p of persons) {
    doInsert(p.nom, p.prenom, p.points);
  }
}

// insertion d une nouvelle ligne et mise a jour du resume
function doInsert(nom, prenom, points) {
  lignes++;
  total_points += points;
  doInsertRowTable(lignes, nom, prenom, points);
  update_summary();
}

// cree une ligne dans le tableau HTML
function doInsertRowTable(num, nom, prenom, points) {
  const tbody = document.querySelector("#person_table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${num}</td>
    <td>${nom}</td>
    <td>${prenom}</td>
    <td>${points}</td>
    <td><input type="checkbox"></td>
  `;
  tbody.appendChild(row);
}

// Mettre a jour le texte du resume 
function update_summary() {
  document.getElementById("summary_lines").textContent = `${lignes} ligne(s)`;
  document.getElementById("summary_points").textContent = `Totale point(s)= ${total_points}`;
}

// afficher tableau persons dans la console
function consoleTableau() {
  console.table(persons);
}
