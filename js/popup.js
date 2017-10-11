var username = localStorage.getItem("username");

if(username == null){
    //$("#welcomeMessage").hide();
}else{
    $(".js_username").html(username);
}
$("#buttonA").click(function(){select();});
$("#buttonB").click(function(){confirm();});
$("#buttonC").click(function(){cancel();});
$("body").keypress(function(key){
  switch(key.which){
    case 119:
      select();
    break;
    case 122:
      select();
    break;
    case 120:
      confirm();
    break;
    case 99:
      cancel();
    break;
  }
});

function select(){
  $("#digivice").html("select");
}
function confirm(){
  $("#digivice").html("confirm");
}
function cancel(){
  $("#digivice").html("cancel");
}
