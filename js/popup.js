// GLOBAL
var debugMode=true;
var mouse={};
var resize=false;
var bgPort = chrome.runtime.connect({name: "P1"});
var bg = chrome.extension.getBackgroundPage();
var statsZoneHeight = 50;
var d={};

// MAIN
window.onload=function(){
	main();
}

function main(){
	debug("Last time : "+bg.getLastTime());

	load();
	initDimensions();
	initOpacity();
	initListeners();
	//initIcon(...);

	bg.popupReady();
	setInterval(function(){tick()}, 1000);
}

// INITS
function initDimensions(){
	if(isNull(d.bodyHeight) || isNull(d.bodyWidth)){
		debug("initDimensions() - isNull");
		d.bodyWidth=64;
		d.bodyHeight=64;
	}
	$("body").width(d.bodyWidth);
	$("body").height(d.bodyHeight);
	$("#screen").width($("body").width());
	$("#screen").height($("body").height());

	$("#statsZone").height(statsZoneHeight);
}

function initOpacity(){
	debug("initOpacity() - d.opacity : "+d.opacity);
	if(isNull(d.opacity)){
		d.opacity = "true";
	}
	if(d.opacity=="false"){
		debug("initOpacity() - remove opa");
		$("body").removeClass("opa");
	}else{
		debug("initOpacity() - add opa");
		$("body").addClass("opa");
	}
	save();
}

function initIcon(icon){
	var img = 1;
	if(window["d."+icon]!=null){
		img = window["d."+icon];
	}
	$("#"+icon).css("background-image","url(\"../img/"+icon+img+".png\")");
}

function initListeners(){
	$("#stats").click(function(){console.log("stats")});
	$("#food").click(function(){console.log("food")});
	$("#train").click(function(){console.log("train")});
	$("#battle").click(function(){console.log("battle")});
	$("#clean").click(function(){console.log("clean")});
	$("#light").click(function(){console.log("light")});
	$("#heal").click(function(){console.log("heal")});
	$("#album").click(function(){console.log("album")});
	$("#connection").click(function(){console.log("connection")});
	$("#resize").on("mousedown",function(){resizeOn();});
	$(document).on("mouseup",function(){resizeOff();});
	$(document).mousemove(function(event){
		mouse.x=event.pageX;
		mouse.y=event.pageY;
		mouseMove();
	});
	chrome.extension.onMessage.addListener(function(message, messageSender, sendResponse) {
		debug("got message : "+message);
		events(message);
	});
	// Keypress
	$("html").keypress(function(key){keyPress(key)});
}


// KEYPRESS
function keyPress(key){

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
		// S - show datas
		case 115 :
			showDatas();
		break;
		// B - clean console
		case 98 :
			console.clear()
		break;
		default :
			debug("Keypress : "+key.which);
		break;
	}
}

// OPACITY
function opacity(){
	debug("opacity() - d.opacity : "+d.opacity);
	if(d.opacity=="true"){
		debug("opacity() - set false, remove opa");
		d.opacity = "false";
		$("body").removeClass("opa");
	}else{
		debug("opacity() - set true, add opa");
		d.opacity = "true"
		$("body").addClass("opa");
	}
	save();
}

// DATA ZONE
function showDatas(){
	$("#statsZone").toggle();
	if($("#statsZone").is(":visible")){
		$("body").height($("body").height()+statsZoneHeight);
	}else{
		$("body").height($("body").height()-statsZoneHeight);
	}
}

// RESIZE
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
		d.bodyWidth = $("body").width();
		if($("#statsZone").is(":visible")){
			d.bodyHeight = $("body").height()-statsZoneHeight;
		}else{
			d.bodyHeight = $("body").height();
		}
		save();
	}
}

// RESET
function reset(){
	localStorage.removeItem("datas");
	d={};
	bg.reset();
	window.close();
}
// TICKS
function tick(){

}
