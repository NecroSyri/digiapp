var b = {};
var p = {};
var popupPort;
chrome.runtime.onConnect.addListener(function(port) {
  if(port.name == "P1") {
    init();
    popupPort = port;
    popupPort.onDisconnect.addListener(function() {
        //close
        b.lastTime=new Date();
        save();
    });
  }
});
setInterval(function(){tick()}, 1000);
function tick(){
  console.log(b.timers);
  if(b.timers!=null){
    for(i=0;i<b.timers.length;i++){
      b.timers[i][0]--
      if(b.timers[i][0]<=0){
        console.log(b.timers[i][1]);
        timedEvent(b.timers.splice(i,1)[0][1]);
      }
    }
  }
}

function init(){
  load();
}

function reset(){
  init();
}

function timedEvent(event){
  switch(event){
    case "hatch":
    break;
    case "eggShake":
      b.state="shake";
      save();
      chrome.extension.sendMessage("eggShake");
    break;
  }
}

function timeFromPopup(popupTime){
  b.timers = popupTime;
  save();
}

function loadPopup(){
  var tmp = localStorage.getItem("popup");
  if (tmp!=null && tmp != "" && tmp != "undefined" && tmp != undefined){
    p = JSON.parse(tmp);
  }
}

function save(){
  localStorage.setItem("background",JSON.stringify(b));
}

function load(){
  var tmp = localStorage.getItem("background");
  if (tmp!=null && tmp != "" && tmp != "undefined" && tmp != undefined){
    b = JSON.parse(tmp);
  }
}

function getLastTime(){
  return b.lastTime;
}
