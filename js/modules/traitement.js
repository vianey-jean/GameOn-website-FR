import * as vars from "./variables.js";

// --------------------------------------------------------------------------------------------------------------- //
// -------------------- Ce javascript contient des fonctions pour interagir avec la mise en page HTML/CSS ---------------------- //

// -------------------------------------------- NAVIGATION FOR TOPNAV -------------------------------------------- //
// ------------------------ Événements pour la navigation en cliquant sur les éléments <a> dans la barre de navigation ---------------------- //

// Fonction de déclaration
function navbar(spanActive, spanInactive1, spanInactive2, spanInactive3) {
  spanActive.addEventListener("click", () => {
    // Ajouter la classe "active" à l'élément <a> activé
    spanActive.classList.add("active");
    // Supprimer la classe "active" des autres éléments <a>
    spanInactive1.classList.remove("active");
    spanInactive2.classList.remove("active");
    spanInactive3.classList.remove("active");
  });
}

// ------------------------------------------------- LAUNCH MODAL ------------------------------------------------ //
// Fonction appelée pour lancer le formulaire modal en cliquant sur <button class="modal-btn">

// Declaration function
function launchModal() {
  vars.modal_Backgroud.style.display = "block";
  // fonction utilisée pour réinitialiser le formulaire si un formulaire précédent a été soumis
  function resetForm() {
    vars.form.reset();
  }
  // Appeler la réinitialisation de la fonction (réinitialiser le contenu du formulaire)
  resetForm();
  // Erreur de réinitialisation des messages
  vars.infos_Erreur_Prenom.textContent = "";
  vars.infos_Erreur_Nom.textContent = "";
  vars.infos_Erreur_Mail.textContent = "";
  vars.infos_Erreur_Anniv.textContent = "";
  vars.infos_Erreur_Num.textContent = "";
  vars.infos_Erreur_Localise.textContent = "";
  vars.infos_Erreur_Conditions.textContent = "";
  // Style utilisé pour afficher le formulaire et masquer le message "merci" si un formulaire précédent a été soumis
  vars.form.style.display = "block";
  vars.textThanks.style.display = "none";
}
// -------------------------------------------------- CLOSE MODAL ------------------------------------------------ //
// Fonction appelée pour fermer le modal en cliquant sur <span class="close">

// Declaration function
function closeModal() {
  vars.modal_Backgroud.style.display = "none";
}

export { navbar, launchModal, closeModal };
