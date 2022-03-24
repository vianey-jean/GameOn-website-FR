import * as vars from "./variables.js";

// --------------------------------------------------------------------------------------------------------------- //
// ----------- Ce fichier javascript gère les entrées de validation pour les événements input/focusin/focusout/submit ----------- //

// -------------------------------------------- DECLARATION FUNCTIONS -------------------------------------------- //

//---------------------------------------------------------------------------
// FONCTION POUR SAISIR PRENOM/NOM (pour les événements)
//---------------------------------------------------------------------------
function validateInputNames(inputRefNodelist, errRefData, colorBorder) {
  if (
    // Conditions pour afficher le message d'erreur + changer la couleur de la police et la couleur de la bordure lorsque l'entrée n'est pas valide lors de l'envoi
    (inputRefNodelist.value.length < 2) |
    (inputRefNodelist.value.length > 200) |
    !inputRefNodelist.value.match(vars.regexNames)
  ) {
    inputRefNodelist.style.border = vars.couleur_Bordure_Erreur;
    errRefData.style.color = vars.couleur_Font_Erreur;
    return false;
  } else {
    errRefData.style.color = vars.couleur_Font_Valide;
    inputRefNodelist.style.border = colorBorder;
    return true;
  }
}

//---------------------------------------------------------------------------
// FONCTION POUR ENTRÉE EMAIL (pour les événements)
//---------------------------------------------------------------------------
function validateselect_Mail(colorBorder) {
  if (
    // Conditions pour afficher le message d'erreur + changer la couleur de la police et la couleur de la bordure lorsque l'entrée n'est pas valide lors de l'envoi
    (vars.select_Mail.value.length < 6) |
    (vars.select_Mail.value.length > 100) |
    !vars.select_Mail.value.match(vars.regexEmail)
  ) {
    vars.select_Mail.style.border = vars.couleur_Bordure_Erreur;
    vars.infos_Erreur_Mail.style.color = vars.couleur_Font_Erreur;
    return false;
  } else {
    vars.infos_Erreur_Mail.style.color = vars.couleur_Font_Valide;
    vars.select_Mail.style.border = colorBorder;
    return true;
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
  let dateBirthdate = vars.select_Anniv.valueAsDate;
  if (dateBirthdate === null) {
    // Condition lorsque l'utilisateur n'a pas encore rempli de valeurs (valueAsDate est null)
    vars.infos_Erreur_Anniv.style.color = vars.couleur_Font_Erreur;
    vars.select_Anniv.style.border = vars.couleur_Bordure_Erreur;
    return false;
  } else if (
    // Condition lorsque l'utilisateur a 18 ans dans l'année en cours
    (dateBirthdate.getFullYear() === vars.yearToday - 18 &&
      dateBirthdate.getMonth() > vars.monthToday) |
    (dateBirthdate.getFullYear() === vars.yearToday - 18 &&
      dateBirthdate.getMonth() === vars.monthToday &&
      dateBirthdate.getDate() > vars.dayToday) |
    // Condition lorsque les utilisateurs ont 17 ans ou moins et n'auront pas 18 ans l'année en cours
    (dateBirthdate.getFullYear() > vars.yearToday - 18) |
    !vars.select_Anniv.value.match(vars.regexBirthdate)
  ) {
    vars.infos_Erreur_Anniv.style.color = vars.couleur_Font_Erreur;
    vars.select_Anniv.style.border = vars.couleur_Bordure_Erreur;
    return false;
  } else {
    vars.infos_Erreur_Anniv.style.color = vars.couleur_Font_Valide;
    vars.select_Anniv.style.border = colorBorder;
    return true;
  }
}

//---------------------------------------------------------------------------
// FONCTION POUR SAISIR LES NUMÉROS (pour les événements)
//---------------------------------------------------------------------------
function validateInputQuantity(colorBorder) {
  if (
    // Conditions pour afficher le message d'erreur + changer la police et la couleur de la bordure lorsque l'entrée n'est pas valide
    (vars.select_Num.value.length < 1) |
    (vars.select_Num.value.length > 2) |
    !vars.select_Num.value.match(vars.regexNumbers)
  ) {
    vars.select_Num.style.border = vars.couleur_Bordure_Erreur;
    vars.infos_Erreur_Num.style.color = vars.couleur_Font_Erreur;
    return false;
  } else {
    vars.infos_Erreur_Num.style.color = vars.couleur_Font_Valide;
    vars.select_Num.style.border = colorBorder;
    return true;
  }
}

//---------------------------------------------------------------------------
// FONCTION POUR ENTRÉE RADIO (pour la soumission d'événement)
//---------------------------------------------------------------------------
// Fonction de validation input[type=radio] : Choisir un CONCOURS DE LOCALISATION

function validateLocalise() {
  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    vars.infos_Erreur_Localise.style.color = vars.couleur_Font_Erreur;
    return false;
  } else {
    vars.infos_Erreur_Localise.style.color = vars.couleur_Font_Valide;
    return true;
  }
}

//---------------------------------------------------------------------------
// FONCTION FOR INPUT CHECKBOX (pour la soumission d'événement)
//---------------------------------------------------------------------------
// Fonction pour l'entrée de validation [type=case à cocher] : ACCEPTER LES CONDITIONS

function validateConditions() {
  if (checkbox1.checked == false) {
    vars.infos_Erreur_Conditions.style.color = vars.couleur_Font_Erreur;
    return false;
  } else {
    vars.infos_Erreur_Conditions.style.color = vars.couleur_Font_Valide;
    return true;
  }
}

export {
  validateInputNames,
  validateselect_Mail,
  validateselect_Anniv,
  validateInputQuantity,
  validateLocalise,
  validateConditions,
};
