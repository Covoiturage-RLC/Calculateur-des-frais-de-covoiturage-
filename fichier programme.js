const disTot = document.getElementById("disTot");
const nbPers = document.getElementById("nbPers");
const nbVoit = document.getElementById("nbVoit");
const nbPass = document.getElementById("nbPass");
const prxKm = document.getElementById("prxKm");
const peage = document.getElementById("peage");
const ctTots = document.getElementById("ctTots");
const ctTotv = document.getElementById("ctTotv");
const ctBpp = document.getElementById("ctBpp");
const ctRpp = document.getElementById("ctRpp");
const ctDep10E = document.getElementById("ctDep10E");
const ctRetp = document.getElementById("ctRetp");
const ctRlc = document.getElementById("ctRlc");
const btnValider = document.getElementById("btnValider");

//--------------------------------
// Stockage et lecture des Data
//--------------------------------

//--------------------------------------
// Prise en compte des données saisies
//--------------------------------------
disTot.addEventListener("input", (e) => {
  if (isNaN(e.target.value)) {
    alert("Entrez un chiffre !");
    e.target.value = "";
  } else {
    disTot.value = Number(e.target.value);
  }
});
nbPers.addEventListener("input", (e) => {
  if (isNaN(e.target.value)) {
    alert("Entrez un chiffre !");
    e.target.value = "";
  } else {
    nbPers.value = Number(e.target.value);
  }
});
prxKm.addEventListener("input", (e) => {
  if (CheckDecimal(e.target.value)) {
    prxKm.value = Number(e.target.value);
  } else {
    alert("Entrez un chiffre !");
    e.target.value = "";
  }
});
peage.addEventListener("input", (e) => {
  if (CheckDecimal(e.target.value)) {
    peage.value = Number(e.target.value);
  } else {
    alert("Entrez un chiffre !");
    e.target.value = "";
  }
});

//---------------------------------------------------
// Bouton Valider : Validation des données saisies
//---------------------------------------------------
btnValider.addEventListener("click", (e) => {
  ctTots.value = "";


  //---Vérification des entrées
  if (disTot.value == 0) {
    alert("La distance totale doit être supérieure à 0 !");
    disTot.value = "";
  } else if ((nbPers.value == 3) | (nbPers.value > 35)) {
    alert("Le nbre de personnes doit être compris entre 4 et 35 !");
    nbPers.value = "";
  } else {
    nbVoit.value = 
    Math.ceil(Number(nbPers.value) / 5);
    nbPass.value = 
    Number (nbPers.value) - (nbVoit.value);  
  } if (prxKm.value == 0) {
    alert("Le prix au km doit être supérieur à 0 !");
    prxKm.value = "";
  } else {
    ctTots.value =
      Number(((disTot.value) * Number(prxKm.value)) + Number(peage.value)) * Number(nbVoit.value);
    ctTotv.value =
      Number(ctTots.value) / Number(nbVoit.value);
    ctBpp.value =
     Math.round ((Number(ctTots.value) / Number(nbPass.value)) * 100) / 100;
    ctRpp.value =
      Math.round (((Number(ctTotv.value) / 4)) * 100) / 100;
    ctDep10E.value = 
    result = Math.max(0,
    Math.round (((Number(ctBpp.value)) - 10) * 100) / 100);
    ctRetp.value =
      Math.round (Number(ctBpp.value) - Number(ctDep10E.value));
    ctRlc.value =
      Math.round (Number(ctTots.value) - ((Number(ctRetp.value) * Number(nbPass.value))));
        
  }
  
});


//------------------------------------------
// Fonction Vérifiant une entrée décimale
//------------------------------------------
function CheckDecimal(valInput) {
  let decimal = /^[-+]?[0-9]+\.[0-9]+$/;
  if (valInput.value.match(decimal)) {
    return true;
  } else {
    return false;
  }
  //---PB avec valInput.value
}
