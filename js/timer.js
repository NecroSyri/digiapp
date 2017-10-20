function nextHungry(o){
  o.nextHungry = 0;
}

function getDate(){
  var time = new Date();
  d.h = ("0"+time.getHours()).slice(-2)
  d.m = ("0"+time.getMinutes()).slice(-2)
  d.s = ("0"+time.getSeconds()).slice(-2)
  $("#date").html(d.h+":"+d.m+":"+d.s);
}
