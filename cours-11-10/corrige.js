$(document).ready(function(){
// recuperer le bouton
// stocker les données de l'eleve
// stocker les eleves
// stocker toutes les notes de l'eleve
var btn = $('#btn')
var studient = [];
var allstudients = [];
var mean = [];
$('#error').hide();
// à partire de maintenant on click
btn.click(function(){
   let inputnbr = parseInt($('#mean').val());
    if ( inputHasNotThisValue('', $("#firstName")) && inputHasNotThisValue('', $("#name")) && inputnbr >= 0 && inputnbr <= 20)
    {
        studient.push($("#firstName").val(), $("#name").val(), inputnbr );
        allstudients.push(studient);
        mean.push(inputnbr);
        tableUpdate();
        valueReset();
    }
    else
    {
        $('#error').show().fadeOut(5000);
    }
})
function inputHasNotThisValue(valueckeck, input){
    if(input.val() != valueckeck){
        return true;
    }
    else
    {
        return false;
    }
}
function tableUpdate(){
    
    $("#tableau .trRemove").remove();
    allstudients.forEach(element => $("#tableau").append("<tr class='trRemove'><td>" + element[0] + "</td><td class='trRemove' >" + element[1] + "</td><td class='trRemove'>" + element[2] + "</td></tr>"))
    
}
function valueReset() 
{  
        studient = [];
      $("#firstName").val('')
      $("#name").val('')
      parseInt($("#mean").val(0))
    
}
//formule calcule moyenne 1
 1234[]
function meanClass(){
    var meanNote = mean.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return meanNote / mean.length;
}
// on verifie les données

// si les données sont bonnes on fait =>

// on met les informations d'un eleve par tableau
// on met la note de l'eleve dans un tableau
// on met le tableau dans le tableau qui stock les eleves

// si elle ne sont pas bonnes on fait=>

// on retourne un msg d'erreur

})
/* function de calcul moyenne 2
function calcMoyenne(res){
        let b = mean.length;
        for(let i = 0; i < b; i++){
            res = res + mean[i];
        }
        moyenne = res / b;
        $("#meanClass").html(moyenne);
        console.log(mean);
    }*/