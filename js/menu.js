function menuSelect(){
  $(".menu div").not("#call").removeClass("selected");
  if(isNull(bg.d.menu) || (bg.d.menu+1)>=bg.d.menus.length){
    bg.d.menu=0;
  }else{
    bg.d.menu++;
  }
  bg.save();
  $("#"+bg.d.menus[bg.d.menu]).addClass("selected");
  debug("menuSelect() menu : "+bg.d.menu+" menus : "+bg.d.menus+" selected : "+bg.d.menus[bg.d.menu]);
}

function menuConfirm(){

}

function menuCancel(){
  $(".menu div").not("#call").removeClass("selected");
  bg.d.menu=null;
}
