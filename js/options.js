/*
var valeur=localStorage.getItem(clef);  //récupérer la valeur
localStorage.setItem(clef,valeur);  //donner une nouvelle valeur
localStorage.removeItem(clef);  //supprimer l'item
var clef=localStorage.key(n);  //récupérer la clef du n item.
localStorage.clear();  //vider localStorage
localStorage.length();  //le nombre de clef de localStorage
*/
$("#validate").click(function(){
    localStorage.setItem("username",$("#username").val());
});
$("#delete").click(function(){
    localStorage.removeItem("username");
});
