// Générer un nombre aléatoire entre 1 et 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Vérifier si la réponse du joueur est correcte
const guess = Number(document.getElementById("guess").value);
if (guess === randomNumber) {
  // Afficher un message de félicitations
} else if (guess > randomNumber) {
  // Informer le joueur que sa proposition de nombre est trop élevée
} else {
  // Informer le joueur que sa proposition de nombre est trop basse
}


