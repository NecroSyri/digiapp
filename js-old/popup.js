// Global

var mouse={};
var resize=false;
var p = {};
var b = {};
load();
var bgPort = chrome.runtime.connect({name: "P1"});
var bg = chrome.extension.getBackgroundPage();
var statsZoneHeight = 50;

// Main
window.onload=function(){
	main();
}

function main(){
	load();
	console.log(bg.getLastTime());

	if(p.bodyWidth==null || p.bodyHeight==null ||p.bodyWidth==undefined || p.bodyHeight==undefined ||p.bodyWidth=="undefined" || p.bodyHeight=="undefined"){
		p.bodyWidth=64;
		p.bodyHeight=64;
	}
	$("body").width(p.bodyWidth);
	$("body").height(p.bodyHeight);
	$("#screen").width($("body").width());
	$("#screen").height($("body").height());

	$("#statsZone").height(statsZoneHeight);

	loadIcon("battle");
	loadIcon("clean");

	opacityFirst();
	if(p.opacity==null || p.opacity=="" || p.opacity=="undefined" || p.opacity==undefined){
		p.opacity = "false";
		save();
	}

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
	chrome.extension.onMessage.addListener(function(message, messageSender, sendResponse) {
			eventsFromBackground(message);
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
	if(window["p."+icon]!=null){
		img = window["p."+icon];
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
	}
}
function resizeOn(){
	resize=true;
}
function resizeOff(){
	if(resize){
		resize=false;
		p.bodyWidth = $("body").width();
		if($("#statsZone").is(":visible")){
			p.bodyHeight = $("body").height()-statsZoneHeight;
		}else{
			p.bodyHeight = $("body").height();
		}
		save();
		window.close();
	}
}
function opacity(){
	if(p.opacity=="true"){
		p.opacity = "false";
		$("body").removeClass("opa");
	}else{
		p.opacity = "true"
		$("body").addClass("opa");
	}
	save();
}
function opacityFirst(){
	if(p.opacity=="false"){
		$("body").removeClass("opa");
	}else{
		$("body").addClass("opa");
	}
}
function select(){
  switch(p.option){
    case "egg":
      selectEgg();
    break;
    case "menu":
      selectMenu();
    break;
  }
}
function confirm(){
  switch(p.option){
    case "egg":
      confirmEgg();
    break;
    case "menu":
      confirmMenu();
    break;
  }
}
function cancel(){
  switch(p.option){
    case "menu":
      cancelMenu();
    break;
  }
}

// init
function init(){
  //load data, login, choose egg, resume

  //data load
	load();
	loadBackground();
  //egg check
  if(p.chooseEgg == null){
    chooseEgg();
  }else{
      //resume
			p.state = b.state;
      display(p.mon,p.state);
  }
}

//Reset
function reset(){
	localStorage.removeItem("popup");
	localStorage.removeItem("background");
	localStorage.removeItem("options");
	p={};
	b={};
	o={};
	p.opacity = "true";
  $(".menu div").removeClass("selected");
  bg.reset();
  init();
}

// Charts
/******************************************
 V1 > 1m Bota > 10m Koro > 6h 0-3 CM Agu
                           6h 4+  CM Beta


********************************************/
