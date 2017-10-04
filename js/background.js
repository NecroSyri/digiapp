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
    $("body").load('../pages/overlay.html');
    var overlay = $("body").prop('outerHTML');
    overlay = overlay.replace(/\"/g,"'").replace(/(\r\n|\n|\r)/gm,"");
    chrome.tabs.insertCSS(tabs[0].id,{file:"../css/overlay.css",allFrames:true});
    chrome.tabs.executeScript(tabs[0].id,{code:"document.body.innerHTML += \""+overlay+"\""});
  });
}
