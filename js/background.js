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
