import * as vars from "./variables.js";

// --------------------------------------------------------------------------------------------------------------- //
// ----------- Ce fichier javascript gère les entrées de validation pour les événements input/focusin/focusout/submit ----------- //

// -------------------------------------------- DECLARATION FUNCTIONS -------------------------------------------- //

//---------------------------------------------------------------------------
// FONCTION POUR SAISIR PRENOM/NOM (pour les événements)
//---------------------------------------------------------------------------
function validateInputNames(inputRefNodelist, errRefData, colorBorder) {// Validation nom et prenoms
  if (
    // Conditions pour afficher le message d'erreur + changer la couleur de la police 
    //et la couleur de la bordure lorsque l'entrée n'est pas valide lors de l'envoi
    (inputRefNodelist.value.length < 2) | //Nombre de caractere est inferieur à 2 ou
    (inputRefNodelist.value.length > 200) | // Nombre de caractere est superieur à 200 ou
    !inputRefNodelist.value.match(vars.regexNames)// Diferrent du regexNames
  ) {// Alors
    errRefData.textContent = vars.msg_Erreur_Nom_Prenom;// Le message sera message erreur
    return false;
  } else {// Si non
    inputRefNodelist.style.border = colorBorder;// Le couleur Bordure sera couleur valide
    errRefData.innerHTML = vars.icon_Valide;// Icon valide
    return true;
  }
}

//---------------------------------------------------------------------------
// FONCTION POUR ENTRÉE EMAIL (pour les événements)
//---------------------------------------------------------------------------
function validateselect_Mail(colorBorder) {
  if (//si
    (vars.select_Mail.value.length < 6) | //si longeur est inferieur à 6
    (vars.select_Mail.value.length > 100) | // si longeur est superieur à 100
    !vars.select_Mail.value.match(vars.regexEmail) // si le caractère n'est pas dans le regex
  ) {//alors
    vars.infos_Erreur_Mail.textContent = vars.msg_Erreur_Mail;// regex erreur
    return false;//retour erreur
  } else {//si non
    vars.infos_Erreur_Mail.innerHTML = vars.icon_Valide;// icon valide
    vars.select_Mail.style.border = colorBorder; //couleur valide
    return true;//retour vrai
  }
}

//---------------------------------------------------------------------------
// FONCTION POUR SAISIR LA DATE DE NAISSANCE (pour la soumission d'événement)
//---------------------------------------------------------------------------
// Entrée valide/invalide en calculant l'âge de l'utilisateur en fonction de la date actuelle
// Age minimum requis au moment de l'inscription : 18 ans

function validateselect_Anniv(colorBorder) {
 // valueAsDate collecte la date enregistrée sur <input> Birthdate au format égal à Date.now()
  // Cela permet d'utiliser getFullYear(), getMonth() et getDate() pour comparer les valeurs avec les valeurs de date actuelles
  let dateBirthdate = vars.select_Anniv.valueAsDate;// decralation variable date brithdate
  if (dateBirthdate === null) {// si le variable égale a nul
    // Condition lorsque l'utilisateur n'a pas encore rempli de valeurs (valueAsDate est null)
    vars.infos_Erreur_Anniv.textContent = vars.msg_Erreur_Anniv;// message erreur
    return false;// retour erreur
  } else if (// si non si
    // Condition lorsque l'utilisateur a 18 ans dans l'année en cours
    (dateBirthdate.getFullYear() === vars.yearToday - 18 &&// l'année de l'anninv égale année cette annee mois 18 et
      dateBirthdate.getMonth() > vars.monthToday) |// le mois de l'anniv supperieur du mois ajourd'hui ou
    (dateBirthdate.getFullYear() === vars.yearToday - 18 && // l'année de l'anninv égale année cette annee mois 18 et
      dateBirthdate.getMonth() === vars.monthToday && // le mois de l'anniv égale du mois ajourd'hui et
      dateBirthdate.getDate() > vars.dayToday) |//le jour de l'anniv supperieur du jour ajourd' ou
    // Condition lorsque les utilisateurs ont 17 ans ou moins et n'auront pas 18 ans l'année en cours
    (dateBirthdate.getFullYear() > vars.yearToday - 18) | //l'année de l'anninv égale année cette annee mois 18 ou
    !vars.select_Anniv.value.match(vars.regexBirthdate) //le caractere de l'anniv pareille que du regex
  ) {//alors
    vars.infos_Erreur_Anniv.textContent = vars.msg_Erreur_Anniv;//Message erreur anniv
    return false;//retour faux
  } else {//si non
    vars.infos_Erreur_Anniv.innerHTML = vars.icon_Valide;//icon valide
    vars.select_Anniv.style.border = colorBorder;//couleur valide
    return true;//retourn vrai
  }
}

//---------------------------------------------------------------------------
// FONCTION POUR SAISIR LES NUMÉROS (pour les événements)
//---------------------------------------------------------------------------
function validateInputQuantity(colorBorder) {
  if (
    // Conditions pour afficher le message d'erreur + changer la police et la couleur de la bordure lorsque l'entrée n'est pas valide
    (vars.select_Num.value.length < 1) | //Longeur caractere inferieur à 1 ou
    (vars.select_Num.value.length >2) | //Longeur caractere inferieur à 2
    !vars.select_Num.value.match(vars.regexNumbers)// different du regex
  ) {//alors
    vars.infos_Erreur_Num.textContent = vars.msg_Erreur_Num;// message erreur
    return false;// retourn faux
  } else {// si non
    vars.infos_Erreur_Num.innerHTML = vars.icon_Valide;// icon valide
    vars.select_Num.style.border = colorBorder;// couleur bordure valude
    return true;//retourn vrai
  }
}

//---------------------------------------------------------------------------
// FONCTION POUR ENTRÉE RADIO (pour la soumission d'événement)
//---------------------------------------------------------------------------
// Fonction de validation input[type=radio] : Choisir un CONCOURS DE LOCALISATION

function validateLocalise() {
  if ( // si
    location1.checked == false &&//selection 1 n'est pas valide et
    location2.checked == false &&//selection 2 n'est pas valide et
    location3.checked == false &&//selection 3 n'est pas valide et
    location4.checked == false &&//selection 4 n'est pas valide et
    location5.checked == false &&//selection 5 n'est pas valide et
    location6.checked == false//selection 6 n'est pas valide 
  ) { //alors
    vars.infos_Erreur_Localise.textContent = vars.msg_Erreur_Localise;//message erreur
    return false;//retourn erreur
  } else {//si non
    vars.infos_Erreur_Localise.innerHTML = vars.icon_Valide;//couleur icon valide
    return true;// retourn vrai
  }
}

//---------------------------------------------------------------------------
// FONCTION FOR INPUT CHECKBOX (pour la soumission d'événement)
//---------------------------------------------------------------------------
// Fonction pour l'entrée de validation [type=case à cocher] : ACCEPTER LES CONDITIONS

function validateConditions() {
  if (checkbox1.checked == false) {// si le premier n'est pas selectionner
    vars.infos_Erreur_Conditions.textContent = vars.msg_Erreur_Conditions;//message erreur
    return false;//retourn faux
  } else {//si non
    vars.infos_Erreur_Conditions.innerHTML = vars.icon_Valide;//icon valide
    return true;//retourn vrai
  }
}

export {//Export tous les fonction
  validateInputNames,
  validateselect_Mail,
  validateselect_Anniv,
  validateInputQuantity,
  validateLocalise,
  validateConditions,
};
