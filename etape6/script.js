"use strict"; // utilisation du mode strict (slide 51)

// utilisation de LET (slide 51)

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
    doNewData();
  });

  document.getElementById("btn_console").addEventListener("click", () => {
    consoleTableau();
  });

  document.getElementById("btn_del").addEventListener("click", () => {
    deleteRow();
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

// cree une ligne dans le tableau 
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

// resume update
function update_summary() {
  document.getElementById("summary_lines").textContent = `${lignes} ligne(s)`;
  document.getElementById("summary_points").textContent = `Totale point(s)= ${total_points}`;
}

// ajout de elements
function doNewData() {
  const nom = document.getElementById("input_nom").value.trim();
  const prenom = document.getElementById("input_prenom").value.trim();
  const points = Number(document.getElementById("input_points").value);

  if (nom === "" || prenom === "" || isNaN(points) || points < 0) {
    alert("Veuillez remplir correctement tous les champs !");
    return;
  }

  persons.push({ nom, prenom, points });
  doInsert(nom, prenom, points);

  document.getElementById("input_nom").value = "";
  document.getElementById("input_prenom").value = "";
  document.getElementById("input_points").value = "";
}


function consoleTableau() {
  console.table(persons);
}

// supprission dees lignes 
function deleteRow() {
  const tbody = document.querySelector("#person_table tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  // Indices des lignes à supprimer (dans le tableau persons)
  const toDelete = [];

  rows.forEach((row, index) => {
    const checkbox = row.querySelector("input[type='checkbox']");
    if (checkbox && checkbox.checked) {
      // updatedu total 
      const points = Number(row.children[3].textContent);
      total_points -= points;

      tbody.removeChild(row);
      toDelete.push(index);
      lignes--;
    }
  });

  toDelete.reverse().forEach(i => persons.splice(i, 1));

  // update les numéros
  Array.from(tbody.querySelectorAll("tr")).forEach((row, i) => {
    row.children[0].textContent = i + 1;
  });

  update_summary();
}
