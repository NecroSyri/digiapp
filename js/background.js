var debugMode=true;
/*
 Object d :
  d.mon - name of mon
	d.egg - name of egg
	d.stage - egg/baby...
  d.state - animation state (idle/taining/eating...)
	d.process - current process
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
var popup=false;
var popupPort;
chrome.runtime.onConnect.addListener(function(port) {
	//on popup open
	if(port.name == "P1") {
		popup=true;
		init();
		popupPort = port;
		//on popup close
		popupPort.onDisconnect.addListener(function() {
			popup=false;
			load();
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
				triggerEvent(d.timers.splice(i,1)[0][1]);
			}
		}
	}
}

function init(){
	load();
}

function popupReady(){
  if(isNull(d.mon)){
    debug("init() - d.mon null > eggChoose()");
    trigger("eggChoose");
  }else{
    //resume
		trigger("resume");
    debug("init() - resume - d.mon : "+d.mon);
  }
}

function trigger(event){
  debug("trigger() - event : "+event);
	triggerEvent(event);
}

function getLastTime(){
	return d.lastTime;
}

function reset(){
	d={};
}
