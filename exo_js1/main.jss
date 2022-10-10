var a = document.createElement('a');  
var lien = document.createTextNode("Menu"); 
a.appendChild(lien);  
a.title = "menu";  
a.href = "menu.html";
document.body.appendChild(a); 

var lien = document.createTextNode("Produit"); 
a.appendChild(lien);  
a.title = "produit";  
a.href = "produit.html";
document.body.appendChild(a); 
  
var lien = document.createTextNode("Contact"); 
a.appendChild(lien);  
a.title = "contact";  
a.href = "contact.html";
document.body.appendChild(a); 
var a = ["Menu" + "Menu.html","Produit" + "Produit.html","Contact" + "contact.html"]

console.log(a);


let  lor = ['Lorem cupidatat officia dolor excepteur occaecat sint excepteur est labore minim']
let  acc = ['Accusantium necessitatibus nihil est ad pariatur officiis corporis possimus!']

function lorem(){
for
}

function tab(lor, acc)
{
	if(lor.length === acc.length)
  {
  	for(let index = 0; index < acc.length; index++)
    {
    	console.log(lor[index] + ' ' + acc[index])
    }

}
