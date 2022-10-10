console.log("hello world!");
let x=1;
var y=3;
console.log(x+y);
let c=5;
const k=10;
console.log(k-c);
let w=9;
w=10;
console.log(w);
const s=10;
// s=78;
//impossible de reassigner la valeur d'une constante
console.log(x=y);
console.log(w/2.5);
console.log(w/y);
console.log(w*y);
console.log(w % y);
// structure conditionnelles if= si else=sinon, if w=k alors j'eecris bonjour
if(k==w){
    console.log("bonjour");
}
// if...(condition)...{...expression...} bloc de condition
// == ->condition d'egalité
//=== ->condition strict d'egalité
console.log(55+'tuyt');
let bonjour='Salut';
let bonjour02=' les gars';
console.log(bonjour+bonjour02)
// la condition non elle s'ecrit: != 
if (c!=x)
{
    console.log(c+"n'est pas egal à"+x)
};
let bool=false;
console.log(bool);
console.log(!bool);
if(!bool){
    console.log("bool est egal a false")
};
//else
if(!bool){
    console.log("bool est egal a false")
}
else{
    console.log("bool est egal a true")
};
//superieur ou inferieur
if(w<c){
    console.log("w n'est pas inferieur a c")
}
else{
    console.log("c est inferieur a w")
}
//query selector
var titre = document.getElementsByClassName("titre");
console.log(titre);
var secondTitle=document.getElementById("h2_modifier");
console.log(secondTitle);
secondTitle.innerHTML="bonjour";
let paragraph = document.querySelector(".paragraph");
console.log(paragraph);
let parentImage =document.querySelector(".parent-image");
var image = document.createElement("img");
image.setAttribute('src','images/cat.jpg');
parentImage.appendChild(image);
//les fonctions
function addition(nombreA,nombreB){
    let result = nombreA + nombreB
console.log(result);
};

addition(1000,2000);

function soustraction(nombreA,nombreB){
    let result = nombreA - nombreB
return(result);
};
let trueresult = soustraction(50,27);
console.log(trueresult);
//1er exo
let taille = 170
function esCeQueJeSuisGrand(taille){
    
if(taille>=170){
    
    console.log("tu es grand")
}
else{
    console.log("tu es petit")
}
};
esCeQueJeSuisGrand(taille)



function aiJeUnDivisionSansReste(nb, nbs)
{
    if(result = nb % nbs )
    {
        console.log("ya pas de reste")
    }
    else{
        console.log("ya du reste")
    }
};
aiJeUnDivisionSansReste()

function aiJeUnDivisionSansReste(nombreA, nombreB){
    let resultat = nombreA % nombreB
      if(resultat > 0){
        console.log("elle a un reste.")
    }else{
        console.log("Elle n'a pas de reste.")
    }
  };
// var et let
let maVariable = 10;
//maVariable = true;
console.log(maVariable);
// let maVariable = 10;
// console.log(maVariable);
// var newVariable = 12;
console.log(newVariable);
 var newVariable = 15;

console.log(newVariable);



var maVariableVAr = 'george' 

 function jeTestMonLet(){
     let test = 'joconde'
     var maVariableVAr = 'jeanpierre'
     if (true){
 console.log(test);
     }
 };
 jeTestMonLet();




 function jeTestEncoreMonLet()
 {
    var test = 'leonard de vinci'

console.log(test)

};
jeTestEncoreMonLet();


function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // c'est une variable différente
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }
  letTest();
  
  function varTest() {
    if (true) {
      var x = 71;  // c'est la même variable !
      console.log(x);  // 71
    }
    console.log(x);  // 71
  };

  varTest();


  //switch
   function testNombre(nbr){
    switch(nbr){
        case 0:
                console.log('je suis 0');
                break;
        case 1: 
                console.log('je suis 1')
                break    
        case 2:
                console.log('je suis 2');
                break;
        case 3: 
                console.log('je suis 3')
                break;   
        default:
                console.log('je suis sup a 3')     
    }
   }
   testNombre(5)

   //les tableau
   
   var myFirstArray = [];
   var mySecondArray = [1,2,3,4,'banane'];
   var un = mySecondArray[0];
   
   console.log(un);
   console.log(mySecondArray.length);
   console.log(mySecondArray[3] + mySecondArray[4])


    myFirstArray.push("jeremy");
 
  myFirstArray.push("kevin.b");
  
myFirstArray.pop(); 
console.log(myFirstArray);

myFirstArray.push("Jeremy");
console.log(myFirstArray);
myFirstArray.push("Kevin.B");
console.log(myFirstArray);

myFirstArray.shift();
console.log(myFirstArray);
console.log(mySecondArray.indexOf(2));
console.log(mySecondArray.indexOf('banane'));
//1er bargument pos initial, second nbs a supp
mySecondArray.splice(1,1);
console.log(mySecondArray)
let banane = 'une banane'
console.log(banane[5])
<<<<<<< HEAD

var voiture = {
    marque: "renault",
    année: "2005",
    puissance: 125,

    afficher: function() {
        console.log("cette voiture est une " + this.marque + ",de l'année " + this.année + "d'une puissance de" + this.puissance)
    },
};
voiture.afficher()
console.log(voiture.marque);

//les boucles
var iteration = 0;
while (iteration<7){
    console.log(iteration);
    iteration++;
};
// la boucle for
for (let i = 0; i <= 12; i++) {
    console.log(i);
    
};
for (let j = 0; j < mySecondArray.length; j++){
	console.log(mySecondArray[j]);
};
//la dowhile
let dowil = 0;
do {
     dowil ++ 
    console.log(dowil)
} while (dowil<=40);

iterationBreak = 0;

while(iterationBreak < 80)
{
    console.log(iterationBreak)
	iterationBreak++;
  if( iterationBreak > 47)
  {
  	break;
  }
};


function facteur(it){
    var fact = 1;

    for(var i = 1; i <= it; i++)  
    {   
      fact = fact * i;   
    }  
    console.log(fact)
}

facteur(7)

function factor(nbr)
{
  if(nbr === 0)
  {
		return 1;
  }
  return nbr * factor(nbr - 1);
}

console.log(factor(7))
 

// function tab()
// {
//     var tableauA = ['Jeannette', 'Alphonse', 'George', 'Ludwig'];
//     var tableauB = ['Paul', 'Frédéric', 'Jacques', 'Roger'];
//     var tableauC = tableauA[0] co tableauB[0]

//     console.log(tableauC)
// }
//  tab
 var tableauA = ['Jeannette', 'Alphonse', 'George', 'Ludwig'];
var tableauB = ['Paul', 'Frédéric', 'Jacques', 'Roger'];

function concatTableau(arrayA, arrayB)
{
	if(arrayA.length === arrayB.length)
  {
  	for(let index = 0; index < arrayB.length; index++)
    {
    	console.log(arrayA[index] + ' ' + arrayB[index])
    }
  }
  else
  {
  	console.log("Les tableaux n'ont pas la même taille.")
  }
}
concatTableau(tableauA, tableauB)
=======
console.log
>>>>>>> 7f175715527e2a1e8f39854e1f6858d4016e0b34
