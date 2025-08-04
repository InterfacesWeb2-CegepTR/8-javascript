//EXERCICE 8.2
console.log("Exercice 8.2 - Variables de base");

// 1. Votre nom doit être sous forme de "châine de caractères".

// 2. Votre âge doit être un "nombre".

// 3. Si vous aimez le chocolat, créez une variable booléenne (vrai/faux).

// Pour afficher les valeurs dans la console, utilisez console.log() :

//-------------------------------------------------------------------

//EXERCICE 8.3
console.log("Exercice 8.3 - Calcul de l'année de naissance");

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
let condition2 = "Remplacez par une condition logique";
console.log("Condition 2 (Mars = Terre OU Terre > 0°C) : " + condition2);

//Est-ce que la mission spatiale a échoué ?
let missionEchouee = "Remplacez par une condition logique";
console.log("Mission spatiale échouée : " + missionEchouee);

//Est-ce que la température sur Terre est supérieure ou égale à 15°C ET que la température sur Mars n'est pas égale à -60°C ?
let condition3 = "Remplacez par une condition logique";
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
}

//-------------------------------------------------------------------

//Exercice 10.6
console.log("\n\n") //Sauts de ligne dans la console
console.log("Exercice 8.6 - Calcul de la moyenne des notes");

let noteMaths = 15;
let noteFrancais = 18;
let noteHistoire = 12;

function calculerMoyenne() {    
    //Remplacez par votre code
    //Utilisez le mot return pour renvoyer la moyenne
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
    //Remplacez par votre code
    //Utilisez le mot return pour renvoyer true ou false
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
    //Remplacez par votre code
    //Utilisez le mot return pour renvoyer true ou false
}

// Appel de la fonction pour vérifier le mot de passe
let motDePasseValide = verifierMotDePasse(motDePasseSaisi, motDePasseStocke);

if (motDePasseValide) {
    console.log("Mot de passe correct.");
}   else {
    console.log("Mot de passe incorrect.");
}



