// --------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------- DÉCLARATIONS VARIABLES ------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// ------------------ Ce javascript contient toutes les variables utilisées dans d'autres fichiers javascripts -------------------- //

// ------------------------------------------------- ÉLÉMENTS DOM ------------------------------------------------ //

const modal_Backgroud = document.querySelector(".bground"); // Const pour le fond modal
const modal_Btn = document.querySelectorAll(".modal-btn"); // Const pour <bouton> "Je m'inscris"
const form_Data = document.querySelectorAll(".form_Data"); // Const pour les données modales
const form_DataConditions = form_Data[6]; // Variable pour l'élément <div form-data> qui contient des cases à cocher
const span_Close = document.querySelectorAll(".close"); // Const pour <span> croix qui ferme modal
const form = document.querySelector("form"); // Const pour <formulaire>
const modal_Body = document.querySelector(".modal-body"); // Const pour le conteneur parent de <form> & <div> "message thanks"
const textThanks = document.querySelector(".text-thanks"); // Const pour le conteneur <div> avec "message merci" après un formulaire de validation réussi
const topNav = document.getElementById("myTopnav"); // Const pour l'élément <header> contenant nav
const navIcon = document.querySelector(".icon"); // Const pour l'élément <a> contenant l'icône Hamburger pour la navigation
// ---------------------------------------------------- INPUTS --------------------------------------------------- //
// -------------------------- Variables pour chaque élément contenu dans la Nodelist  ------------------------- //

const select_Prenom = document.querySelector("#first");
const select_Nom = document.querySelector("#last");
const select_Mail = document.querySelector("#email");
const select_Anniv = document.querySelector("#birthdate");
const select_Num = document.querySelector("#quantity");
const select_Radio = document.getElementsByName("#location");

// -------------------------------------------------- ERREUR-DONNEES ------------------------------------------------- //
// ------------------- Variables pour chaque élément contenu dans la classe Nodelist "error-data" ------------------- //

const infos_Erreur_Prenom = document.querySelector(".error-data_first");
const infos_Erreur_Nom = document.querySelector(".error-data_last");
const infos_Erreur_Mail = document.querySelector(".error-data_email");
const infos_Erreur_Anniv = document.querySelector(".error-data_birthdate");
const infos_Erreur_Num = document.querySelector(".error-data_quantity");
const infos_Erreur_Localise = document.querySelector(".error-data_location");
const infos_Erreur_Conditions = document.querySelector(".error-data_checkbox");

// ---------------------------------------------------- TOPNAV --------------------------------------------------- //
// ------------------------- Variables pour chaque élément <span> contenu dans le <topnav> ------------------------- //

const spanDetails = document.querySelector("#navbar-details");
const spanPropos = document.querySelector("#navbar-propos");
const spanContact = document.querySelector("#navbar-contact");
const spanEvents = document.querySelector("#navbar-events");

// ----------------------------------------------- MESSAGES ERRORS ----------------------------------------------- //
// ----------------------- Variables pour chaque message d'erreur affiché sur <div error-data> ------------------------ //

let msg_Erreur_Nom_Prenom =
  "* Entre 2 et 200 caractères, sans chiffre ni caractères spéciaux";
let msg_Erreur_Mail =
  "* Veuillez entrer une adresse mail valide (max 100 caractères)";
let msg_Erreur_Anniv =
  "* Vous devez avoir au moins 18 ans au moment de l'inscription";
let msg_Erreur_Num = "* Veuillez entrer un nombre entre 0 et 99";
let msg_Erreur_Localise = "* Veuillez cocher une localisation";
let msg_Erreur_Conditions = "* Veuillez accepter les conditions d'utilisation";

// -------------------------------------------------- STYLE CSS -------------------------------------------------- //
// --------------------------- Variables pour le style CSS affichées dans <div error-data> ----------------------------- //

//let couleur_Font_Erreur = "#ff0000";
//let couleur_Font_Valide = "green";
//let couleur_Bordure_Erreur = "2.8px solid #ff0000";
//let couleur_Bordure_Valide = "2.8px solid green";
let couleur_Bordure_Initiale = "1px solid #ccc";
let icon_Valide = '<i  id="ok" class="fa fa-check "></i> ';

// ------------------------------------------------- INNER HTML -------------------------------------------------- //
// ------------------- Variables pour innerHTML affichées pour le message de remerciement après l'envoi --------------------- //

let msg_Valide =
  '<p class="txt-thanks">Merci pour votre inscription  <p><button class="btn-close">Fermer</button>';

// -------------------------------------------------- DATE NOW --------------------------------------------------- //
// -------------------------- Variables pour collecter la date actuelle (jour, mois et année) ---------------------------- //

let today = new Date();
let dayToday = today.getDate();
let monthToday = today.getMonth();
let yearToday = today.getFullYear();

// ---------------------------------------------------- REGEX ---------------------------------------------------- //
// -------------------------------- Regex pour les entrées [type=text/email/date/number] ------------------------------- //

const regexNames =
  //   /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ,\'\.\s-]{2,50}$/g;
  /^[a-zA-ZÀ-ú\-\s]*/g;
const regexEmail =
  /^([\w/\_\\!#$%&£'\]\[*+=?^`{|}~"()\.,:;<>@-]{1,}[\@][a-zA-Z]{1,}[\.][a-zA-Z]{2,})$/;
const regexBirthdate =
  /^(19[0-9][0-9]|2[0-1][0-9][0-9])\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/;
const regexNumbers = /^([0-9]|[0-9][0-9])$/;

export {
  modal_Backgroud,
  modal_Btn,
  form_Data,
  form_DataConditions,
  span_Close,
  form,
  modal_Body,
  textThanks,
  select_Prenom,
  select_Nom,
  select_Mail,
  select_Anniv,
  select_Num,
  select_Radio,
  infos_Erreur_Prenom,
  infos_Erreur_Nom,
  infos_Erreur_Mail,
  infos_Erreur_Anniv,
  infos_Erreur_Num,
  infos_Erreur_Localise,
  infos_Erreur_Conditions,
  spanDetails,
  spanPropos,
  spanContact,
  spanEvents,
  msg_Erreur_Nom_Prenom,
  msg_Erreur_Mail,
  msg_Erreur_Anniv,
  msg_Erreur_Num,
  msg_Erreur_Localise,
  msg_Erreur_Conditions,
  //couleur_Font_Valide,
  //couleur_Font_Erreur,
  //couleur_Bordure_Erreur,
  //couleur_Bordure_Valide,
  couleur_Bordure_Initiale,
  icon_Valide,
  msg_Valide,
  today,
  dayToday,
  monthToday,
  yearToday,
  regexNames,
  regexEmail,
  regexBirthdate,
  regexNumbers,
  navIcon,
  topNav,
};
