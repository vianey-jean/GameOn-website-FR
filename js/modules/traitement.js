import * as vars from "./variables.js";



function launchModal() {
  vars.modal_Backgroud.style.display = "block";
    
  // fonction utilisée pour réinitialiser le formulaire si un formulaire précédent a été soumis
    
  function resetForm() {
    vars.form.reset();
  }
  // Appeler la réinitialisation de la fonction (réinitialiser le contenu du formulaire)
  resetForm();
  // Reset messages error
  vars.infos_Erreur_Prenom.textContent = "";
  vars.infos_Erreur_Nom.textContent = "";
  vars.infos_Erreur_Mail.textContent = "";
  vars.infos_Erreur_Anniv.textContent = "";
  vars.infos_Erreur_Num.textContent = "";
  vars.infos_Erreur_Localise.textContent = "";
  vars.infos_Erreur_Conditions.textContent = "";
  // Changer les bordures des entrées rouges ou vertes en bordures par défaut
  vars.select_Prenom.style.border = "0.8px solid #ccc";
  vars.select_Nom.style.border = "0.8px solid #ccc";
  vars.select_Mail.style.border = "0.8px solid #ccc";
  vars.select_Anniv.style.border = "0.8px solid #ccc";
  vars.select_Num.style.border = "0.8px solid #ccc";
  // Style utilisé pour afficher le formulaire et masquer le message "merci" si un formulaire précédent a été soumis
  vars.form.style.display = "block";
  vars.textThanks.style.display = "none";
}


// -------------------------------------------------- CLOSE MODAL ------------------------------------------------ //
// Fonction appelée pour fermer le modal en cliquant sur <span class="close">

// Declaration function
function closeModal() {
  vars.modal_Backgroud.style.display = "none";
};


export{
    launchModal, closeModal
};