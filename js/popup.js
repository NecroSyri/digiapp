// Global

var d={};
var bgPort = chrome.runtime.connect({name: "P1"});
var bg = chrome.extension.getBackgroundPage();
var username = localStorage.getItem("username");
var size = localStorage.getItem("size");
var opa = localStorage.getItem("opacity");

// Main
window.onload=function(){
	main();
}

function main(){
	if(size==null || size==0){
		size = 4;
	}
	$("body").addClass("s"+size);

	opacityFirst();
	if(opa==null || opa==""){
		opa = "false";
		localStorage.setItem("opacity","false");
	}

  //setInterval(function(){getDate()}, 1000);
  setInterval(function(){vTime()}, 1000);

  // Init
  listeners();
  init();

  if(username == null){
      //$("#welcomeMessage").hide();
  }else{
      $(".js_username").html(username);
  }
}

function listeners(){
// Events listeners
  $("#stats").click(function(){console.log("stats")});
  $("#food").click(function(){confirm();});
  $("#train").click(function(){cancel();});
  $("#battle").click(function(){confirm();});
  $("#clean").click(function(){cancel();});
  $("#light").click(function(){select();});
  $("#heal").click(function(){confirm();});
  $("#album").click(function(){cancel();});
  $("#connection").click(function(){confirm();});
  // Keypress
  $("html").keypress(function(key){
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
      // < - dev - time
      case 60:
        bg.getTime();
      break;
			// opacity
			case 113:
				opacity();
			break;
      default :
        $(".js_username").html(key.which);
      break;
    }
  });
}

// Functions
function opacity(){
	if(opa=="true"){
		localStorage.setItem("opacity","false");
		opa = "false";
		$("body").removeClass("opa");
	}else{
		localStorage.setItem("opacity","true");
		opa = "true";
		$("body").addClass("opa");
	}
}
function opacityFirst(){
	if(opa=="false"){
		$("body").removeClass("opa");
	}else{
		$("body").addClass("opa");
	}
}
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

  //time
  d.h = localStorage.getItem("h");
  d.m = localStorage.getItem("m");
  d.s = localStorage.getItem("s");

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

//Reset
function reset(){
  localStorage.removeItem("egg");
  localStorage.removeItem("option");
  localStorage.removeItem("chooseEgg");

  localStorage.removeItem("h");
  localStorage.removeItem("m");
  localStorage.removeItem("s");

  d.menu="";
  $(".menu div").removeClass("selected");
  chrome.extension.getBackgroundPage().reset();
  init();
}

// Charts
/******************************************
 V1 > 1m Bota > 10m Koro > 6h 0-3 CM Agu
                           6h 4+  CM Beta


********************************************/
