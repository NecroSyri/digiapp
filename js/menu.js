
//Menu
function select_menu(){
  switch(d.menu){
    case "stats" :
      d.menu="food";
    break;
    case "food" :
      d.menu="train";
    break;
    case "train" :
      d.menu="battle";
    break;
    case "battle" :
      d.menu="clean";
    break;
    case "clean" :
      d.menu="light";
    break;
    case "light" :
      d.menu="heal";
    break;
    case "heal" :
      d.menu="album";
    break;
    case "album" :
      d.menu="connection";
    break;
    case "connection" :
      d.menu="stats";
    break;
    default:
      d.menu="stats";
    break;
  }
  $(".menu div").removeClass("selected");
  $("#"+d.menu).addClass("selected");
}
function confirm_menu(){
  switch(d.menu){
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
function cancel_menu(){
  $(".menu div").removeClass("selected");
  d.menu="";
}
