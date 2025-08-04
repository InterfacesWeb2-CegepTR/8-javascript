//EXERCICE 8.2
console.log("Exercice 8.2 - Variables de base");

// 1. Votre nom doit être sous forme de "châine de caractères".
let monNom = "Jean Dupont";

// 2. Votre âge doit être un "nombre".
let monAge = 30;

// 3. Si vous aimez le chocolat, créez une variable booléenne (vrai/faux).
let aimeLeChocolat = true;

// Pour afficher les valeurs dans la console, utilisez console.log() :
console.log("Mon nom : " + monNom); // Devrait afficher "Mon nom : Jean Dupont"
console.log("Mon âge : " + monAge); // Devrait afficher "Mon âge :  30"
console.log("Aime le chocolat : " + aimeLeChocolat); // Devrait afficher "Aime le chocolat : true"

//-------------------------------------------------------------------

//EXERCICE 8.3
console.log("\n\n") //Sauts de ligne dans la console
console.log("Exercice 8.3 - Calcul de l'année de naissance");

// Utilisez une variable pour stocker l'année actuelle. Puis calculez l'année de naissance basée sur l'âge et affichez-la à l’aide de console.log().
let anneeActuelle = 2023; // Remplacez par l'année actuelle
let age = 30; // Remplacez par votre âge
let anneeDeNaissance = anneeActuelle - age; // Calcule l'année de naissance
console.log("Année de naissance : " + anneeDeNaissance); // Affiche la valeur dans la console

//-------------------------------------------------------------------

//EXERCICE 8.4
console.log("\n\n") //Sauts de ligne dans la console
console.log("Exercice 8.4 - Conditions logiques");

let temperatureMars = -20;
let temperatureTerre = 20;
let missionSpatialeReussie = true;

//Est-ce que la température sur Mars est plus basse que celle sur Terre ET la mission spatiale est réussie ?
let condition1 = temperatureMars < temperatureTerre && missionSpatialeReussie;
console.log("Condition 1 (Mars < Terre ET mission réussie) : " + condition1);

//Est-ce que la température sur Mars est égale à celle sur Terre OU la température sur Terre est supérieure à 0°C ?
let condition2 = temperatureMars === temperatureTerre || temperatureTerre > 0;
console.log("Condition 2 (Mars = Terre OU Terre > 0°C) : " + condition2);

//Est-ce que la mission spatiale a échoué ?
let missionEchouee = !missionSpatialeReussie; // Négation de la variable missionSpatialeReussie
console.log("Mission spatiale échouée : " + missionEchouee);

//Est-ce que la température sur Terre est supérieure ou égale à 15°C ET que la température sur Mars n'est pas égale à -60°C ?
let condition3 = temperatureTerre >= 15 && temperatureMars !== -60;
console.log("Condition 3 (Terre >= 15°C ET Mars != -60°C) : " + condition3);

//-------------------------------------------------------------------

//EXERCICE 8.5
console.log("\n\n") //Sauts de ligne dans la console
console.log("Exercice 8.5 - Recommandation de tenue en fonction de la température");

// Demandez à l'utilisateur d'entrer la température en Celsius
let temperatureCelsius = 26;

// Utilisez des déclarations if, else if et else pour recommander une tenue
if (temperatureCelsius >= 30) {
    console.log("Recommandation : Portez des vêtements légers et des lunettes de soleil.");
} else if (temperatureCelsius >= 20 && temperatureCelsius <= 29) {
    console.log("Recommandation : Portez une tenue décontractée.");
} else {
    console.log("Recommandation : Portez des vêtements chauds et prenez un parapluie en cas de pluie.");
}

//-------------------------------------------------------------------

//Exercice 10.6
console.log("\n\n") //Sauts de ligne dans la console
console.log("Exercice 8.6 - Calcul de la moyenne des notes");

let noteMaths = 15;
let noteFrancais = 18;
let noteHistoire = 12;

function calculerMoyenne() {    
    // Calculez la moyenne des notes
    let sommeDesNotes = noteMaths + noteFrancais + noteHistoire;
    let nombreDeMatieres = 3; // Nombre de matières
    let moyenne = sommeDesNotes / nombreDeMatieres;

    // Retournez la moyenne
    return moyenne;
}

//Appel de la fonction pour calculer la moyenne
let resultat = calculerMoyenne();

// Affichage du résultat
console.log("La moyenne des notes est : " + resultat);

//-------------------------------------------------------------------

//Exercice 8.7
console.log("\n\n") //Sauts de ligne dans la console
console.log("Exercice 8.7 - Vérification de l'âge pour conduire");

let agePersonne = 22;

function verifierSiPeutConduire(age) {    
    if (age >= 18) {
        return true; // La personne peut conduire
    } else {
        return false; // La personne ne peut pas conduire
    }
}

// Appel de la fonction pour vérifier si la personne peut conduire
let peutConduire = verifierSiPeutConduire(agePersonne)

if (peutConduire) {
    console.log("La personne peut conduire.");
}else {
    console.log("La personne ne peut pas conduire.");
}

//-------------------------------------------------------------------

//Exercice 8.8
console.log("\n\n") //Sauts de ligne dans la console
console.log("Exercice 8.8 - Vérification du mot de passe");

let motDePasseSaisi = "motIncorrect";
let motDePasseStocke = "motCorrect";  

function verifierMotDePasse(motDePasseSaisi, motDePasseStocke) {
    if (motDePasseSaisi === motDePasseStocke) {
        return true; // Mot de passe correct
    } else {
        return false; // Mot de passe incorrect
    }
}

// Appel de la fonction pour vérifier le mot de passe
let motDePasseValide = verifierMotDePasse(motDePasseSaisi, motDePasseStocke);

if (motDePasseValide) {
    console.log("Mot de passe correct.");
}   else {
    console.log("Mot de passe incorrect.");
}



