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
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id,{file:"js/overlay.js"});
  });
}
