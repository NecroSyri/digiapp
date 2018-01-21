var debugMode=true;
/*
 Object d :
  d.mon - name of mon
  d.state - animation state (idle/taining/eating...)
  d.menu - selected menu
  d.timers - array of timers [time_untill_event,"event_name"]
  d.screenHeight
  d.screenWidth
  d.opacity
  d.lastTime
  d.pause
  d.eggsList
 */
var d = {};
var popupPort;
chrome.runtime.onConnect.addListener(function(port) {
	//on popup open	
	if(port.name == "P1") {
		init();
		popupPort = port;
		//on popup close
		popupPort.onDisconnect.addListener(function() {
			d.lastTime=new Date();
			save();
		});
	}
});
//tick every seconds
setInterval(function(){tick()}, 1000);
function tick(){
	//if there's timers, run trough all of them, decrement them, if they reach 0, trigger event
	if(d.timers!=null){
		for(i=0;i<d.timers.length;i++){
			d.timers[i][0]--
			if(d.timers[i][0]<=0){
				debug("tick() - d.timers["+i+"][1]"+d.timers[i][1]);
				timedEvent(d.timers.splice(i,1)[0][1]);
			}
		}
	}
}

function init(){
	load();
	if(isNull(d.mon)){
		eggChoose();
	}else{
		//resume
	}
}

function timedEvent(event){
	switch(event){
	case "hatch":
		d.state="hatch";
		save;
		trigger("hatch");
		break;
	case "eggShake":
		d.state="shake";
		save();
		trigger("eggShake");
		break;
	}
}

function trigger(event){
	chrome.extension.sendMessage(event);
}

function getLastTime(){
	return d.lastTime;
}
