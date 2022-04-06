// ES5: vieille syntaxe
const characters = require('./characters');

// ES6: modules <3
// import characters from './characters'

// console.log(characters);

// 59 executions
// -> Chaque execution est personnalisée
// -> Retourne qqc: un array qui contient les valeurs de retour de chaque execution
const myAwesomeValues = characters.map((character) => {
  return `Hey ! I'm ${character.name} !`;
});
// console.log(myAwesomeValues);

// 59 executions
// -> Chaque execution est personnalisée
// -> Doit retourner un booléen : je garde l'element, ou je le jette
// -> Retourne qqc: un array qui contient les éléments validant une condition (en general), pour lesquels la fonction de callback m'a renvoyé true
const myAwesomeFilteredValues = characters.filter((character) => {
  return character.tier === 'Z';
});
// console.log(myAwesomeFilteredValues);

// -------------------------------- PERSONNAGES
// Combien de persos ?
// console.log(characters.length);

// Liste des noms des persos de tier Z
const bestCharacters = characters
  .filter((character) => {
    return character.tier === 'Z';
  })
  .map((character) => {
    return character.name;
  });
console.log(bestCharacters);

// Combien d'Humains ?

// Distribution des raretés (tiers) ?
// Liste des épées

// -------------------------------- DETAILS
// Nom du perso ?
// Nombre d'ennemis ? D'amis ?

// -------------------------------- FONCTIONS
// (à faire en function et/ou fat arrow, au choix)
//
// Une fonction qui me renvoie une phrase du type "36AIS uses a Healing Staff !"
// Une fonction qui me donne la liste des amis de 36AIS
