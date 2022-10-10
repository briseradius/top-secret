$(document).ready(function(){
    $(".title").html("Coucou");
    $(".paragraph").html("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione inventore odit eos quidem architecto incidunt fugit praesentium, voluptate quia porro nesciunt asperiores, sunt fuga dignissimos sed itaque! Aliquam, natus modi!");
    $("p:last").css("color", "red");
    $("p:last").css({"color": "red", "background-color": "cyan"});

    /*
    let nbrA = $("#nbr-a");
    nbrA.change(function(){
        console.log(nbrA.val());
    });
    let nbrB = $("#nbr-b");
    nbrB.change(function(){
        console.log(nbrB.val());
    });
    */

    let nbrA = $("#nbr-a");
    let nbrB = $("#nbr-b");
    let result = $("#add");

    result.click(function(){
        $("#result").html(parseInt($(nbrA).val()) + parseInt($(nbrB).val()));
    });

    let paragraph = $(".exemple").html();

    $(".exemple").html(paragraph.toUpperCase());

    //$("#list").append("<li>Paul</li>");

    let stagiaire = ["Kévin", "Eric", "Mickael", "Tony", "Manu", "Renaud"];

    for (let i = 0; i < stagiaire.length; i++) {
        $("#list-a").append("<li>" + stagiaire[i] + "</li>")
    };

    for (let i = stagiaire.length - 1; i >= 0; i--) {
        $("#list-b").append("<li>" + stagiaire[i] + "</li>")
    };
});