var d = {};
var popupPort;
chrome.runtime.onConnect.addListener(function(port) {
  if(port.name == "P1") {
    init();
    popupPort = port;
    popupPort.onDisconnect.addListener(function() {
        //close
        var lastTime=new Date();
        localStorage.setItem("lastTime",lastTime);
        localStorage.setItem("timers",JSON.stringify(d.timers));
    });
  }
});
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message){
      case "timer":
        d.timers = JSON.parse(localStorage.getItem("timers"));
      break;
      default:
        alert(message);
      break;
    }
});

setInterval(function(){tick()}, 1000);
function tick(){
  if(d.timers!=null){
    for(i=0;i<d.timers.length;i++){
      d.timers[i][0]--
      if(d.timers[i][0]<=0){
        console.log(d.timers[i][1]);
        timedEvent(d.timers.splice(i,1)[0][1]);
      }
    }
  }
}

function init(){
  d.hunger=localStorage.getItem("hunger");
  d.strength=localStorage.getItem("strength");
}

function reset(){
  init();
}

function timedEvent(event){
  switch(event){
    case "hatch":
    break;
    case "eggShake":
      d.state="shake";
      localStorage.setItem("state",d.state);
      chrome.extension.sendMessage("eggShake");
    break;
  }
}
