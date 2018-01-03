function tick(){
  var date = new Date()
  $("#date").html(("0"+date.getHours()).slice(-2)+":"+("0"+date.getMinutes()).slice(-2)+":"+("0"+date.getSeconds()).slice(-2));
}
