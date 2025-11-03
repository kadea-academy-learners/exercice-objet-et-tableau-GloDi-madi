// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
  const sum = notes.reduce((acc, note) => acc + note, 0);
  const average = sum / notes.length;
  if (average >= 10) {
    return "Réussi";
  } else {
    return "Échoué";
  }
}

// Exemple de tableau
const notes = [12, 8, 15, 9, 10];

// Appel de la fonction
console.log(averageNote(notes)); // Affiche "Réussi"
