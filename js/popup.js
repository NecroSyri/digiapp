//chrome.tabs.create({url:"pages/options.html"});
/*
var valeur=localStorage.getItem(clef);  //récupérer la valeur
localStorage.setItem(clef,valeur);  //donner une nouvelle valeur
localStorage.removeItem(clef);  //supprimer l'item
var clef=localStorage.key(n);  //récupérer la clef du n item.
localStorage.clear();  //vider localStorage
localStorage.length();  //le nombre de clef de localStorage
*/
var username = localStorage.getItem("username");
if(username == null){
    console.log("toto");
    $("#welcomeMessage").hide();
}else{
    $(".js_username").html(username);
}
