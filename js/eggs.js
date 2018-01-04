// Eggs
function chooseEgg(){
  toggleChooseArrows(false);
  d.option = "egg";
  localStorage.setItem("option",d.option);
  if(d.egg == null){
    d.egg = "0";
    localStorage.setItem("egg",d.egg);
  }
  showEgg("v1");
}
function selectEgg(){
	var eggs = localStorage.getItem("unlockedEggs");
	if(eggs == null || eggs == ""){
		localStorage.setItem("unlockEggs","v1,v2,v3,v4,v5");
		eggs = "v1,v2,v3,v4,v5";
	}
	var eggsTab = eggs.split(",");
  if(d.egg<eggsTab.length-1){
	  d.egg++;
  }else{
	  d.egg=0;
  }
  showEgg(eggsTab[d.egg]);
  localStorage.setItem("egg",d.egg);
}
function showEgg(egg){
  display(egg,"fix");
}
function confirmEgg(){
  //store chosen egg, set option to menu
  toggleChooseArrows();
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
  d.mon = "v"+(d.egg+1);
  localStorage.setItem("mon",d.mon);

  showEgg("v"+(d.egg+1));
}
