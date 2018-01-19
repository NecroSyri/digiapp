
//Menu
function selectMenu(){
  switch(p.menu){
    case "stats" :
      p.menu="food";
    break;
    case "food" :
      p.menu="train";
    break;
    case "train" :
      p.menu="battle";
    break;
    case "battle" :
      p.menu="clean";
    break;
    case "clean" :
      p.menu="light";
    break;
    case "light" :
      p.menu="heal";
    break;
    case "heal" :
      p.menu="album";
    break;
    case "album" :
      p.menu="connection";
    break;
    case "connection" :
      p.menu="stats";
    break;
    default:
      p.menu="stats";
    break;
  }
  $(".menu div").removeClass("selected");
  $("#"+p.menu).addClass("selected");
}
function confirmMenu(){
  switch(p.menu){
    case "stats" :
      selectStats();
    break;
    case "food" :
      //food
    break;
    case "train" :
      //train
    break;
    case "battle" :
      //battle
    break;
    case "clean" :
      //clean
    break;
    case "light" :
      //light
    break;
    case "heal" :
      //heal
    break;
    case "album" :
      //album
    break;
    case "connection" :
      //connection
    break;
    default:
      //default
    break;
  }
}
function cancelMenu(){
  $(".menu div").removeClass("selected");
  p.menu="";
}
