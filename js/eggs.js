// Eggs
function chooseEgg(){
  toggleChooseArrows(false);
  p.option = "egg";
  //localStorage.setItem("option",d.option);
  if(p.egg == null){
    p.egg = "0";
    //localStorage.setItem("egg",d.egg);
  }
  save();
  showEgg("v1");
}
function selectEgg(){
  load();
	//var eggs = localStorage.getItem("unlockedEggs");
	if(p.eggs == null || p.eggs == ""){
    p.eggs="v1,v2,v3,v4,v5";
		//localStorage.setItem("unlockEggs","v1,v2,v3,v4,v5");
		//eggs = "v1,v2,v3,v4,v5";
    save();
	}
	var eggsTab = p.eggs.split(",");
  if(p.egg<eggsTab.length-1){
	  p.egg++;
  }else{
	  p.egg=0;
  }
  showEgg(eggsTab[p.egg]);
  save();
  //localStorage.setItem("egg",d.egg);
}
function showEgg(egg){
  display(egg,"fix");
}
function confirmEgg(){
  //store chosen egg, set option to menu
  toggleChooseArrows();
  p.chooseEgg = p.egg;
  //localStorage.setItem("chooseEgg",d.chooseEgg);
  p.option="menu";
  //localStorage.setItem("option",d.option);
  p.menu="";
  //localStorage.removeItem("egg");
  //p.egg=null;

  p.hunger=0;
  p.strength=0;
  p.effort=0;
  p.energy=0;

  p.mon = "v"+(p.egg+1);
  p.state="fix";
  //localStorage.setItem("mon",d.mon);
  //localStorage.setItem("state",d.state);
  save();
  showEgg("v"+(p.egg+1));
  setTimer(30,"eggShake");
  setTimer(60,"hatch");
}
