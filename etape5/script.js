"use strict"; 

//let declaration (slide 51)
let lignes = 0;
let total_points = 0;

const persons = [
    { nom: "nom-1", prenom: "prénom-1", points: 5 },
    { nom: "nom-2", prenom: "prénom-2", points: 10 },
    { nom: "nom-3", prenom: "prénom-3", points: 15 }
];


Init();

function Init() {
    //loop for...of (slide 44)
    for (let p of persons) {
        doInsert(p.nom, p.prenom, p.points);
    }
}

function doInsert(nom, prenom, points) {
    lignes += 1;
    total_points += points;
    let num = lignes;
    doInsertRowTable(num, nom, prenom, points);
    update_summary();
}


function doInsertRowTable(num, nom, prenom, points) {
    //Récupérer l’élément tableau
    const table = document.getElementById("studentTable");

    //ligne de tableau
    //createElement (slid 104)
    const row = document.createElement("tr");

    //Affecter à l’élément row la valeur "row" à son attribut "class"
    //setAttribute (slid 105)
    row.setAttribute("class", "row");

    //Créer 5 éléments de type td (colonnes de tableau)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    //remplir le contenu de chaque colonne
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    col5.innerHTML = '<input type="checkbox" />';

    //affectation des classes
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    //Rajouter les colonnes à la ligne
    row.append(col1, col2, col3, col4, col5);

    //Rajouter la ligne au tableau
    table.appendChild(row);
}

function update_summary() {
    const element_lignes = document.getElementById("p1"); //getElementById (slide 61)
    const element_points = document.getElementById("p3");
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}


//console.log (slide 33)
function ConsoleTableau() {
    console.log(persons);
}

function doNewData() {
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    const nom = elt_nom.value.trim();
    const prenom = elt_prenom.value.trim();
    const points = parseInt(elt_points.value);

    //if statement (slide 24)
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        //alert (slide 116)
        window.alert("Formulaire incomplet !");
    } else {
        doInsert(nom, prenom, points);
        persons.push({ nom: nom, prenom: prenom, points: points });

        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}



//getElementById (slide 61)
//onclick (slide 20)
document.getElementById("consoleBtn").onclick = function () {
    ConsoleTableau();
};

