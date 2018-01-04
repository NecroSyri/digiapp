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
    });
  }
});

setInterval(function(){tick()}, 1000);
function tick(){

}

function init(){
  d.hunger=localStorage.getItem("hunger");
  d.strength=localStorage.getItem("strength");
}

function reset(){
  init();
}
