//------------1- -Creation du variables
//------------2- Export des Variables
//------------3- Création des Fonctions
//------------4- export des Fonctions
//------------5- Traitement avec fonctions
//------------6- Export du Traitement
//------------7- Comparaison du resultat
//------------8- le resultat sera ok ou KO
//------------9- Fermeture du Modal

//J'importe les variables dans variables.js et des fonction dans traitement.js

import * as vars from "./modules/variables.js";
import { launchModal,closeModal} from "./modules/traitement.js";


// ------------------------------------------------- LAUNCH MODAL ------------------------------------------------ //
// Fonction appelée pour lancer le formulaire modal en cliquant sur <button class="modal-btn">

// Appelle la fonction lauchModal avec l'événement "click" sur <button class="modal-btn">


vars.modal_Btn.forEach((btn) => btn.addEventListener("click", launchModal));

// Appelle la fonction closeModal avec l'événement "click" sur <span class="close">
vars.span_Close.forEach((span) => span.addEventListener("click", closeModal));
