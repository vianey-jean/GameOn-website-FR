//Pour le selection du Modal

// --------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------- DECLARATIONS VARIABLES ------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //
// ------------------ Ce javascript contient toutes les variables utilisées dans d'autres fichiers javascripts-------------------- //

// ------------------------------------------------- DOM ELEMENTS ------------------------------------------------ //

const modal_Backgroud = document.querySelector(".bground"); // Constant pour le modal background
const modal_Btn = document.querySelectorAll(".modal-btn"); // Constant pour <button> "Je m'inscris"
const form_Data = document.querySelectorAll(".form_Data"); // Constant pour le modal Data
const form_DataConditions = form_Data[6]; // Variable pour element <div form-data> qui contient des cases à cocher
const span_Close = document.querySelectorAll(".close"); // Constant pour le <span> croix qui ferme le modal
const form = document.querySelector("form"); // Constant pour le <form>
const modal_Body = document.querySelector(".modal-body"); // Constant pour le contenar parent <form> & <div> "message thanks"
const textThanks = document.querySelector(".text-thanks"); // Constant pour le conteneur <div> avec "message merci" après un formulaire de validation réussi
const topNav = document.getElementById("myTopnav"); // Constant pour l'élément <header> contenant nav
const navIcon = document.querySelector(".icon"); // Constant pour l'élément <a> contenant l'icône Hamburger pour la navigation

// ---------------------------------------------------- SELECT--------------------------------------------------- //
// -------------------------- Variables pour chaque élément contenu dans la Nodelist Select ------------------------- //

const select_Prenom = document.querySelector("#first");
const select_Nom = document.querySelector("#last");
const select_Mail = document.querySelector("#email");
const select_Anniv = document.querySelector("#birthdate");
const select_Num = document.querySelector("#quantity");
const select_Radio = document.getElementsByName("#location");

// -------------------------------------------------- ERROR-DATA ------------------------------------------------- //
// ------------------- Variables pour chaque élément contenu dans la classe Nodelist "error-data"------------------- //

const infos_Erreur_Prenom = document.querySelector(".error-data_first");
const infos_Erreur_Nom = document.querySelector(".error-data_last");
const infos_Erreur_Mail = document.querySelector(".error-data_email");
const infos_Erreur_Anniv = document.querySelector(".error-data_birthdate");
const infos_Erreur_Num = document.querySelector(".error-data_quantity");
const infos_Erreur_Localise = document.querySelector(".error-data_location");
const infos_Erreur_Conditions = document.querySelector(".error-data_checkbox");


export{
modal_Backgroud,
modal_Btn,
form_Data,
form_DataConditions,
span_Close,
form,
modal_Body,
textThanks,
topNav,
navIcon,
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

    
}