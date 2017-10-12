var d={};

var username = localStorage.getItem("username");

init();

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
      localStorage.removeItem("chooseEgg");
    break;
    default :
      $(".js_username").html(key.which);
    break;
  }
});

function select(){
  switch(d.option){
    case "egg":
      select_egg();
    break;
  }
}
function confirm(){
  switch(d.option){
    case "egg":
      confirm_egg();
    break;
  }
}
function cancel(){

}

// init
function init(){
  d.chooseEgg = localStorage.getItem("chooseEgg");
  d.option = localStorage.getItem("option");
  d.egg = localStorage.getItem("egg");

  if(d.chooseEgg == null){
      //first visit
      d.option = "egg";
      localStorage.setItem("option",d.option);
      if(d.egg == null){
        $(".inscreen").html("egg A");
        d.egg = "a"
        localStorage.setItem("egg",d.egg);
      }else{
        switch(d.egg){
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
}

// Egg selection
function chooseEgg(){

}
function select_egg(){
  switch(d.egg){
    case "a":
      $(".inscreen").html("egg B");
      d.egg="b";
    break;
    case "b":
      $(".inscreen").html("egg C");
      d.egg="c";
    break;
    case "c":
      $(".inscreen").html("egg A");
      d.egg="a";
    break;
  }
  localStorage.setItem("egg",d.egg);
}
function confirm_egg(){

}
