$("#validate").click(function(){
    localStorage.setItem("username",$("#username").val());
});
$("#delete").click(function(){
    localStorage.removeItem("username");
});

var username = localStorage.getItem("username");

if(username == null){
    $("#loginForm").hide();
    $("#registerForm").show();
}else{
    $("#registerForm").hide();
    $("#loginForm").show();
}
