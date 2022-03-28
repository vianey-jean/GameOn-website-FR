import * as vars from "./variables.js";
import * as valid from "./validation.js";

// --------------------------------------------------------------------------------------------------------------- //
// ------------------------------- ENTRÉES DE VALIDATION SOUS FORME SUR LES ÉVÉNEMENTS ENTRÉES/FOCUS------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// --------------- Ce fichier javascript gère les événements de validation en entrée pendant que l'utilisateur le remplit -------------- //

// -------------------------------------------- FONCTIONS DE DÉCLARATION -------------------------------------------- //

//---------------------------------------------------------------------------
// FONCTION POUR SAISIR PRENOM & NOM (sur événements input/focusin/focusout)
//---------------------------------------------------------------------------

function eventInputNames(
  inputRefNodelist,
  errRefData,
  eventInput,
  styleBorderElse
) {
  inputRefNodelist.addEventListener(eventInput, () => {
    // Remplacer les espaces blancs successifs par un seul espace blanc et refuser les espaces blancs dans le premier caractère
    inputRefNodelist.value = inputRefNodelist.value.replace(/[\s]{2,}/g, " ");
    inputRefNodelist.value = inputRefNodelist.value.replace(/^[\s]/, "");
    valid.validateInputNames(inputRefNodelist, errRefData, styleBorderElse);
  });
}

//---------------------------------------------------------------------------
// FONCTION POUR ENTRÉE EMAIL (sur événements input/focusin/focusout)
//---------------------------------------------------------------------------

function eventselect_Mail(inputRefNodelist, eventInput, colorBorder) {
  inputRefNodelist.addEventListener(eventInput, () => {
    inputRefNodelist.value = inputRefNodelist.value.trim();
    valid.validateselect_Mail(colorBorder);
  });
}

//---------------------------------------------------------------------------
// FONCTION POUR L'ENTRÉE DE LA DATE DE NAISSANCE (sur les événements d'entrée/focusin/focusout)
//---------------------------------------------------------------------------
// entrée valide/invalide en calculant l'âge de l'utilisateur en fonction de la date actuelle
// Age minimum requis au moment de l'inscription : 18 ans

function eventselect_Anniv(
  typeEvent, // Type d'événement (entrée, focusin ou focusout) - chaîne
  colorBorder // Style de bordure à appliquer
) {
  vars.select_Anniv.addEventListener(typeEvent, () => {
    valid.validateselect_Anniv(colorBorder);
  });
}

//---------------------------------------------------------------------------
// FONCTION POUR SAISIR LES NUMÉROS (sur événements input/focusin/focusout)
//---------------------------------------------------------------------------

function eventInputQuantity(inputRefNodelist, eventInput, colorBorder) {
  inputRefNodelist.addEventListener(eventInput, () => {
    inputRefNodelist.value = inputRefNodelist.value.trim();
    valid.validateInputQuantity(colorBorder);
  });
}

//---------------------------------------------------------------------------
// FONCTION POUR ENTRÉE RADIO (sur événement "clic")
//---------------------------------------------------------------------------

function eventInputLocalise() {
  vars.select_Radio.forEach((radio) =>
    radio.addEventListener("click", () => {
      valid.validateLocalise();
    })
  );
}

//---------------------------------------------------------------------------
// FONCTION POUR SAISIE CHECKBOX (sur événement "clic")
//---------------------------------------------------------------------------

function eventInputConditions() {
  checkbox1.addEventListener("click", () => {
    valid.validateConditions();
  });
}

export {
  eventInputNames,
  eventselect_Mail,
  eventInputQuantity,
  eventselect_Anniv,
  eventInputLocalise,
  eventInputConditions,
};
