var username = localStorage.getItem("username");
var setup = localStorage.getItem("setup");
var option = localStorage.getItem("option");
var egg = localStorage.getItem("egg");
if(setup == null){
    //first visit
    option = "egg";
    localStorage.setItem("option",option);
    if(egg == null){
      $(".inscreen").html("egg A");
      egg = "a"
      localStorage.setItem("egg",egg);
    }else{
      switch(egg){
        case "a":
          $(".inscreen").html("egg A");
        break;
        case "b":
          $(".inscreen").html("egg B");
        break;
        case "c":
          $(".inscreen").html("egg C");
        break;
      }
    }
}else{
    //resume
}
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
    // Z - select
    case 119:
      select();
    break;
    // W - select
    case 122:
      select();
    break;
    // X - confirm
    case 120:
      confirm();
    break;
    // C - cancel
    case 99:
      cancel();
    break;
    // V - dev - reset
    case 118:
      localStorage.removeItem("egg");
      localStorage.removeItem("option");
      localStorage.removeItem("setup");
    break;
    default :
      $(".js_username").html(key.which);
    break;
  }
});

function select(){
  switch(option){
    case "egg":
      select_egg();
    break;
  }
}
function confirm(){
  switch(option){
    case "egg":
      confirm_egg();
    break;
  }
}
function cancel(){

}

// Egg selection
function select_egg(){
  switch(egg){
    case "a":
      $(".inscreen").html("egg B");
      egg="b";
    break;
    case "b":
      $(".inscreen").html("egg C");
      egg="c";
    break;
    case "c":
      $(".inscreen").html("egg A");
      egg="a";
    break;
  }
  localStorage.setItem("egg",egg);
}
function confirm_egg(){

}
