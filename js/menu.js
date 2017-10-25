
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

}
function cancel_menu(){
  $(".menu div").removeClass("selected");
  d.menu="";
}
