function nextHungry(o){
  o.nextHungry = 0;
}

function getDate(){
  var time = new Date();
  var h = ("0"+time.getHours()).slice(-2)
  var m = ("0"+time.getMinutes()).slice(-2)
  var s = ("0"+time.getSeconds()).slice(-2)
  $("#date").html(h+":"+m+":"+s);
}
