$(document).ready(function(){
// Création d'un tableau de 20 de nombres aléatoires 

var aleatoire = new Array();
for (var i = 0; i<20; i++) {
  aleatoire[i] = Math.random();
}
// Calcul de la moyenne
var somme = 0;
for (var i = 0; i<aleatoire.length; i++) {
  somme += aleatoire[i];
}
var moyenne = somme / aleatoire.length;
document.write( "moyenne = " + moyenne );

//fonction moyenne
function numAverage(a) {
    var b = a.length,
        c = 0, m;
    for (m = 0; m < b; m++){
      c += Number(a[m]);
      console.log(c)
    }
    return c/b;
  }
  
  numAverage([5, 12, 21, 31, 5]);
 let result = $("#moy");

result.click(function(){
 $("#result").html;
});
})