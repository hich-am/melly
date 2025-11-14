"use strict"; // utilisation du mode strict (slide 51)


//manipulation du DOM (slides 45-109)

// attendre chargement dom
window.addEventListener("DOMContentLoaded", () => {

  
  const btnAdd = document.getElementById("btn_add");
  btnAdd.addEventListener("click", () => {
    doInsertRowTable(99, "nom", "prenom", 10);
  });
});
// utilisation des commentaires (slide 36)

// utilisation d un tableau (slide 38)

// utilisation d une fonction (slide 45)
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
