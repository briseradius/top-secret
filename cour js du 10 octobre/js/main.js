//ET et OU

let x = 10;
let y = 9;

//OU (OR)

if(x == 10 || y == 5){
    console.log(true);
}
else{
    console.log(false);
}

if(x == 10 || y == 9){
    console.log(true);
}
else{
    console.log(false);
}

//OU Exclusif (XOR) Très rarement utilisé

if(x == 10 ^ y == 5){
    console.log(true);
}
else{
    console.log(false);
}

if(x == 10 ^ y == 9){
    console.log(true);
}
else{
    console.log(false);
}

//ET (AND)

if(x == 10 && y == 9){
    console.log(true);
}
else{
    console.log(false);
}

if(x == 10 && y == 5){
    console.log(true);
}
else{
    console.log(false);
}

//ET Négatif (NAND)

if(x != 10 && y != 9){
    console.log(true);
}
else{
    console.log(false);
}

if(x != 1 && y != 9){
    console.log(true);
}
else{
    console.log(false);
}

if(x != 1 && y != 5){
    console.log(true);
}
else{
    console.log(false);
}

//Bonnes Pratiques

//L'indentation : A chaque changement de bloc { } il est indispensable de faire un TAB (Indentation).

//Si une fonction retourne quelque chose elle doit commencer par :
//Si elle a un BOOL par Is... has...
//Le nom d'une fonction doit toujours refléter ce qu'elle fait.
//Une fonction doit faire une seule chose à la fois.

//Null et Undefined

let nl = null;      //Variable définit mais sans valeur
console.log(nl);

//Exemple

let element = document.getElementById("paul");
console.log(element);

//Undefined

let k;              //Variable non définit
console.log(k);

if (k === undefined){
    k = 12;
}
console.log(k);

//

/*
let button = document.querySelector(".exempleA");

function myClick(){
    console.log("J'ai cliqué sur le bouton.");
}

button.addEventListener("click", myClick);
*/

let button = document.getElementsByClassName("exempleA");

function myClick()
{
	console.log("J'ai cliqué sur le bouton.")
}

button[0].addEventListener ("click", myClick);

button[0].addEventListener('click', function(eventA){
	console.log("J'ai cliqué sur le bouton.");
  console.log(eventA);
})

let inputText = document.getElementById("exempleB");
inputText.addEventListener("input", function(eventB){
    console.log("ok");
})

//AJAX

const buttonImage = document.getElementById("send");
const image = document.querySelector("img");
buttonImage.addEventListener("click", function(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "https://api.thecatapi.com/v1/images/search", true);
    ajax.responseType = "json";
    ajax.send();
    ajax.onload = function(){
        let json = this.response[0];
        image.src = json.url;
    }
})

//fetch

// const buttonImage = document.getElementById("send");
// const image = document.querySelector("img");

// buttonImage.addEventListener("click", function(){
//     fetch("https://api.thecatapi.com/v1/images/search").then(response => console.log(response));
//     image.src = json.url;
// });


//Les fonctions fléchées

function add(nbrA, nbrB){
    console.log(nbrA + nbrB);
}

const arrowAdd = (nbrA, nbrB) => {
    console.log(nbrA + nbrB);
}

add(5, 6);
add(12, 26);
arrowAdd(5, 6);
arrowAdd(12, 26);


var addArray = [1, 2, 4, 5];
const mapArray = addArray.map(x => x + 1);

console.log(addArray);
console.log(mapArray);


var addArrayTwo = [5, 7, 12, 4];
const mapArrayTwo = addArray.map((x, i) => x + addArrayTwo[i]);

console.log(addArrayTwo);
console.log(mapArrayTwo);

addArrayTwo.forEach(element => {
    console.log(element);
});

const zeroArray = [0, 0, 0, 0];

function hasZero(element){
    if(element == 0){
        return true
    }
    else{
        return false
    }
}

console.log(zeroArray.every(hasZero));