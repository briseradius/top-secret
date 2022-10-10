//ET et OU
let x = 10 
let y = 9
// OU

if(x== 10 || y ==5 )
{
    console.log(true)
}
else{
    console.log(false)
};

//if

if(x== 10 && y ==5 )
{
    console.log(true)
}
else{
    console.log(false)
};

// ou exclusif (XOR)

if(x== 10 ^ y ==5 )
{
    console.log(true)
}
else{
    console.log(false)
};
 // NAND

 if(x != 10 && y !== 5 )
{
    console.log(true)
}
else{
    console.log(false)
};

//les bonnes pratiques
// a chaque changement de block { } il est indispensable de faire un TAB (indentation)
// si une fonction retourne qqc elle doit commencer par: 
//si elle retourne une bool par IS..... HAS....
//le nom d'une fonction doit toujours refleter ce qu'elle fait
// une fonction dois faire une seule chose a la fois
// 

//NuLL et Undefined

let nl = null
console.log(nl)

let element = document.getElementById('paul')
console.log(element);

// Undefined

let k;

console.log(k);

if(k === undefined)
{
    k = 12
}
console.log(k)

 let button = document.getElementsByClassName('exempleA')

// function myclick(){
//     console.log("j'ai clické sur le bouton")
// }
// button[0].addEventListener('click', myclick)

button[0].addEventListener('click', function(e)
{
    console.log("j'ai clicker sur le bouton")
    console.log(event)
})
 let inputText = document.getElementById('exB')

 inputText.addEventListener('input', function(){
    console.log('ok')
 })
 //Ajax
 var boutonImage = document.getElementById('but')
 var image = document.querySelector('img')
 boutonImage.addEventListener('click', function()
 {
    var Ajax = new XMLHttpRequest();
 
    Ajax.open('GET', 'https://api.thecatapi.com/v1/images/search', true)
    Ajax.responseType = 'json'
    Ajax.send()
    Ajax.onload = function(){
        console.log(this.response)
    }
})
//pause du cours 
