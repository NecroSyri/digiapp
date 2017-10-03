var username = localStorage.getItem("username");
if(username == null){
    $("#welcomeMessage").hide();
}else{
    $(".js_username").html(username);
}
