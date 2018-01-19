function tick(){
  var date = new Date()
  $("#date").html(("0"+date.getHours()).slice(-2)+":"+("0"+date.getMinutes()).slice(-2)+":"+("0"+date.getSeconds()).slice(-2));
}

function setTimer(time,name){
  load();
  loadBackground();
  p.timers = b.timers;
  if(p.timers==null||p.timers=="null"||p.timers=="undefined"){
    p.timers=[];
  }
  p.timers.push([time,name]);
  save();
  //console.log(p.timers);
  bg.timeFromPopup(p.timers);
}

//Events received from background (like timer out)
function eventsFromBackground(message){
  switch(message){
    case "eggShake":
      p.state="shake";
      display(p.mon,"shake");
    break;
    case "hatch":
      p.state="hatch";
      display(p.mon,"hatch");
    break;
    default:
      alert(message);
    break;
  }
}
