function nextHungry(o){
  o.nextHungry = 0;
}

function getDate(){
  var time = new Date();
  $("#date").html(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
}
setInterval(getDate(), 1000);
