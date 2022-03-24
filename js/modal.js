import * as vars from "./modules/variables.js";
import { navbar, launchModal, closeModal } from "./modules/traitement.js";
import * as valid from "./modules/validation.js";
import * as events from "./modules/evenement.js";

// ---------------------------------------------- RESPONSIVE TOPNAV ---------------------------------------------- //
// ------------------------------- Evénement pour ajouter une classe pour le responsive design topnav ----------------------------- //

vars.navIcon.addEventListener("click", () => {
  if (vars.topNav.className === "topnav") {
    vars.topNav.className += " responsive";
  } else {
    vars.topNav.className = "topnav";
  }
});

// --------------------------------------- FORMULAIRE-DONNEES CONDITIONS/NEWSLETTER--------------------------------------- //
// -------------- Evénement pour ajouter une classe pour Nodelist form_Data contenant les "conditions d'utilisations"-------------- //

vars.form_DataConditions.classList.add("margin-conditions");

// -------------------------------------------- NAVIGATION POUR TOPNAV-------------------------------------------- //
// ------------------------ Événements pour la navigation en cliquant sur les éléments <a> dans la barre de navigation---------------------- //

navbar(vars.spanDetails, vars.spanEvents, vars.spanPropos, vars.spanContact);
navbar(vars.spanContact, vars.spanDetails, vars.spanEvents, vars.spanPropos);
navbar(vars.spanPropos, vars.spanDetails, vars.spanEvents, vars.spanContact);
navbar(vars.spanEvents, vars.spanPropos, vars.spanDetails, vars.spanContact);

// ------------------------------------------------- LANCEMENT MODAL ------------------------------------------------ //
// Fonction appelée pour lancer le formulaire modal en cliquant sur <button class="modal-btn">

// Appelle la fonction lauchModal avec l'événement "click" sur <button class="modal-btn">
vars.modal_Btn.forEach((btn) => btn.addEventListener("click", launchModal));

// -------------------------------------------------- FERMER MODALE------------------------------------------------ //
// Fonction appelée pour fermer le modal en cliquant sur <span class="close">

//Appelle la fonction closeModal avec l'événement "click" sur <span class="close">
vars.span_Close.forEach((span) => span.addEventListener("click", closeModal));

// --------------------------------------------------------------------------------------------------------------- //
// ------------------------------- ENTRÉES DE VALIDATION SOUS FORME SUR LES ÉVÉNEMENTS ENTRÉES/FOCUS ------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// --------------- Cette partie javascript gère les événements de validation en entrée pendant que l'utilisateur la remplit-------------- //

//------------------------------- FONCTIONS D'APPEL D'ÉVÉNEMENTS INPUT/FOCUSIN/FOCUSOUT -------------------------------- //
// ON INPUT : lorsque l'utilisateur écrit dans une entrée, il sera averti lorsque le contenu est valide ou non
// ON FOCUSIN : Même lorsque l'utilisateur n'a rien écrit, il sera notifié de ce qu'il doit écrire
// ON FOCUSOUT : Lorsque l'utilisateur quitte le focus, il sera notifié si son contenu est valide ou non

//---------------------------------------------------------------------------
// ENTRÉE PRÉNOM FOCUSING
//---------------------------------------------------------------------------
//Fonction de lancement pour PRENOM sur l'événement "INPUT
events.eventInputNames(
  vars.select_Prenom,
  vars.infos_Erreur_Prenom,
  "input",
  vars.couleur_Bordure_Valide
);
// Fonction de lancement pour PRENOM sur l'événement "FOCUSIN"
events.eventInputNames(
  vars.select_Prenom,
  vars.infos_Erreur_Prenom,
  "focusin",
  vars.couleur_Bordure_Valide
);
// Fonction de lancement pour PRENOM sur l'événement "FOCUSOUT"
events.eventInputNames(
  vars.select_Prenom,
  vars.infos_Erreur_Prenom,
  "focusout",
  vars.couleur_Bordure_Initiale
);

//---------------------------------------------------------------------------
// ENTRER NOM FOCUSING
//---------------------------------------------------------------------------
// Lancer la fonction pour NOM sur l'événement "INPUT"
events.eventInputNames(
  vars.select_Nom,
  vars.infos_Erreur_Nom,
  "input",
  vars.couleur_Bordure_Valide
);
// Fonction de lancement pour NOM sur l'événement "FOCUSIN"
events.eventInputNames(
  vars.select_Nom,
  vars.infos_Erreur_Nom,
  "focusin",
  vars.couleur_Bordure_Valide
);
// Fonction de lancement pour NOM sur l'événement "FOCUSOUT"
events.eventInputNames(
  vars.select_Nom,
  vars.infos_Erreur_Nom,
  "focusout",
  vars.couleur_Bordure_Initiale
);

//---------------------------------------------------------------------------
// ENTRÉE E-MAIL FOCUSING
//---------------------------------------------------------------------------
// Lancer la fonction pour EMAIL sur l'événement "INPUT"
events.eventselect_Mail(vars.select_Mail, "input", vars.couleur_Bordure_Valide);
// Fonction de lancement pour EMAIL sur l'événement "FOCUSIN"
events.eventselect_Mail(vars.select_Mail, "focusin", vars.couleur_Bordure_Valide);
// Fonction de lancement pour EMAIL sur l'événement "FOCUSOUT"
events.eventselect_Mail(vars.select_Mail, "focusout", vars.couleur_Bordure_Initiale);

//---------------------------------------------------------------------------
// INPUT BIRTHDATE FOCUSING
//---------------------------------------------------------------------------
// Lancer la fonction pour BIRTHDATE sur l'événement "INPUT
events.eventselect_Anniv("input", vars.couleur_Bordure_Valide);
// Fonction de lancement pour BIRTHDATE sur l'événement "FOCUSIN"
events.eventselect_Anniv("focusin", vars.couleur_Bordure_Valide);
// Fonction de lancement pour BIRTHDATE sur l'événement "FOCUSOUT"
events.eventselect_Anniv("focusout", vars.couleur_Bordure_Initiale);

//---------------------------------------------------------------------------
// MISE AU POINT SUR LE NUMÉRO D'ENTRÉE
//---------------------------------------------------------------------------
// Lancer la fonction pour les NUMBERS sur l'événement "INPUT"
events.eventInputQuantity(vars.select_Num, "input", vars.couleur_Bordure_Valide);
// Fonction de lancement pour NUMBERS sur l'événement "FOCUSIN"
events.eventInputQuantity(vars.select_Num, "focusin", vars.couleur_Bordure_Valide);
// Lancer la fonction pour NUMBERS sur l'événement "FOCUSOUT"
events.eventInputQuantity(
  vars.select_Num,
  "focusout",
  vars.couleur_Bordure_Initiale
);

//---------------------------------------------------------------------------
// CONCOURS DE LOCALISATION DES ENTRÉES AU CLIC
//---------------------------------------------------------------------------
events.eventInputLocalise();

//---------------------------------------------------------------------------
// SAISIR LES CONDITIONS AU CLIC
//---------------------------------------------------------------------------
events.eventInputConditions();


// ----------- Cette partie javascript gère le formulaire de validation lorsque l'utilisateur clique sur le bouton "soumettre"----------- //

//---------------------------------------- FONCTIONS D'APPEL SUR LA SOUMISSION D'ÉVÉNEMENT--------------------------------------- //

vars.form.addEventListener("submit", (event) => {
  // Empêcher la page de rechargement par défaut lors de la soumission
  event.preventDefault();
  // Fonction d'appel pour l'entrée PRENOM
  valid.validateInputNames(
    vars.select_Prenom,
    vars.infos_Erreur_Prenom,
    vars.couleur_Bordure_Initiale
  );
  // Fonction d'appel pour l'entrée Nom
  valid.validateInputNames(
    vars.select_Nom,
    vars.infos_Erreur_Nom,
    vars.couleur_Bordure_Initiale
  );
  // Fonction d'appel pour l'entrée EMAIL
  valid.validateselect_Mail(vars.couleur_Bordure_Initiale);
  // Fonction d'appel pour l'entrée Anniv
  valid.validateselect_Anniv(vars.couleur_Bordure_Initiale);
  // Fonction d'appel pour les NUMÉROS d'entrée
  valid.validateInputQuantity(vars.couleur_Bordure_Initiale);
  // Fonction d'appel pour Input LOCALIZATION CONTEST
  valid.validateLocalise();
  // Fonction d'appel pour l'entrée ACCEPTER LES CONDITIONS
  valid.validateConditions();

  // CONDITIONS POUR SOUMETTRE (Toutes les entrées de fonctions doivent retourner vrai)
  if (
    // Si la fonction pour l'entrée PRENOM renvoie faux
    !valid.validateInputNames(
      vars.select_Prenom,
      vars.infos_Erreur_Prenom,
      vars.couleur_Bordure_Initiale
    ) |
    // Si la fonction pour l'entrée LAST NAME retourne faux
    !valid.validateInputNames(
      vars.select_Nom,
      vars.infos_Erreur_Nom,
      vars.couleur_Bordure_Initiale
    ) |
    // Si la fonction pour Input EMAIL retourne faux
    !valid.validateselect_Mail(vars.couleur_Bordure_Initiale) |
    // Si la fonction pour Input BIRTHDATE retourne faux
    !valid.validateselect_Anniv(vars.couleur_Bordure_Initiale) |
    // Si la fonction pour l'entrée NUMBERS renvoie faux
    !valid.validateInputQuantity(vars.couleur_Bordure_Initiale) |
    // Si la fonction pour Input LOCALIZATION retourne faux
    !valid.validateLocalise() |
    // Si la fonction pour les CONDITIONS d'entrée renvoie faux
    !valid.validateConditions()
  ) {
    return false;
  } else {
    // Le formulaire est valide => le formulaire est caché
    vars.form.style.display = "none";
    // Le formulaire est valide => un "message de remerciement" s'affiche
    vars.textThanks.style.display = "block";
    // Le formulaire est valide => un bouton de fermeture s'affiche pour fermer le modal
    const buttonClose = document.querySelectorAll(".btn-close");
    // Le bouton de fermeture appelle la fonction closeModal au clic
    buttonClose.forEach((btnClose) =>
      btnClose.addEventListener("click", () => {
        closeModal();
      })
    );
    return true;
  }
});
