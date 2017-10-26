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

function vTime(){
  var lt = localStorage.getItem("lastTime");

  lt = new Date(lt);
  var lh = lt.getHours();
  var lm = lt.getMinutes();
  var ls = lt.getSeconds();

  var t = new Date();
  var h = t.getHours();
  var m = t.getMinutes();
  var s = t.getSeconds();

  var vs=0;
  var vm=0;
  var vh=0;

  // v = t - l
  if(ls>s){
    vs = 60+(s-ls);
    lm++;
  }else{
    vs = s-ls;
  }
  if(lm>m){
    vm = 60+(m-lm);
    lh++;
  }else{
    vm = m-lm;
  }
  if(lh>h){
    vh = 24+(h-lh);
    //y++;
  }else{
    vh = h-lh;
  }
}
