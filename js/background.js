var d = {};
var popupPort;
chrome.runtime.onConnect.addListener(function(port) {
  if(port.name == "P1") {
    init();
    popupPort = port;
    popupPort.onDisconnect.addListener(function() {
        var time = new Date()
      localStorage.setItem("lastTime",time);
    });
  }
});

setInterval(function(){tick()}, 1000);
function tick(){
  timePass();
}

function timePass(){
  if(d.s==59){
    d.s=0;
    if(d.m==59){
      d.m=0;
      if(d.h==23){
        d.h=0;
      }else{
        d.h++;
      }
    }else{
      d.m++;
    }
  }else{
    d.s++;
  }
}

function init(){
  d.hunger=localStorage.getItem("hunger");
  d.strength=localStorage.getItem("strength");
  d.feedInterval=localStorage.getItem("feedInterval");


//  d.feed
//local time vs real time
}

function reset(){
  d.h=0;
  d.m=0;
  d.s=0;
  init();
}

function getTime(){
  alert(d.h+":"+d.m+":"+d.s);
}

function vTime(){
  var lt = localStorage.getItem("startTime");

  lt = new Date(lt);
  var lh = lt.getHours();
  var lm = lt.getMinutes();
  var ls = lt.getSeconds();

  var t = new Date();
  var h = t.getHours();
  var m = t.getMinutes();
  var s = t.getSeconds();

  var vs=0;
  var vm=0;
  var vh=0;

  // v = t - l
  if(ls>s){
    vs = 60+(s-ls);
    lm++;
  }else{
    vs = s-ls;
  }
  if(lm>m){
    vm = 60+(m-lm);
    lh++;
  }else{
    vm = m-lm;
  }
  if(lh>h){
    vh = 24+(h-lh);
    //y++;
  }else{
    vh = h-lh;
  }
  d.h=vh;
  d.m=vm;
  d.s=vs;
}
/*
var overlayOn = false;
var overlayCreated = false;
chrome.commands.onCommand.addListener(function(command) {
  //alert(command);
  switch(command){
    case "toggle-digivice" :
      console.log("toggle");
      toggle_digivice();
    break;
  }
});

function toggle_digivice(){
  if(!overlayCreated){
    $("body").load('../pages/overlay.html');
    var overlay = $("body").prop('outerHTML');
    overlay = overlay.replace(/\"/g,"'").replace(/(\r\n|\n|\r)/gm,"");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id,{file:"js/jquery-3.2.1.min.js"},function(){
        console.log("toto");
        chrome.tabs.executeScript(tabs[0].id,{code:"$('body').append(\""+overlay+"\")"},function(){console.log(overlay);});
      });
      overlayCreated = true;
    });
  }else{
    if(overlayOn){
      overlayOn = false;
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id,{code:"$('#overlay').hide();"});
      });
    }else{
      overlayOn = true;
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id,{code:"$('#overlay').show();"});
      });
    }
  }
}
*/
