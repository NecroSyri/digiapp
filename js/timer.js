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

function getTimer(){
  timePass();
  $("#date").html(("0"+d.h).slice(-2)+":"+("0"+d.m).slice(-2)+":"+("0"+d.s).slice(-2));
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
