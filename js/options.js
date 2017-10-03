$("#validate").click(function(){
    localStorage.setItem("username",$("#username").val());
});
$("#delete").click(function(){
    localStorage.removeItem("username");
});
