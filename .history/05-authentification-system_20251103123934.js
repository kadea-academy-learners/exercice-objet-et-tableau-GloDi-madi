// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

// Base de données des utilisateurs
const baseDeDonnees = [];

// Fonction d'inscription
function signUp(nom, email, password, confirmPassword) {
  const existe = baseDeDonnees.find(user => user.email === email);
  if (existe) {
    return "Erreur : cet email est déjà utilisé.";
  }

  if (password !== confirmPassword) {
    return "Erreur : les mots de passe ne correspondent pas.";
  }

  const nouvelUtilisateur = {
    id: baseDeDonnees.length + 1,
    nom: nom,
    email: email,
    password: password,
    estConnecte: false,
    estBloque: false
  };

  baseDeDonnees.push(nouvelUtilisateur);
  return nouvelUtilisateur;
}

// Fonction de connexion
function login(email, password) {
  const utilisateur = baseDeDonnees.find(user => user.email === email);

  if (!utilisateur) {
    return "Erreur : utilisateur introuvable.";
  }

  if (utilisateur.password !== password) {
    return "Erreur : mot de passe incorrect.";
  }

  if (utilisateur.estBloque) {
    return "Erreur : cet utilisateur est bloqué.";
  }

  utilisateur.estConnecte = true;
  return utilisateur;
}

// Fonction pour afficher le bulletin scolaire
function showStudentBulletin(eleves) {
  return eleves.map(eleve => {
    const notes = eleve.notes;
    const moyenne =
      notes.length > 0
        ? parseFloat((notes.reduce((acc, n) => acc + n, 0) / notes.length).toFixed(2))
        : 0;

    let commentaire = "";
    if (moyenne >= 16) {
      commentaire = "Excellent";
    } else if (moyenne >= 14) {
      commentaire = "Très Bien";
    } else if (moyenne >= 12) {
      commentaire = "Bien";
    } else if (moyenne >= 10) {
      commentaire = "Passable";
    } else {
      commentaire = "À revoir";
    }

    return {
      nom: eleve.nom,
      moyenne: moyenne,
      commentaire: commentaire
    };
  });
}

// Export des fonctions
module.exports = {
  signUp,
  login,
  showStudentBulletin,
};
// Test inscription
console.log(signUp("Madi", "madi@example.com", "1234", "1234"));

// Test connexion
console.log(login("madi@example.com", "1234"));

// Test bulletin
const eleves = [
  { nom: "Madi", notes: [15, 17, 18] },
  { nom: "Glodi", notes: [12, 13, 11] },
  { nom: "Yuhe", notes: [9, 8, 10] },
  { nom: "Nathy", notes: [] }
];

console.log(showStudentBulletin(eleves));


module.exports = { baseDeDonnees, signUp, login };