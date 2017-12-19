// Eggs
function chooseEgg(){
  d.option = "egg";
  localStorage.setItem("option",d.option);
  if(d.egg == null){
    d.egg = "0";
    localStorage.setItem("egg",d.egg);
  }
  show_egg();
}
function select_egg(){
	var eggs = localStorage.getItem("unlockedEggs");
	if(eggs == null || eggs == ""){
		localStorage.setItem("unlockEggs","v1,v2,v3,v4,v5");
		eggs = "v1,v2,v3,v4,v5";
	}
	var eggsTab = var eggsTab = eggs.split(",");
  if(d.egg<eggsTab){
	  d.egg++;
  }else{
	  d.egg=0;
  }
  show_egg(showEgg(eggs(d.egg)));
  localStorage.setItem("egg",d.egg);
}
function show_egg(egg){
  var red = "<div id=\"mon\"></div>"
  display(egg,"fix");
}
function confirm_egg(){
  //store chosen egg, set option to menu
  d.chooseEgg = d.egg;
  localStorage.setItem("chooseEgg",d.chooseEgg);
  d.option="menu";
  localStorage.setItem("option",d.option);
  d.menu="";
  localStorage.removeItem("egg");

  d.hunger=0;
  d.strength=0;
  d.effort=0;
  d.energy=10;

  d.evotime=60;
  d.mon = d.egg;
  localStorage.setItem("mon",d.mon);

  d.startTime=new Date();
  localStorage.setItem("startTime",d.startTime);
  bg.vTime();

  display();
}
