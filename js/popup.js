var d={};
var bgPort = chrome.runtime.connect({name: "P1"});
setInterval(function(){getDate()}, 1000);

var username = localStorage.getItem("username");

init();

if(username == null){
    //$("#welcomeMessage").hide();
}else{
    $(".js_username").html(username);
}

$("#stats").click(function(){select();});
$("#food").click(function(){confirm();});
$("#train").click(function(){cancel();});
$("#battle").click(function(){confirm();});
$("#clean").click(function(){cancel();});
$("#light").click(function(){select();});
$("#heal").click(function(){confirm();});
$("#album").click(function(){cancel();});
$("#connection").click(function(){confirm();});

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
      reset();
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
    case "menu":
      select_menu();
    break;
  }
}
function confirm(){
  switch(d.option){
    case "egg":
      confirm_egg();
    break;
    case "menu":
      confirm_menu();
    break;
  }
}
function cancel(){
  switch(d.option){
    case "menu":
      cancel_menu();
    break;
  }
}

// init
function init(){
  //load data, login, choose egg, resume

  //data load
  d.chooseEgg = localStorage.getItem("chooseEgg");
  d.option = localStorage.getItem("option");
  d.egg = localStorage.getItem("egg");

  //egg check
  if(d.chooseEgg == null){
    chooseEgg();
  }else{
      //resume
      d.mon = localStorage.getItem("mon");
      display();

      d.lastTime = localStorage.getItem("lastTime");
      d.time = new Date();
      if(d.lastTime==null){

      }else{
          console.log(d.time);
          console.log(d.lastTime);
          $("#testMessage").html(countSeconds(d.time,d.lastTime));
      }
  }
}

// Eggs
function chooseEgg(){
  d.option = "egg";
  localStorage.setItem("option",d.option);
  if(d.egg == null){
    d.egg = "red"
    localStorage.setItem("egg",d.egg);
  }
  show_egg()
}
function select_egg(){
  switch(d.egg){
    case "red":
      d.egg="blue";
    break;
    case "blue":
      d.egg="green";
    break;
    case "green":
      d.egg="yellow";
    break;
    case "yellow":
      d.egg="lightblue";
    break;
    case "lightblue":
      d.egg="red";
    break;
  }
  show_egg();
  localStorage.setItem("egg",d.egg);
}
function show_egg(){
  switch(d.egg){
    case "red":
      $(".inscreen").html("Red egg");
    break;
    case "blue":
      $(".inscreen").html("Blue egg");
    break;
    case "green":
      $(".inscreen").html("Green egg");
    break;
    case "yellow":
      $(".inscreen").html("Yellow egg");
    break;
    case "lightblue":
      $(".inscreen").html("Light Blue egg");
    break;
  }
}
function confirm_egg(){
  //store chosen egg, set option to menu
  d.chooseEgg = d.egg;
  localStorage.setItem("chooseEgg",d.chooseEgg);
  d.option="menu";
  localStorage.setItem("option",d.option);
  d.menu="";
  localStorage.removeItem("egg");

  d.hunger=0;
  d.strength=0;
  d.effort=0;
  d.energy=10;

  d.evotime=60;
  d.mon = d.egg;
  localStorage.setItem("mon",d.mon);

  display();
}

//Menu
function select_menu(){
  switch(d.menu){
    case "stats" :
      d.menu="food";
    break;
    case "food" :
      d.menu="train";
    break;
    case "train" :
      d.menu="battle";
    break;
    case "battle" :
      d.menu="clean";
    break;
    case "clean" :
      d.menu="light";
    break;
    case "light" :
      d.menu="heal";
    break;
    case "heal" :
      d.menu="album";
    break;
    case "album" :
      d.menu="connection";
    break;
    case "connection" :
      d.menu="stats";
    break;
    default:
      d.menu="stats";
    break;
  }
  $(".menu div").removeClass("selected");
  $("#"+d.menu).addClass("selected");
}
function confirm_menu(){

}
function cancel_menu(){
  $(".menu div").removeClass("selected");
  d.menu="";
}

//display
function display(){
  $(".inscreen").html(d.mon);
}

//Reset
function reset(){
  localStorage.removeItem("egg");
  localStorage.removeItem("option");
  localStorage.removeItem("chooseEgg");
  d.menu="";
  $(".menu div").removeClass("selected");
  init();
}

// Charts
/******************************************
 V1 > 1m Bota > 10m Koro > 6h 0-3 CM Agu
                           6h 4+  CM Beta


********************************************/
