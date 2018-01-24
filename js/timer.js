function setTimer(time,name){
  if(isNull(d.timers)){
    d.timers=[];
  }
  d.timers.push([time,name]);
  save();
  debug("setTimer() - d.timers : "+d.timers);
}

function triggerEvent(message){
  var event = message.split(",")[0];
  var param = message.split(",")[1];
  debug("triggerEvent() - event : "+event+" param : "+param);
  windowEvent(event,param);
  chrome.extension.sendMessage(message);
}

// EGG

function eggShake(){
  d.state="shake";
  save();
}

function eggHatch(){
  d.state="hatch";
  save();
}
