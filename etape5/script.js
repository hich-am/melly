"use strict";



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

  // event clic sur ajouter
  document.getElementById("btn_add").addEventListener("click", () => {
    doNewData();
  });

  // bouton xonsole
  document.getElementById("btn_console").addEventListener("click", () => {
    consoleTableau();
  });
});

// utilisation des fonctions (slide 45)
// utilisation des commentaires (slide 36)
// utilisation des tableau (slide 38)

function init() {
  for (let p of persons) {
    doInsert(p.nom, p.prenom, p.points);
  }
}

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

// mettre a jour le texte du resume
function update_summary() {
  document.getElementById("summary_lines").textContent = `${lignes} ligne(s)`;
  document.getElementById("summary_points").textContent = `Totale point(s)= ${total_points}`;
}

//gere l ajout de nouvelles donnees via les champs de saisie
function doNewData() {
  const nom = document.getElementById("input_nom").value.trim();
  const prenom = document.getElementById("input_prenom").value.trim();
  const points = Number(document.getElementById("input_points").value);

  // Vérification basique des champs
  if (nom === "" || prenom === "" || isNaN(points) || points < 0) {
    alert("Veuillez remplir correctement tous les champs.");
    return;
  }

  // Ajout dans le tableau et dans la liste JS
  persons.push({ nom, prenom, points });
  doInsert(nom, prenom, points);

  // reinitialisation des champs
  document.getElementById("input_nom").value = "";
  document.getElementById("input_prenom").value = "";
  document.getElementById("input_points").value = "";
}

// Affiche le tableau dans la console
function consoleTableau() {
  console.table(persons);
}
