// Global

var mouse={};
var resize=false;
var d={};
var bgPort = chrome.runtime.connect({name: "P1"});
var bg = chrome.extension.getBackgroundPage();
var size = localStorage.getItem("size");
var opa = localStorage.getItem("opacity");
var bodyWidth = localStorage.getItem("bodyWidth");
var bodyHeight = localStorage.getItem("bodyHeight");
var showNotifications = localStorage.getItem("notifications");
var statsZoneHeight = 50;

// Main
window.onload=function(){
	main();
}

function main(){
	console.log(localStorage.getItem("lastTime"));

	$("body").width(bodyWidth);
	$("body").height(bodyHeight);
	$("#screen").width($("body").width());
	$("#screen").height($("body").height());

	$("#statsZone").height(statsZoneHeight);

	loadIcon("battle");
	loadIcon("clean");

	opacityFirst();
	if(opa==null || opa==""){
		opa = "false";
		localStorage.setItem("opacity","false");
	}

  //setInterval(function(){getDate()}, 1000);
  setInterval(function(){tick()}, 1000);

  // Init
  listeners();
  init();
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
  $("#resize").on("mousedown",function(){resizeOn();});
  $(document).on("mouseup",function(){resizeOff();});
  $(document).mousemove(function(event){
	  mouse.x=event.pageX;
	  mouse.y=event.pageY;
	  mouseMove();
  });
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
			// Q/A- opacity
			case 113:
				opacity();
			break;
			case 97:
				opacity();
			break;
			// s - show datas
			case 115 :
				showDatas();
			break;
      default :
        $(".js_username").html(key.which);
      break;
    }
  });
}

// Functions
function showDatas(){
	$("#statsZone").toggle();
	if($("#statsZone").is(":visible")){
		$("body").height($("body").height()+statsZoneHeight);
	}else{
		$("body").height($("body").height()-statsZoneHeight);
	}
}
function loadIcon(icon){
	var img = 1;
	if(localStorage.getItem(icon)!=null){
		img = localStorage.getItem(icon);
	}
	$("#"+icon).css("background-image","url(\"../img/"+icon+img+".png\")");
}
function mouseMove(){
	if(resize){
			var max = $("body").width()-mouse.x;
			if(max<mouse.y){
				max = mouse.y;
			}
			if(max>580){
				max=580;
			}
			if(max<64){
				max=64;
			}
			$("body").width(max);
			$("body").height(max);
			$("#screen").width($("body").width());
			$("#screen").height($("body").height());
			if($("#statsZone").is(":visible")){
				$("body").height(max+statsZoneHeight);
			}
			//$("html").width($("body").width());
			//$("html").height($("body").height());
	}
}
function resizeOn(){
	resize=true;
}
function resizeOff(){
	if(resize){
		resize=false;
		localStorage.setItem("bodyWidth",$("body").width());
		if($("#statsZone").is(":visible")){
			localStorage.setItem("bodyHeight",$("body").height()-statsZoneHeight);
		}else{
			localStorage.setItem("bodyHeight",$("body").height());
		}
	}
}
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
      selectEgg();
    break;
    case "menu":
      selectMenu();
    break;
  }
}
function confirm(){
  switch(d.option){
    case "egg":
      confirmEgg();
    break;
    case "menu":
      confirmMenu();
    break;
  }
}
function cancel(){
  switch(d.option){
    case "menu":
      cancelMenu();
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
      display(d.mon,"fix");
  }
}

//Reset
function reset(){
  localStorage.removeItem("egg");
  localStorage.removeItem("option");
  localStorage.removeItem("chooseEgg");
	localStorage.removeItem("lastTime");

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
