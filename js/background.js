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
    console.log("1");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      $("body").load('../pages/overlay.html');
      var overlay = $("body").prop('outerHTML');
      overlay = overlay.replace(/\"/g,"'").replace(/(\r\n|\n|\r)/gm,"");
      chrome.tabs.executeScript(tabs[0].id,{file:"jquery-3.2.1.min.js"},function(){
        chrome.tabs.executeScript(tabs[0].id,{code:"document.body.innerHTML += \""+overlay+"\""});
      });
      overlayCreated = true;
    });
  }else{
    if(overlayOn){
      console.log("2");
      overlayOn = false;
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id,{code:"$('#overlay').hide();"});
      });
    }else{
      console.log("3");
      overlayOn = true;
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id,{code:"$('#overlay').show();"});
      });
    }
  }
}
